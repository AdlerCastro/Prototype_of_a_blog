import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import './styles.css'

const Posts = async () => {

    // Verificação de usuário logado
    const session = await getServerSession();

    if (!session) {
        redirect("/Login");
    }

    return (
        <main className='Posts'>
            <div className='top-posts'>
                <h1>Posts</h1>
                <Link href='/Posts/CreatePost'>+Criar</Link>
            </div>
            <div className='view-posts'>
            <h2>Os posts ficarão aqui</h2>
            </div>
        </main>
    )
}

export default Posts