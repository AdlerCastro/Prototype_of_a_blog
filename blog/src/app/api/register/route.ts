import User from '@/utils/models/User'
import Connect from '@/utils/database/db'
import { NextResponse } from 'next/server'

// Cripitografia
import bcrypt from 'bcrypt'

export const POST = async (req:any) => {
    try {
        const {name, email, password} = await req.json()

        await Connect()

        const emailExists = await User.findOne({email})

        if (emailExists) {
            return NextResponse.json({
                message: "Email já cadastrado!",
                status: 409
            })
        }

        const hashedPassword = await bcrypt.hash(password, 5)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save()

        return NextResponse.json({
            message: "Email cadastrado com sucesso!",
            status: 201
        })

    } catch (error) {
        return NextResponse.json({
            message: "Erro ao cadastrar",
            status: 500
        })
    }
}