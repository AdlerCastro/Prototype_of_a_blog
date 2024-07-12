'use client'

import React, { useState } from 'react'
// import { signIn } from 'next-auth/react'
import './styles.css'
import { useRouter } from 'next/navigation'

export default function Register() {

  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    // signIn("credentials", {
    //   ...data,
    //   callbackUrl: "/About",
    // })

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      if (res.status === 409) {
        setError("Email já cadastrado")
      } 
      
      if (res.status === 201) {
        setError("")
        router.push("/Login")
      }

    } catch (err) {
      setError("Error, tente novamente")
      console.log(err)
    }

  }

  return (
    <main className='register'>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="name"
            placeholder='Digite seu nome'
            required
            className="input"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder='Digite seu email'
            required
            className="input"
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            placeholder='Digite sua senha'
            required
            className="input"
          />
        </label>
        <button type="submit">Enviar</button>
        <p>{error}</p>
      </form>
    </main>
  )
}