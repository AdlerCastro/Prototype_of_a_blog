'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import './styles.css'

export default function Posts() {

  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  // Verificação de usuário logado
  useEffect(() => {
    if (sessionStatus === 'unauthenticated') {
      router.replace("/Login")
    }
  }, [sessionStatus, router])
    
  if (sessionStatus === "loading") {
    return <h1>Calma...</h1>;
  }

  // Resgatando os dados dos posts do BD
  const [posts, setPets] = useState([])

  return (
    <main className='Posts'>
      <h1>Posts</h1>
      <Link href='/Posts/CreatePost'>+Criar</Link>
      <div className='view-posts'>
        <h2>Os posts ficarão aqui</h2>
        
      </div>
    </main>
  )
}