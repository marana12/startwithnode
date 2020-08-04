const { crearArchivo, listarArchivos } = require('./multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('./config/colors');


const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivos(argv.base, argv.limite).then(resp => {
            console.log(resp.info);
        }, err => console.log(err.error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log(`The file ${resp} has been saved!`.info);
        }, err => console.log(err.red));
        break;
    default:
        console.log(`El comando ${comando} no existe`.error);
}