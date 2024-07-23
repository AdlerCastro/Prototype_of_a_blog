'use client'

import { useRouter } from 'next/navigation'
import { useMutation } from 'react-query';

import Button from '@/components/atoms/Button';
import './styles.css'

export default function CreatePost() {

  const router = useRouter();

  const routerBack = () => {
    router.back()
  }

  
  async function createPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const mutation = useMutation({
      mutationFn: async () => {
        return fetch("/api/createPost")
      },
    })

    mutation.mutate()

  //   try {
  //     await fetch("/api/createPost", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         title,
  //         description
  //       })
  //     })

  //   } catch (error) {
  //     console.log(error)
  //   }
  }

  return (
    <main className='create-post'>
      <h1>Criando Post</h1>
      <Button className = "routerBack" onClick={() => routerBack()}>Voltar</Button>
      <div className='space-form'>
        <form onSubmit={createPost} className='form-create-post'>
          <h4>Título</h4>
          <input
            type="text"
            name="title"
            required
            className='input'
          />
          <h4>Descrição</h4>
          <textarea
            name="description"
            required
            className='input'
          />
          <button type='submit'>Criar</button>
        </form>
      </div>
    </main>
  )
}