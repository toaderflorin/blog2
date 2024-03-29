---
layout: post
title:  "Language Performance Doesn't Matter (Most Of The Time)"
date:   2024-03-08 09:39:37 +0300
description: "Here's something that might be a bit controversial: I believe that for most software projects, the performance of the language (C#, Golang) doesn't matter that much. The reason I am writing this article is that I've seen an almost cultlike obsession with various languages and tech stacks, to the point where teams are pushing for a complete rewrite of the application. I believe this is  not warranted for most projects.
"
icon: "icon.jpg"
image: "cucumber.jpg"

---
Here's something that might be a bit controversial: *I believe that for most software projects, the performance of the language (C#, Golang, PHP, Ruby) doesn't matter that much. The reason I am writing this article is that I've seen an almost cultlike obsession with various languages and tech stacks, to the point where teams are pushing for a complete rewrite of the application. Even if there isn't a push for a complete rewrite, there usually is a push for a *polyglot* microservice setup, which has its own problems.*

I believe this is  not warranted for most projects, and I'll explain why. But first, let's look at a benchmark showing raw performance for different languages.

<img src="perf.jpg" class="img" loading="lazy" />

As we can see, there's quite a big difference between, say C and PHP, and if you were to implement a game, or a database engine, the choice of language would matter *a lot*. But most projects aren't relational database engines or games, they are web applications. And most applications actually use frameworks, written on top of a language, which interact with native code. But before we get into specifics, let's look at code optimization, or specifically an approach to code optimization.

### Inner Loop Optimization
A common theme when thinking about optimizing code is the concept of *inner loop optimization*. Consider the following code:

```javascript
let before = 0, after = 0, inner = 0
let n = 10

for (let i = 0; i < 100; i++) {
  before++
  
  for(let j = 0; j < 100; j++) {
    inner++
  }

  after++
}

console.log({ before, inner, after })
```

Output for n equals 10.

```
{ before: 10, inner: 100, outer: 10 }
```

And for n equals 100.

```
{ before: 100, inner: 10000, outer: 100 }
```

We quickly see that the inner loop takes much longer than the outer loop, and this gets more and more pronounced, the bigger n is. Now imagine we have three loops, or four loops. It gets progressively worse. A lot of code uses inner loops, and while the lines of code of the functionality in the inner loop might not necessarily be more than the outer loop, they have significantly more impact on performance. Which is why a lot of optimizing efforts are targeted on the inner loop code.

### The Classic 3-Tier Architecture

This is quite academic, so how does this help is? We need to consider a typical web app using a 3-tier architecture.

<img src="3tier.svg" class="img" loading="lazy" />

1. Your API gets an HTTP request.
2. Based on this request, you run some authorization /  request validation logic.
3. If validation logic passes, you run some business logic code.
4. This logic reads or writes to a database, usually using an ORM.
5. The ORM code generates SQL, which is run against a relational database. 
6. This SQL is translated into an execution plan.
7. The results are returned to the API, then mapped and returned to the caller.

*We can ask ourselves what the inner loop would be here.*

That would be the SQL execution plan. In fact, if you do some profiling, you will find that most of the time is being spent on the database level.

Here's an example of a simple execution plan.

```
------------------------------------------------------------------------------
| Id | Operation           | Name        |Rows | Bytes |Cost (%CPU)| Time    |
------------------------------------------------------------------------------
|  0 | SELECT STATEMENT    |             |   4 |   124 |   5  (20)| 00:00:01 |
|  1 |  SORT ORDER BY      |             |   4 |   124 |   5  (20)| 00:00:01 |
|* 2 |   HASH JOIN         |             |   4 |   124 |   4   (0)| 00:00:01 |
|* 3 |    TABLE ACCESS FULL| CATEGORIES  |   4 |    60 |   2   (0)| 00:00:01 |
|  4 |    TABLE ACCESS FULL| PRODUCTS    |  27 |   432 |   2   (0)| 00:00:01 |
------------------------------------------------------------------------------
```
What happens here is:

1. The engine doesn't an inner join between the categories and products using the hash join algorithm.
2. It sorts the output of this join, and selects only some columns.

While a hash join can be quite performant, the sort is costly. Also, keep in mind that the execution plan you are getting depends both on what indexes you have in the databases, as well as the ORM. And yes, ORM performance does matter.

Here is an interesting graph comparing the performance of different ORMs available for Node.js.

<img src="performance.png" class="img" loading="lazy" />

As we can see, there are factors that impact performance significantly than language or runtime.
