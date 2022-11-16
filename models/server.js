const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server { 

    constructor() {
        this.app = express()
        this.port = process.env.port //puerto
        this.usuariosPath = '/api/usuarios'
        this.middlewares() //incluir otras cosas de la app
        this.conetardb() //conectar a la base de datos
        this.routes() //incluir rutas
    }

    async conetardb(){ //espera erspuesta del servidor
        await dbConnection() //nesesario para esperar
    }

    middlewares() {//Otras funcionalidades
        this.app.use(cors()) //para seguridad
        this.app.use(express.static('public')) //indicar directorio de paginas estaticas
    }

    routes() { //Rutas de la aplicación
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() { //escuchar el puerto
        this.app.listen(this.port, (reg, res) => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

}

module.exports = Server