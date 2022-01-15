/*let temaDark = confirm("Querés cambiar a modo oscuro?")

if(temaDark){
    document.body.classList.add('dark')
}*/

const boton = document.querySelector('.theme button');

function cambiarTema(){
    const tema = document.body.classList.toggle('dark');

    if(tema){
        boton.innerHTML = 'Cambiar tema <i class="fas fa-sun"></i>'
    } else{
        boton.innerHTML = 'Cambiar tema <i class="fas fa-moon"></i>'
    }
}

