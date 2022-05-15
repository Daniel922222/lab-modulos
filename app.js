
const fs = require('fs');
console.log('iniciado')
/*fs.readFile('datos.txt', 'utf-8', (error,datos)=>{
    if(error){
        console.log('Error ${error}');
    }else{
 console.log(datos);
    }
    

});*/
let datos=fs.readFileSync('datos.txt', 'utf-8');
console.log(datos);
console.log('Fininalizado');

fs.appendFile('datos.txt','\n hola prueba 2',(error)=>{
    if (error) console.log('Error ${error}');

});