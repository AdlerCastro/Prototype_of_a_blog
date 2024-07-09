const User = require('../models/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Helpers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')

module.exports = class UserController{
    static async register(req, res) {
        const { name, email, phone, password, confirmPassword} = req.body

        // Validations
        if(!name){
            res.status(422).json({message: 'O nome é obrigatório'})
            return;
        }
        if(!email){
            res.status(422).json({message: 'O email é obrigatório'})
            return;
        }
        if(!phone){
            res.status(422).json({message: 'O telefone é obrigatório'})
            return;
        }
        if(!password){
            res.status(422).json({message: 'A senha é obrigatório'})
            return;
        }
        if(!confirmPassword){
            res.status(422).json({message: 'A confirmação de senha é obrigatório'})
            return;
        }

        if(password !== confirmPassword) {
            res.status(422).json({message: 'As senhas precisam ser iguais'})
            return
        }

        // Check if user exists
        const userExists = await User.findOne({ email: email})

        if(userExists){
            res.status(422).json({message: 'Esse email já está sendo utilizado'})
            return
        }

        // Creating the encrypted password
        const salt = await bcrypt.genSalt(12) // Encryption parameters
        const passwordHash = await bcrypt.hash(password, salt) // Encrypted password

        // Create a user
        const user = new User({
            name: name,
            email: email,
            phone: phone,
            password: passwordHash,
        })

        try {
            const newUser = await user.save()
            
            await createUserToken(newUser, req, res)

        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    static async login(req, res){

        const {email, password} = req.body

        if(!email) {
            res.status(422).json({ message: 'Email obrigatório'})
            return
        }

        if(!password) {
            res.status(422).json({ message: 'Senha obrigatório'})
            return
        }

        // Check if user exists
        const user = await User.findOne({ email: email})

        if(!user){
            res.status(422).json({message: 'Email não cadastrado'})
            return
        }

        // Check if password match with db password
        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword) {
            res.status(422).json({message: 'Senha inválida'})
            return
        }

        await createUserToken(user, req, res)
    }

    static async checkUser(req, res){
        let currentUser

        if(req.headers.authorization){
            const token = getToken(req)
            const decoded = jwt.verify(token, 'secret')

            currentUser = await User.findById(decoded.id)

            currentUser.password = undefined
        } else{
            currentUser = null
        }

        res.status(200).send(currentUser)
    }
}