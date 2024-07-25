import Posts from '@/utils/models/Posts';
import Connect from '@/utils/database/db';
import { NextResponse } from 'next/server';

interface PostURL {
    _id: string;
}

export const GET = async (request: Request, context: {params: PostURL}) => {
  // const _id = "66a05bb7373e5a728e1d68c7"; //teste para verificar funcionalidade
  const _id = context.params._id;
  console.log(_id)

  await Connect();

  try {

    const post = await Posts.findById(_id);

    if (!post) {
      return new NextResponse('Post não encontrado', { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 203 });

  } catch (error) {
    console.log(error)
    return new NextResponse(`Erro ao buscar o post:${error}`, { status: 500 });
  }
}