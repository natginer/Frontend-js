window.addEventListener('load', function(){
    //logica de la aplicacion 

    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    let modificador = 0;
    const valor = document.querySelector('#valor')
    const btnIniciar= document.querySelector('#iniciar')
    const btnPausa = document.querySelector('#pausa')
    const btnStop = document.querySelector('#stop')
    const btnAcelerar = document.querySelector('#acelerar')
    const times = document.querySelector('#times');

            //LISTENERS

    btnIniciar.addEventListener('click', play) 
                                /*('click', function (e) {
                                    play()
                                })*/
    btnStop.addEventListener('click', reiniciar)
    btnPausa.addEventListener('click', pausar)
    btnAcelerar.addEventListener('click', acelerar)


            //FUNCIONES

//definimos la funcionalidad de iniciar el cronometro
    function play() {
        cronometro = setInterval(function(){
        contador++;
        console.log(contador);
        renderizar();
    }, tiempo)
    }

//definimos la responsabilidad de la funcion renderizar
    function renderizar(){
        valor.innerText = contador;
    }

//definimos la funcion de pausar
    function pausar() {
        clearInterval(cronometro)
        
    }

//definimos la funcionalidad del boton stop 
    function reiniciar() {
    clearInterval(cronometro);
    times.innerHTML += `<small>Tiempo: ${contador}</small>`
    contador = 0;
    modificador =1;
    tiempo= 1000;
    btnAcelerar.innerText ="x2";
    renderizar();
    } 

//definimos la funcionalidad de acelerar
    //duplicar velocidad del cronometro
    //que se pueda seguir duplicando 
    //impacta en el numero del boton

    function acelerar() {
        tiempo /= 2;
        modificador *= 2;
        btnAcelerar.innerText = `x${modificador}`;
        pausar()
        play()
};


    /*setTimeout(function() => {
        document.body.style.background="red";
        alert("hola")
    }, 3000);*/

})