const jwt = require('jsonwebtoken')

const createUserToken = async(user, req, res) => {

    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "secret") // O segundo parâmetro torna o token único e seguro

    res.status(200).json({
        message: "Usuário autenticado",
        token: token,
        userId: user._id
    })

}

module.exports = createUserToken