'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import './styles.css'

export default function Register() {

  const [error, setError] = useState("")
  const router = useRouter()

  async function createUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

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
        setError("*Email já cadastrado*")
      } 
      
      if (res.status === 201) {
        setError("")
        alert("Email cadastrado com sucesso!")
        router.push("/Login")
      }

    } catch (err) {
      setError("Error, tente novamente")
      console.log(err)
    }

  }

  return (
      <main className='register'>
        <form onSubmit={createUser}>
          <label>
            <h3>Nome</h3>
            <input
              type="text"
              name="name"
              placeholder='Digite seu nome'
              required
              className="input"
            />
          </label>
          <label>
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              placeholder='Digite seu email'
              required
              className="input"
            />
          </label>
          <label>
            <h3>Senha</h3>
            <input
              type="password"
              name="password"
              placeholder='Digite sua senha'
              required
              className="input"
            />
          </label>
          <button type="submit">Enviar</button>
          <span>{error}</span>
          <Link href='/Login'>Já tem uma conta? Acesse</Link>
        </form>
      </main>
    )
}