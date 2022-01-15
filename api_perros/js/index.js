const urlRandomDog =  'https://dog.ceo/api/breeds/image/random';
const boton = document.querySelector('#random');
const nodoTarjeta = document.querySelector('.tarjeta');
const imagen = document.querySelector('img');



boton.addEventListener('click', function(){
    //deshabilitamos el boton
    boton.setAttribute('disabled','');
    //proceso de llamar a la Api
    consultaApi();
})

function consultaApi() {
    
    fetch(urlRandomDog)
    .then( respuesta => {
        console.log(respuesta)
        console.log(respuesta.status)
        return respuesta.json()
    }).then( data => {
        //ya tengo lista la info que necesito
        console.log(data);
       
        renderizar(data.message);
        //volvemos a habilitar el boton
        boton.removeAttribute('disabled');
    
    }).catch( error =>{
        console.log(error);
    })
}

function renderizar(imgUrl) {
    nodoTarjeta.innerHTML = ` <img src="${imgUrl}" alt="imagen de perro">`;
};