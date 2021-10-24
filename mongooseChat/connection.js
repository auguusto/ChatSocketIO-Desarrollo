const mongoose = require('mongoose');
const connectionBase = mongoose.connection;

connectionBase.on('error', console.error.bind(console, 'error de conexion!: '));
connectionBase.once('open', () =>{
    console.log('Conectado!');
});

mongoose.connect('mongodb://localhost:27017/isis', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});