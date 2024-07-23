'use client'

import { getPosts } from '../actions/posts'
import { useQuery } from 'react-query'
import { useRouter } from 'next/navigation'

import Button from '@/components/atoms/Button'
import { Loading } from '@/components/templates/Loading'
import './styles.css'

export default function Posts() {
  const router = useRouter();

  const routerForward = () => {
    router.push('/Posts/CreatePost')
  }

  const ViewPost = (_id: string) => {
    router.push(`/Posts/${_id}`);
  }

  const { data, isLoading } = useQuery({
    queryFn: async () => await getPosts(),
    queryKey: ["Posts"]
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className='Posts'>
      <h1>Posts</h1>
      <Button className="buttonRouter" onClick={() => routerForward()}>+Criar</Button>
      <div className='view-posts'>
        {data.map((post: any) => (
          <div key={post._id} className='card-post'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button onClick={() => ViewPost(post._id)}>Read more</button>
          </div>
        ))}
      </div>
    </main>
  )
}