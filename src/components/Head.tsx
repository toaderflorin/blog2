import React from 'react'

export default function Head(props: any) {
  const { post, location } = props
  console.log( 'POST', location.href + post.frontmatter.image)
  console.log('frontmatter', post.frontmatter)
  //  + post.frontmatter.image
// content={location.href + post.frontmatter.image} />

  return (
    <>
      <title>{post.frontmatter.title}</title>   
      {/* <meta name="image" content={location.href + post.frontmatter.image} /> */}
      <meta name="og:image:secure_url" content="https://florintoader.me/2024-01-08-ddd-bdd/cucumber.jpg" />
      <meta name="og:description" content={post.frontmatter.description} />
    </>
  )
}
