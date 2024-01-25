import React from 'react'
import ArticleCard, { Post } from './ArticleCard'
import './Main.css'

type Props = {
  posts: Post[]
}

export default function Main(props: Props) {
  const { posts } = props

  return (
    <div className="relative bg-white pt-10 z-0 mt-[550px] pb-[20px] shadow-[0_0_30px_0_rgba(0,0,0,0.5)">
      <div className="mx-auto container">
        <div className="pt-12">          
          <div className="cards">
            {posts.map((post, i) => {
              return <ArticleCard post={post} position={i} key={i} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
