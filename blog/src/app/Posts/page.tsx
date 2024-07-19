'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { getPosts } from '../actions/posts'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import './styles.css'

export default function Posts() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  // Resgatando os dados dos posts do BD
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data: any) => {
      if (data.error) {
        return console.error(data.error)
      }
      setPosts(data)
    })
  }, [])

  // Verificação de usuário logado
  useEffect(() => {
    if (sessionStatus === 'unauthenticated') {
      router.replace("/Login")
    }
  }, [sessionStatus, router])

  if (sessionStatus === "loading") {
    return <h1>Calma...</h1>;
  }

  return (
    <main className='Posts'>
      <h1>Posts</h1>
      <Link href='/Posts/CreatePost'>+Criar</Link>
      <div className='view-posts'>
        {posts.map((post: any) => (
          <div key={post._id} className='card-post'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}