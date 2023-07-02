//lo vamos a utilizar para conectarnos
const mysql = require('mysql'); 

const mysqlConnection = mysql.createConnection({                //se guarda en la const y aqui es donde esta la coneccion
    host: 'localhost',                                           
    user: 'root',                                        
    password: 'password',
    database: 'company'
})

mysqlConnection.connect(function (err){                         //aca basicamente es la conexion y un por si ocurre error que me muestre por un mensaje 
    if(err) {                                                   //si esta conctada 
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;                               //modulo exportado                         