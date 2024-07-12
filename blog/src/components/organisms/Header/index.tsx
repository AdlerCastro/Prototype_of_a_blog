'use client'

import Image from 'next/image'
import Anya from 'public/images/anyaPointing.png'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import './styles.css'
import Button from '@/components/atoms/Button'

const Header = () => {

  const { data: session }: any = useSession();

  return (
    <header className='header'>
      <Image src={Anya} alt='Logo' className='image' />
      <div className='container'>
        <nav className='navBar'>
          <Link href="/">Início</Link>
          <Link href="/Posts">Publicações</Link>
          <Link href="/About">Sobre</Link>
          <Link href="/Contacts">Contato</Link>
        </nav>
        {!session ? (
          <div className='interactions'>
            <Link href='/Register'>
              Cadastre-se
            </Link>
            <Link href='/Login'>
              Login
            </Link>
          </div>

        ) : (
          <div className='interactions'>
            {session.user?.email}
            <Button onClick={() => {signOut()}} className="logout">
              Sair
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header