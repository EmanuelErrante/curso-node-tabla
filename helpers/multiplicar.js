
const fs= require ('fs');
const colors=require('colors');


const crearArchivo=async (base=5, listar=false, hasta=10)=>{


    try {

   
    
    let consola='';
    let salida='';
    
    for (let i=1;i<=hasta;i++){
    
    
       consola+=`${base} ${'X'.green} ${i} = ${base*i}\n`
       salida+=`${base} ${'X'} ${i} = ${base*i}\n`
    }
    

    if(listar)
   { 
    console.log("======================".green);
    console.log(`    Tabla del ${base}      `.rainbow);
    console.log("======================".green);
    console.log(consola);}
    fs.writeFileSync(`./salida/tabla-base-${base}.txt`,salida);

   return `tabla-base-${base}.txt`;
        
    } catch (error) {
        throw(error);
    }


    
}


module.exports={
    crearArchivo
}