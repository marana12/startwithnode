const fs = require('fs');

let listarArchivos = (base, limite) => {
    return new Promise((resolve, reject) => {
        concat(base, limite, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        });

    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        concat(base, limite, (err, data) => {
            if (err) {
                reject(err)
            }
            fs.writeFile(`tables/table-${base}-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                }
                resolve(`table-${base}-${limite}.txt`)

            });
        })

    });
}
let concat = (base, limite, callback) => {
    if (!Number(base)) {
        callback(`El valor ${base} no es un numero`);
    }
    if (!Number(limite)) {
        callback(`El valor ${limite} no es un numero`);
    }
    let c_data = '';
    for (let i = 1; i <= limite; i++) {
        c_data += `${base} * ${i} = ${base*i}\n`
    }
    callback(null, c_data);
}

module.exports = {
    crearArchivo,
    listarArchivos
}