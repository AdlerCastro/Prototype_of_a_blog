import { NextApiRequest } from "next"

const getToken = (req:NextApiRequest) => {

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]

    return token
}

export default getToken