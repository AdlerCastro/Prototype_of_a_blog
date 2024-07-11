'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import './styles.css'

export default function Register() {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "",
    })

    console.log(data)
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
            onChange={(e) => {setName(e.target.value)}}
            value={name}
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
            onChange={(e) => {setEmail(e.target.value)}}
            value={email} 
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
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
            />
        </label>
        <button
          type="submit">Enviar</button>
      </form>
    </main>
  )
}