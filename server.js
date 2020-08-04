let empleados = [{
        id: 1,
        nombre: 'Julio'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Melisa'
    }
];
let salarios = [{
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 40000
    }
];

//Callback
/* let getEmpleado = (id, callback) => {

    let empleado = empleados.find(empleado => empleado.id === id);
    if (!empleado) {
        callback(`El empleado numero ${id} no existe`);
    } else {
        callback(null, empleado);

    }
}

let getSalario = (empleado, callback) => {

        let salario = salarios.find(salario => salario.id === empleado.id);
        if (!salario) {
            callback(`No se encontro salario para el empleado ${empleado.nombre}`);
        } else {

            callback(null, {
                nombre: empleado.nombre,
                salario: salario.salario,
                id: salario.id
            });
        }
    } */
//Callback
/* getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err)
        }
        console.log(`El empleado ${resp.nombre} gana ${resp.salario}$ al mes`)

    });

});  */


//Promise
let empleadoiId = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(empleado => empleado.id === id);
        if (!empleado) {
            reject(`El empleado numero ${id} no existe`);
        } else {
            resolve(empleado);

        }
    });
}

let salarioiId = (empleado) => {
        return new Promise((resolve, reject) => {
            let salario = salarios.find(salario => salario.id === empleado.id);
            if (!salario) {
                reject(`No se encontro salario para el empleado ${empleado.nombre}`);
            } else {

                resolve({
                    nombre: empleado.nombre,
                    salario: salario.salario,
                    id: salario.id
                });
            }
        });
    }
    //Promise
empleadoiId(3).then(empleado => {
        return salarioiId(empleado);
    })
    .then(resp => console.log(`El empleado ${resp.nombre} gana ${resp.salario}$ al mes`))
    .catch(err => console.log(err))