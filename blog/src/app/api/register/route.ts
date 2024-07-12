import User from '@/utils/models/User'
import Connect from '@/utils/database/db'
import { NextResponse } from 'next/server'

// Cripitografia
import bcrypt from 'bcrypt'

export const POST = async (request: any) => {

    const { name, email, password } = await request.json()

    await Connect();

    const emailExists = await User.findOne({ email });

    if (emailExists) {
        return new NextResponse("Email já cadastrado!", { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save()
        return new NextResponse("Email cadastrado com sucesso!", { status: 201 });

    } catch (err: any) {
        return new NextResponse("Erro ao cadastrar", { status: 500 });
    }
};