/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

let dataCompleted=false

function promptCancel(data) {
    return data === null
}

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

    dataCompleted = false
    let nombre = prompt("Ingrese su nombre")
    if (promptCancel(nombre)) {
        return
    }
    datosPersona.nombre = nombre
    let edad = prompt("Ingrese su año de nacimiento")
    if (promptCancel(edad)) {
        return;
    }
    datosPersona.edad = edad
    let ciudad = prompt("Ingrese su ciudad")
    if (promptCancel(ciudad)) {
        return;
    }
    datosPersona.ciudad = ciudad
    datosPersona.interesPorJs = confirm("¿Te interesa Javascript?")
    
    dataCompleted = true
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario()
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

    if(dataCompleted) {
        const nombreU = document.querySelector('#nombre')
        nombreU.innerHTML = `${datosPersona.nombre}`
        const edadU = document.querySelector('#edad')
        edadU.innerHTML = `${2021 - datosPersona.edad}`
        const ciudadU = document.querySelector('#ciudad')
        ciudadU.innerHTML = `${datosPersona.ciudad}`
        const jsu = document.querySelector('#javascript')
        jsu.innerHTML = `${datosPersona.interesPorJs ? "Si" : "No"}`
    }

}

function recorrerListadoYRenderizarTarjetas() {

    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    
    let elemento = document.querySelector(".caja")
    if (!elemento) {
        listado.forEach(listado => {
            document.querySelector("#fila").innerHTML +=
                `<div class="caja">
        <img src="${listado.imgUrl}" alt="${listado.lenguajes}"/>
        <p class="lenguajes">${listado.lenguajes}</p>
        <p class="bimestre">${listado.bimestre}</p>
        </div>`
        })
    }
}

function alternarColorTema() {

    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

    const sitio = document.querySelector('#sitio')
    sitio.classList.toggle('dark');

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener('keypress', function (event) {
    let desocultar = document.querySelector('#sobre-mi')

    if (event.key === "f") {
        desocultar.classList.remove('oculto')
    }
});

