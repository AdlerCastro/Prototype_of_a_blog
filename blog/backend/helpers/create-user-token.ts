// Função a ser reutilizada para login
import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"

const createUserToken = async(user, req:NextApiRequest, res:NextApiResponse) => {
    
    // Create Token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "nossosecret",) // ----> Fortificação do token em segurança

    // Return Token
    res.status(200).json({
        message: 'Você está autenticado',
        token: token,
        userId: user._id,

    })

}

export default createUserToken