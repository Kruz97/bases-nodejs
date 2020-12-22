const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const yargs = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = { yargs };