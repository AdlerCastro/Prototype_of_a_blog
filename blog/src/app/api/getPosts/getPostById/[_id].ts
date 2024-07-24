import Posts from '@/utils/models/Posts';
import Connect from '@/utils/database/db';
import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { _id: string } }) {
  const { _id } = params;

  await Connect();

  try {
    const post = await Posts.findById(_id);
    return new NextResponse(JSON.stringify(post), { status: 200 });

  } catch (error) {
    return new NextResponse(`Post não encontrado${error}`, { status: 404 });
  }
}