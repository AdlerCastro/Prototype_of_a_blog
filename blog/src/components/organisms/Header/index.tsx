import Image from 'next/image'
import Anya from 'public/images/anyaPointing.png'
import './styles.css'
import Link from 'next/link'

const Header = () => {
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
        <div className='interactions'>
          <p>
            Cadastre-se
          </p>
          <p>
            Login
          </p>
        </div>

      </div>
    </header>
  )
}

export default Header