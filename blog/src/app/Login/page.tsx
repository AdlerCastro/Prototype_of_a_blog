'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

import './styles.css'

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();


  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.replace("/")
    }
  }, [sessionStatus, router])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email")
    const password = formData.get("password")

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      setError("Email ou senha inválido(s)");
      if (res?.url) router.replace("/");

    } else {
      setError("")
    }
  }

  if (sessionStatus === "loading") {
    return <h1>Calma...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <main className='login'>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Entrar</button>
          <p>{error}</p>
          <Link href='/Register'>Registre-se</Link>
        </form>
      </main>
    )
  )
}

export default Login