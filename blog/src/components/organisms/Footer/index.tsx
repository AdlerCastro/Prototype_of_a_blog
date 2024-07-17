import Link from 'next/link'
import './styles.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='contacts'>
        <h2>Contacts</h2>
        <Link href='https://github.com/AdlerCastro/' target='_blank'>Adler Castro</Link>
      </div>
      <div>
        <p>Desenvolvido por Adler Castro</p>
      </div>
    </footer>
  )
}

export default Footer