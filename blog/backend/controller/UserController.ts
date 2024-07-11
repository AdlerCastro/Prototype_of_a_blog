import User from '../models/User'
import jwt from 'jsonwebtoken'

// Cripitografia
import bcrypt from 'bcrypt'

// Helpers
import createUserToken from 'backend/helpers/create-user-token'
import getToken from 'backend/helpers/get-token'
import { NextApiRequest, NextApiResponse } from 'next'

export default class UserController {
    
    static async register(req:NextApiRequest, res:NextApiResponse) {
        /*Escrevendo as rotas necessárias para o registro --------------------------------- */
        const { name, email, phone, password, confirmpassword } = req.body
        /*--------------------------------------------------------------------------------- */

        // Validações
        if(!name){
            res.status(422).json({message: 'O nome é obrigatório'})
            return
        }
        
        if(!email){
            res.status(422).json({message: 'O email é obrigatório'})
            return
        }
        
        if(!phone){
            res.status(422).json({message: 'O telefone é obrigatório'})
            return
        }
        
        if(!password){
            res.status(422).json({message: 'A senha é obrigatório'})
            return
        }
        
        if(!confirmpassword){
            res.status(422).json({message: 'Confirmar a senha é obrigatório'})
            return
        }

        //Verificar a confirmação de senhas
        if(password !== confirmpassword){
            res.status(422).json({message: 'As senhas precisa ser  igual'})
            return
        }

        //Verificar se o usuário existe
        const userExists = await User.findOne({email: email})

        if(userExists){
            res.status(422).json({message: 'O email já está cadastrado'})
            return
        }

        // criar uma senha criptografada
        // ----> String a mais de 12 caracteres além do algoritmo
        const salt = await bcrypt.genSalt(12)
        // ----> Senha criptografada
        const passwordHash = await bcrypt.hash(password, salt)

        // Criando usuário
        const user = new User({ 
            //Quando os nomes são iguais aos escritos nas chaves, pode ser utilizado esse método
            name,
            email,
            phone,
            password: passwordHash,
        })

        //Avisar o erro caso tenha problema em salvar o usuário
        try {
            
            const newUser = await user.save()
            
            await createUserToken(newUser, req, res)

        } catch (error) {
            res.status(500).json({ message: error})
        }

    }

    static async login(req:NextApiRequest, res:NextApiResponse) {

        const {email, password} = req.body

        /* Validações --------------------------------------------------------------------- */
        if(!email){
            res.status(422).json({message: 'O email é obrigatório'})
            return
        }

        if(!password){
            res.status(422).json({message: 'A senha é obrigatório'})
            return
        }
        /*--------------------------------------------------------------------------------- */

        /* Verificar se o usuário exist para logar ---------------------------------------- */
        const user = await User.findOne({email: email})

        if(!user){
             res.status(422).json({message: 'O usuário/email não está cadastrado'})
             return
        }
        /*--------------------------------------------------------------------------------- */

        /* Verificar se a senha é igual a senha cadastrada no DB ------------------------- */
        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
        res.status(422).json({message: 'A senha inválida'})
        return
        }
        /*--------------------------------------------------------------------------------- */

        //Logar pela tela de login
        await createUserToken(user, req, res)
    }

    static async checkUser(req:NextApiRequest, res:NextApiResponse) {

        /* Verificar se o usuário existe -------------------------------------------------- */
        let currentUser

        if(req.headers.authorization){

            const token = getToken(req)
            const decoded = jwt.verify(token, 'secret')

            currentUser = await User.findById(decoded.id)

            currentUser.password = undefined
            
        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
        /*--------------------------------------------------------------------------------- */
    }
}