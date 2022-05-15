const fs = require('fs');
/*
//creando el archivo datos2.csv
fs.writeFile('datos2.csv','Nombre',(error)=>{
if(error){
    console.log('Error : ${error}');
}
});*/

/*
//leyendo el archivo
fs.readFile('datos2.csv', 'utf-8',(error,dato)=>{
if(!error){
    console.log(dato);
}else{
    console.log('Error : ${error}');

}
});
*/

/*
//renombrando el archivo
fs.rename('datos2.csv','Datos2.csv',(error)=>{
if(!error){
    console.log("Se renombro el archivo")

}else{
    console.log('Error : ${error}');


}
});*/

//Guardar informaciob en el archivo
fs.appendFile('Datos2.csv','\nDaniel',(error)=>{

    if(!error){
        console.log("Se guardo la informacion")
    
    }else{
        console.log('Error : ${error}');
    
    }
});
