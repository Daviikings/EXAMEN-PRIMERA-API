const express = require ('express');        //requiero modulo expres y lo guardo en una constante//
const app = express();                      //me retorna un objeto y ese objeto lo almaceno en contant//
//a traves de esa const voy a crear mi servidor, necesito inicializarlo//

//configuracion
app.set('port', process.env.PORT || 3000);  //si un sist operativo esta dando un puerto, tomalo || si no usa el pto 3000


//middlewares: funciones ejecutables andes de procesar algo o que lleguen a las funcionalidades de las rutas
app.use(express.json());                    //si resibimos un json, nuestro modulo expres lo entiene por nosotros para acceder a la info 


//routes o URL
app.use(require('./routes/employees'));     //aqui requiero carpeta routes/emp

//starling server

//todo esto se executa index.js para iniciar el servidor
app.listen(app.get('port'), () => {                     //aqui obtenemos el puerto definido arriba PORT
    console.log('Server on port', app.get('port'));  //aqui tambien para verlo reflejado en el mensaje
});