---
layout: post
title:  "Use SQL Indexes With Caution"
date:   2024-02-10 09:39:37 +0300
description: "A typical mistake among junior developers is adding too many indexes to tables in SQL databases, way more than it would be necessary. On first impression, it wouldn't look like they would be a big deal, but that's not the case. A Simple Paralel:
Think of indexes as a Indexes use B-tree structures, which generalize binary trees and allow for logarithmic time searches. These B-trees also need to be rebalanced. Before we get into B-trees, we need to discuss balancing binary trees and why that is important.
"
icon: "binary-tree.png"
categories: 

---
A typical approach that a lot of developers take to improve query performance would be to add a lot of indexes to your database, but I'd like to mention why this is a mistake.

### A Simple Paralel
Think of indexes as a 

*Indexes use B-tree structures, which generalize binary trees and allow for logarithmic time searches. These B-trees also need to be rebalanced.*

Before we get into B-trees, we need to discuss balancing binary trees and why that is important.

### Let's Start With Binary Trees
Let's assume we have a set of numbers: 1, 6, 3, 2, 4, 8. We want to know if a specific number exists in this sequence. The trivial approach is to go through them one by one and check if our desired value is there (we could, of course, also you a hash tablet, but this is a simple example for demonstration purposes). Instead of keeping this data in a linked list, we could store it in a binary tree. As you may see, depending on the sequence, you might get more balanced trees or trees that are not balanced at all. What we need here is to balance the tree.
 
A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of any node's left and right subtree differs by not more than 1.

<img src="unbalanced.png" class="img" />

Following are the conditions for a height-balanced binary tree:

* The difference between the left and the right subtree for any node is not more than one.
* The left subtree is balanced.
* The right subtree is balanced.

What we've shown is a very simple example, but in reality, we need to do sequential access and insertions, deletions, etc.

In computer science, a B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. The B-tree generalizes the binary search tree, allowing for nodes with more than two children. Unlike other self-balancing binary search trees, the B-tree is well suited for storage systems that read and write relatively large blocks of data, such as databases and file systems.

<img src="b-tree.jpeg" class="img" />

A btree also allows an ordered sequence aas data for the:
 
* Every node has at most m children.
* Every internal node has at least ⌈m/2⌉ children.
* Every non-leaf node has at least two children.
* All leaves appear on the same level and carry no information.
* A non-leaf node with k children contains k−1 keys.

So we have a bit of leeway when it comes to how many children a node can contain. Overall this is a much more flexible structure.

### Clustered Versus Non Clustered Indexes
Database indexes come in two flavours: clustered and non-clustered. A clustered index defines the order in which data is physically stored in a table. Table data can be sorted in only way, therefore, there can be only one clustered index per table. In SQL Server, the primary key constraint automatically creates a clustered index on that particular column.

<img src="clustered.webp" class="img" />

With non-clustered indexes, the a node in the B-tree points to the data on disk. With clustered indexes, the node actually represents the data. While this of course

In the context of databases, index cardinality refers to the number of distinct values stored in a specific column within an index. It's an important metric for database optimization because it influences the effectiveness of indexes in speeding up queries.

### Understanding Index Cardinality


In the world of database indexes, cardinality refers to the uniqueness of values stored in a specific column within the index. It essentially tells you how many distinct values that column contains. High cardinality means lots of unique values, while low cardinality indicates many duplicates.

Here's a breakdown:

Key points:

* Cardinality is an estimate, not an exact count. Databases use statistical methods to approximate it.
* It plays a crucial role in query optimization. The database uses cardinality to decide whether to use an index for a specific query and how efficient it will be.
* Generally, higher cardinality is better for indexes. More unique values allow the index to effectively narrow down results, leading to faster queries.

Types of cardinality:

* High cardinality: Many unique values (e.g., usernames, IDs, timestamps). These indexes efficiently filter data.
* Medium cardinality: Some unique values, some duplicates (e.g., city names, zip codes). Still helpful for filtering, but less selective.
* Low cardinality: Few unique values or even all duplicates (e.g., gender flags, boolean values). Indexing such columns might not be beneficial.

Impact on index selection:

* The query optimizer compares the cardinality of an index's column with the expected number of rows returned by the query.
* If the cardinality is much smaller than the total rows, the index can efficiently narrow down the search.
* If the cardinality is close to the total rows, using the index might not be much faster than scanning the entire table.

Additional notes:

* Cardinality can change over time as data gets added or modified. Keeping statistics updated is crucial for optimal performance.
* Some indexes, like covering indexes, can still be beneficial even with low cardinality due to additional information they store.


Low Cardinality:

Index cardinality is considered low when there are relatively few distinct values in a column. For instance, an index on a column storing gender (male or female) would have low cardinality. Low-cardinality indexes are generally less effective than high-cardinality indexes because they don't narrow down the search space significantly. However, they can still be helpful in some cases, such as when searching for specific values that occur infrequently.

High Cardinality:

An index is considered to have high cardinality when there are many distinct values in a column. For example, an index on a column storing customer IDs would typically have high cardinality. High-cardinality indexes are more effective than low-cardinality indexes in speeding up queries because they filter out a greater proportion of rows.

Cardinality vs. Selectivity:

Cardinality and selectivity are often used interchangeably, but they have distinct meanings. Cardinality is the total number of distinct values in a column, while selectivity is the proportion of rows that match a particular search condition. In other words, selectivity measures how well an index filters out rows. makes range queries faster, it also makes rebalancing slower. Significantly slower.

### A Simple Paralel: Materialized Views
Think of indexes as a

Indexes use B-tree structures, which generalize binary trees and allow for logarithmic time searches. These B-trees also need to be rebalanced.

Before we get into B-trees, we need to discuss balancing binary trees and why that is important.

### Quake 1 As A Case Study For Optimization
Games are notorious performance hogs, and developing a game like Quake 1 would have been exceptionally challenging, given the limited performance of the hardware at the time. Not only that, it's also considered a masterclass in software design.

<img src="quake1.jpg" class="img" loading="lazy" />

A huge part of the engine is visual surface determination, but the Quake engine uses precomputed visibility sets.

<img src="wireframe.png" class="img" loading="lazy" />

There's a lot going on. The engine needs to figure out a lot of things:
* A level is big, so the engine needs to figure out the exact polygons the player sees. It does so using 
* The engine also needs to figure out what enemies need to do in reaction to the player's actions.
* Collision detection, i.e., has the player bumped into a wall and what to do as a result.

Let's try to sketch the rendering loop. Keep in mind this highly simplifies things.

```c
  Polygon[] polygons = get_visible_polygons();
  
  Polygon transformed_polygon;
  ScreenSpacePoligon projected_polygon;
  Line current_line;

  for (int i = 0; i < sizeof(polygons); i++) {
    transformed_polygon = transform(polygon, currentPosition, currentHeading);    
    projected_polygon = project(transformed_polygon);
  
    for (int j = 0; j < sizeof(projected_polygon.horizontal_lines); j++) {        
      for (int k = 0; k < get_pixels(projected_polygon.horizontal_lines[j]); k++) {
        // implement perspective correct texture mapping for current pixel
      }
    }
  }
```
When comparing a normal rendered picture, we can see that the polygon vertexes (corners) are much lower in number than the number of pixels. And the per pixel correct texture mapping happens inside the inner loop, where performance matters. Also, correct texture mapping requires two divides per pixel and is quite expensive. So the inner loops were written in assembly (and texture correction was done every 8 pixels--the code used linear interpolation in between).