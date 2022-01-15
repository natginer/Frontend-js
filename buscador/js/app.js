const formulario = document.forms[0];
const inputBusqueda =  document.querySelector('#busqueda');
const cajaBusquedas =  document.querySelector('#busquedas-realizadas');

let historialEnMemoria = [];

// poblar el array con la info almacenada
const infoEnLocalStorage = JSON.parse(localStorage.getItem('busquedasRealizadas'));
//si habia algo guardado en el deposito, lo traigo a memoria
if(infoEnLocalStorage){
    historialEnMemoria = infoEnLocalStorage;
}
// renderizamos siempre y cuando haya alguna busqueda
if(historialEnMemoria.length>0){
    renderizarBusquedas(historialEnMemoria);
}


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(inputBusqueda.value);

    guardarBusquedaEnLocalstorage(inputBusqueda.value)

    busquedaGoogle(inputBusqueda.value);

    formulario.reset();
});


// funcion que reciba un criterio y realice un busqueda en google
function busquedaGoogle(criterio) {
    location.href = `https://www.google.com/search?q=${criterio}`;
}

function guardarBusquedaEnLocalstorage(nuevoInfo) {
    // el nuevo dato lo almaceno en memoria
    historialEnMemoria.push(nuevoInfo);
    // guardamos en localStorage como 'busquedasRealizadas' lo que teniamos en nuestro array
    localStorage.setItem('busquedasRealizadas', JSON.stringify(historialEnMemoria));
}

function renderizarBusquedas(listado) {
    listado.forEach( item => {
        cajaBusquedas.innerHTML += `<p>${item}</p>`
    })
}