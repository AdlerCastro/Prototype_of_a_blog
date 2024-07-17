import Posts from "@/utils/models/Posts";
import Connect from "@/utils/database/db";
import { NextResponse } from 'next/server'


export const POST = async (request: any) => {
    const { title, description } = await request.json()

    await Connect();

    const newPosts = new Posts({
        title,
        description
    });

    try {
        await newPosts.save()
        return new NextResponse("Post criado com sucesso", { status: 202 });
        
    } catch (error:any) {
        return new NextResponse("Erro ao criar post, tente novamente", { status: 501 });
    }
}