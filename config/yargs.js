const argv=require ('yargs')
                    .option('b',{
                             alias:'base',
                             type:'number',
                             demandOption:'true',
                             describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                             alias:'listar',
                             type:'boolean',
                             //demandOption:'true',
                             default:false,
                             describe:'Muestra un listado en consola, si omites -l o --listar no se muestra nada'
                    })
                    .option('h',{
                             alias:'hasta',
                             type:'number',
                             //demandOption:'true',
                             default:10,
                             describe:'limite superior del multiplicado'
                    })
                    .check( (argv,options)=>{
                        if( isNaN(argv.b)){throw 'La base tiene que ser un numero'}
                        return true;
                    })
                   .argv;

module.exports = argv;