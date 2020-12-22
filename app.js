const { yargs } = require('./config/yargs');
const colors = require('colors');
const { createFile: crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = yargs._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(yargs.base, yargs.limite).then(tabla => {
            console.log(`====================`.green);
            console.log(`==== Tabla del ${yargs.base} ====`.green);
            console.log(`====================`.green);
            console.log(tabla);

        }).catch(err => console.error(err));
        break;
    case 'crear':
        console.log('Crear');
        // console.log(yargs);
        crearArchivo(yargs.base, yargs.limite).then(archivo => console.log(`Archivo Creado: ${ colors.green(archivo) }`)).catch(err => console.error(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(yargs);



// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);


// console.log(module);