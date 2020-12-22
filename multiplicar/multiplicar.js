const fs = require('fs');


let createFile = (base, limite) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base) || !Number(limite)) {
            rejects(`El valor base: "${ base }" o el limite: "${ limite }", no es un numero `);
            return;
        }

        let tabla = ``;
        for (let index = 1; index <= limite; index++) {
            tabla += `${base} * ${index} = ${base * index} \n`;
        }

        fs.writeFile(`tablas/Tabla-del-${base}-del-1-al-${ limite }.txt`, tabla, (err) => {
            if (err) rejects(err);
            else
                resolve(`Tabla-del-${base}-del-1-al-${ limite }.txt`);
        })
    })
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base) || !Number(limite)) {
            rejects(`El valor base: "${ base }" o el limite: "${ limite }", no es un numero `);
            return;
        }
        let tabla = ``;
        for (let index = 1; index <= limite; index++) {
            tabla += `${base} * ${index} = ${base * index} \n`;
        }
        resolve(tabla);
    })
}

module.exports = { createFile, listarTabla }