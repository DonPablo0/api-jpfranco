const mongoose = require('mongoose')
const dbConnection = async() => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log('Estableciendo conexion con la base de datos')
    }
    catch( error ){
        console.log('conexion no establecida')
    }
}
module.exports = {
    dbConnection
}