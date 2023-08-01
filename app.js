
const{crearArchivo}= require ('./helpers/multiplicar.js');
const argv=require('./config/yargs.js');



console.clear();

// const[,,arg3='base=5']=process.argv;
// const[,base=5]=arg3.split('=');

// console.log(arg3);



//console.log(process.argv);


console.log("base de yargs",argv.base,argv.h);






//base=8;


crearArchivo(argv.b,argv.l,argv.h)
 .then(nombreArchivo=>console.log(nombreArchivo,"creado"))
 .catch(err=>console.log(err));

