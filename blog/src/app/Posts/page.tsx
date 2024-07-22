'use client'

import { getPosts } from '../actions/posts'
import { useQuery } from 'react-query'

import Link from 'next/link'
import './styles.css'

export default function Posts() {

  const { data, isLoading } = useQuery({
    queryFn: async () => await getPosts(),
    queryKey: ["Posts"]
  })

  if (isLoading) {
    return <h1>Calma...</h1>;
  }

  return (
    <main className='Posts'>
      <h1>Posts</h1>
      <Link href='/Posts/CreatePost'>+Criar</Link>
      <div className='view-posts'>
        {data.map((post: any) => (
          <div key={post._id} className='card-post'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}