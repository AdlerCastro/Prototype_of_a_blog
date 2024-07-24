import Posts from '@/utils/models/Posts';
import Connect from '@/utils/database/db';
import { NextResponse } from 'next/server';

export const GET = async ({ params }: { params: { _id: string } }) => {
  
  const { _id } = params;
  console.log(_id)
  
  await Connect();
  
  try {
    const post = await Posts.findById(_id);
    if (!post) {
      return new NextResponse('Post não encontrado', { status: 404 });
    }
    return NextResponse.json(post);

  } catch (error) {
    console.log(error)
    return new NextResponse(`Erro ao buscar o post:${error}`, { status: 500 });
  }
}