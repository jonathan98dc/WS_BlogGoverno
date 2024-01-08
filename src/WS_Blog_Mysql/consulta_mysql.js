const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'blog'

});

const titulo = 'Governo anuncia mais de R$ 10 saassssssss em investimentos nos setores de portos, aeroportos e hidrovias em seis meses'

const consulta = (msg)=>{
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query('select * from `noticias` where `titulo` = ?', msg, function(error,result,fields) {
            let countresult = result.length
            if(countresult == 0){
                console.log('titulo não cadastrado')
            }else{
                console.log('Titulo cadastrado')
            }
            if(error) throw error;

        })
    })
};

consulta(titulo);