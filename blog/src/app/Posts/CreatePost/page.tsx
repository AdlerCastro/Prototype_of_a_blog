'use client'

// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';
import React from 'react'

export default function CreatePost() {

  // // Verificação de usuário logado
  // const session = await getServerSession();

  // if (!session) {
  //   redirect("/Login");
  // }

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
    <main>
      <h1>Criando Post</h1>
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