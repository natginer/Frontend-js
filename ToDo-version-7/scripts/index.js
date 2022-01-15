/* -------------------------------------------------------------------------- */
/*                         logica posterior a la carga                        */
/* -------------------------------------------------------------------------- */
window.addEventListener('load', function(){

    const formulario = this.document.forms[0];
    const inputEmail =  this.document.querySelector('#inputEmail');
    const inputPassword = this.document.querySelector('#inputPassword');

    const apiUrl = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const resultadoValidaciones = validacionNoVacio(inputEmail.value) && validacionNoVacio(inputPassword.value);

        if(resultadoValidaciones){
            console.log(normalizacionLogin(inputEmail.value, inputPassword.value));
            fetchApiLogin(apiUrl, normalizacionLogin(inputEmail.value, inputPassword.value))
        }else{
            alert("Alguno de los campos está incompleto.")
        }

        formulario.reset();
    });

    
});

 /* -------------------------------------------------------------------------- */
 /*                               funcionalidades                              */
 /* -------------------------------------------------------------------------- */
function validacionNoVacio(campo) {
    let resultado = true;

    // analizar los casos que no procedan
    if(campo === ""){
        resultado = false;
    }

    return resultado;
}

function normalizacionLogin(email, password) {
    const usuario = {
        email: email.toLowerCase().trim(),
        password: password.trim()
    };

    return usuario;
}

function fetchApiLogin(url, payload) {
    
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    fetch(url, settings)
    .then( response => response.json())
    .then( data => {
        console.log(data);
        // chequeamos que el usuario existe con la llegada del token
        if(data.jwt){
            localStorage.setItem('token', data.jwt);
            // redirijo a la vista correspondiente
            location.href = '/mis-tareas.html'
        }
    })
}