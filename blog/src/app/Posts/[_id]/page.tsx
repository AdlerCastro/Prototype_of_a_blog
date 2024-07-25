'use client'

import { useQuery } from 'react-query'
import { Loading } from '@/components/templates/Loading'
import { useParams } from 'next/navigation'
import { getPostById } from '@/app/actions/getPostById'
import { useRouter } from 'next/navigation'

import './styles.css'
import Button from '@/components/atoms/Button'

interface Post {
  _id: string;
  title: string;
  description: string;
}

export default function PostDetails() {

  const router = useRouter();

  const routerBack = () => {
    router.back()
  }

  const { _id } = useParams() as { _id: string };
  console.log(_id)

  const { data, isLoading, error } = useQuery<Post>({
    queryFn: async () => await getPostById(_id),
    queryKey: ["Posts", _id],
  })

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <p>Erro ao carregar o post</p>
  }
  
  return (
    <main className='view-details-posts'>
      <Button className="routerBack" onClick={() => routerBack()}>Voltar</Button>
      <h1>View Post</h1>
      <div className='space-view'>
        <div className='card-post-details'>
          <h2>{data?.title}</h2>
          <p>{data?.description}</p>
        </div>
      </div>
    </main>
  )
}