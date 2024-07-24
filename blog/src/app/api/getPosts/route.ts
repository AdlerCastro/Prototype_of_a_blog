import Connect from '@/utils/database/db'
import Posts from '@/utils/models/Posts'
import { NextResponse } from 'next/server'

export const GET = async () => {
    await Connect()

    try {
        const posts = await Posts.find();
        console.log(posts)
        return new NextResponse(JSON.stringify(posts), {status: 203});

    } catch (error) {
        return new NextResponse(`Erro em pegar os posts: ${error}`, {status: 503});
    }
}