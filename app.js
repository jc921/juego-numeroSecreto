// variable que almacena el numero aleatorio
let numeroSecreto = 0;
// creamos un contador que contara el numero de intentos realizados por el usuario
let intentos = 0;
// creamos una lista que almacenara los numeros sorteados
let listaNumerosSorteados = [];
// varible que indica el rango de numeros a adivinar
let numeroMaximo = 10;

// creamos una funcion que usaremos en el botton de nuestro html
// esta funcion captura lo que el usuario digita en el elemento button htlm
function verificarIntento() {
    // la siguiente funcion obtiene lo que digita el usuario por medio del id (nos da el objeto)
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // obtenemos el value del objeto 
    // verificamos que tipo de dato es la variable numeroDeUsuario
   // console.log(typeof(numeroDeUsuario));
   

console.log(intentos);

    // creamos una condicion que asignara la logica del juego y las ayudas que el usuario nesecita para ganar el juego
    if(numeroDeUsuario === numeroSecreto){
        // llamanos una funcion dentro de esta funcion 
        // hacemos uso de los template string y el operador ternario (para la condicion de la palabra vez)
        asignarTextoElemento('p',`has acertado el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);

        // le quitamos el disabled al boton de nuevo juego por medio del DOM 
        document.getElementById('reiniciar').removeAttribute('disabled');




    } else{
        // el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor al digitado');
        } else{
            asignarTextoElemento('p', 'el numero secreto es mayor al digitado');
        }
        // incrementamos nuestro contador
        intentos ++;

        // llamanos a la funcion limpiarCaja
        limpiarCaja();
    }
}   

// funcion que limpia el campo del usuario
function limpiarCaja(){
    // obtenemos el id del elemento 
   document.querySelector('#valorUsuario').value =''; // le asignamos un valor vacio

}

// creamos una funcion con parametros la cual reutilizaremos por medio de llamados 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// creamos una funcion para generar numeros aleatorios que retorna un numero aleatorio gracias a el uso de la libreria MATH.RANDOM

function numeroAleatortio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // si ya sorteamos todos los numeros de la lista
    if(listaNumerosSorteados.length == numeroMaximo){
        // mostramos el siguiente texto
        asignarTextoElemento('p','ya se sortearon todos los numetros posibles');

    }else{
        // condicion que evalua si el numero generado se repite en el juego nuevo
        if(listaNumerosSorteados.includes(numeroGenerado)){//recorremos la lista 
            // aplicamos el concepto de recursividad para que nos devuelva un el numero aleatorio
            return numeroAleatortio();

        }else{
            // lo almacenamos en la lista(numeroSorteado) para validar que no se repita
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    // llamanos a la funcion asignarTextoElemento y leasignamos valores
asignarTextoElemento('h1', ' ¡ juego del numero secreto!');
asignarTextoElemento('p', `digita un numero del 1 al ${numeroMaximo}`);
// generar numero secreto
numeroSecreto = numeroAleatortio();
// inicializar numero de intentos
intentos = 1;

    
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // indicar las condiciones iniciales del nuevo juego
    condicionesIniciales();
    // inabilitar el botton nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

// llamamos a la funcion mensajes iniciales
condicionesIniciales();


