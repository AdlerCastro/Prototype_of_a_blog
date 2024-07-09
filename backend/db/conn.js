const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost27017/blog')
    console.log('Conectado ao Mongoose!')
}

main().catch((err) => console.log(err));


module.exports = mongoose