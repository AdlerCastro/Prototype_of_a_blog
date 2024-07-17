import mongoose from 'mongoose';

const dbName = 'BlogBase'
const MONGO_URL = `mongodb+srv://AdlerCastro:${process.env.DB_PWD}@blog.tp6dooy.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Blog`

const Connect = async () => {
   try {
      await mongoose.connect(MONGO_URL)
      console.log("MongoDB conectado")
      
   } catch (error) {
      throw new Error("Error ao conectar ao MongoDB")
   }

}

export default Connect