'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link';

import './styles.css'

export default function CreatePost() {

  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  // Verificação de usuário logado
  useEffect(() => {
    if (sessionStatus === 'unauthenticated') {
      router.replace("/Login")
    }
  }, [sessionStatus, router])

  if (sessionStatus === "loading") {
    return <h1>Calma...</h1>;
  }

  async function createPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const title = formData.get("title")
    const description = formData.get("description")

    try {
      await fetch("/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description
        })
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='create-post'>
      <h1>Criando Post</h1>
      <Link href='/Posts'>Voltar</Link>
      <form onSubmit={createPost}>
        <h4>Título</h4>
        <input
          type="text"
          name="title"
          required
          className='input'
        />
        <h4>Descrição</h4>
        <input
          type="text"
          name="description"
          required
          className='input'
        />
        <button type='submit'>Criar</button>
      </form>
    </main>
  )
}