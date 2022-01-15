console.log("Banca mobile");
const cartelBanco = document.querySelector('.bancaMobile');

const btnConsulta = document.querySelector('button');

btnConsulta.addEventListener('click', function () {

    cartelBanco.classList.remove('oculto');

    /* -------------------------------------------------------------------------- */
    /*               simulamos el funcionamiento de un banco online               */
    /* -------------------------------------------------------------------------- */
    const promesaBanco = new Promise((resolve, reject) => {

        // simulamos un base de datos en un servidor
        const cuenta = {
            nombre: "Michael Scott",
            fondos: 1500,
            cuentaActiva: true
        };

        setTimeout(function () {
            if (cuenta.cuentaActiva != true) {
                reject({
                    mensaje: "Cuenta inactiva.",
                    estatus: "x250"
                })
            } else if (cuenta.fondos < 100) {
                reject({
                    mensaje: "Fondos insuficientes.",
                    estatus: "z220"
                })
            } else {
                resolve({
                    mensaje: "Pago realizado con éxito.",
                    estatus: "y200"
                })
            }
        }, 3000)

    });

    /* -------------------------------------------------------------------------- */
    /*                manipulamos el resultado de una promesaBanco                */
    /* -------------------------------------------------------------------------- */

    promesaBanco.then(respuesta => {
        console.log("Respuesta positiva");
        console.log(respuesta);
        cartelBanco.innerHTML = `<h5>${respuesta.mensaje}</h5>`;
        cartelBanco.style.border = "4px solid green";
    }).catch(error => {
        console.log("Respuesta negativa");
        console.log(error);
        cartelBanco.innerHTML = `<h5>${error.mensaje}</h5>`;
        cartelBanco.style.border = "4px solid red";
    });

})