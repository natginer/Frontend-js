// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona

    const nodoTarjeta = document.querySelector('.tarjeta');
    const nodoButon = document.querySelector("#random");

    nodoButon.addEventListener('click',()=>{
        cargarApi();
    });

    function cargarApi() {
        fetch('https://randomuser.me/api/')
            .then(response => {
                return response.json()
            })
            .then(data => {
            renderizarDatosUsuario(data)
            console.log(data)
        });

    }


    function renderizarDatosUsuario(datos) {
        nodoTarjeta.innerHTML = `<img class="fotoPerfil" src="${datos.results[0].picture.large}" alt="">`;
        
    
    }
    



/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.