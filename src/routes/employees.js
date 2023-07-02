const express = require('express');
const router = express.Router();                //aqui requerimos el metodo router de express

const mysqlConnection = require('../database');
//crear ruta servidor
router.get('/', (req, res) =>{                  //manejador de funsiones 
    mysqlConnection.query('SELECT *FROM employees',(err, rows, fields ) => {                //consulta, todos los datos, podria dar(error, filas, campos)
        if(!err){
            res.json(rows);                     //sin error envia datos tablas
        }else{
            console.log(err);                   //con error envia mensaje por consola
        }
    })                       

}); 

router.get('/:id', (req, res) => {          //cuando entren a ruta inicial mas un numero (id) sera manejado por funciones
    const { id } = req.params;              //aqui es donde viene el id de req.par
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {        //consulta qery pero con un where + []
        if(!err) {
            res.json(rows[0]);
        }else{
            console.log(err);               //luego ver por consola el id
        }     
    }); 
});

//para guardas datos 
router.post('/', (req, res) => {                    //ahora para crear datos
    const { id, name, salary } = req.body; 
    const query = `
        CALL employeeAddOrEdit( ?, ?, ? );
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) =>{
        if(!err){
            res.json({' Status: Employeed Saved '});
        }else{
            console.log
        }
    });
})                               

router.put('/:id', (req,res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = 'CALL employeeAddOrEdit(?, ?, ?)';
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({status:'Employee Update' });
        }else{
            console.log(err);
        }        
    }); 
});

//para borrar datos
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({ status: 'Employee Delete'});
        }else{
            console.log(err); 
        }
    });
});

module.router = router;                         //exportamos metodo router

