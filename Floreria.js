const mongoose = require ('mongoose')
const urlBD = "mongodb://localhost:27017/Floreria"

mongoose.connect(urlBD)
.then(() => {
    console.log('Bienvenido Florista <3');
})
.catch((err) => {
    console.log('Oops! Ha fallado la conexión :<');
})

const esquemaFlores = new mongoose.Schema(
    {
        name: {type: String},
        habitat: {type: String},
        precio: {type: Number}
    }
)

const modeloFlores = new mongoose.model('Flores', esquemaFlores)
modeloFlores.create({
    name: 'Tulipan',
    habitat: 'Campo',
    precio: 100
})