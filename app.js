let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);


condicionesIniciales();

function asignarTextoElementos(elemento, texto) {
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    /*console.log(typeof(numeroSecreto));    
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario); 
    console.log(numeroDeUsuario === numeroSecreto); 
    console.log(intentos);*/  
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElementos('p',`Acertaste el Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'vecez'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElementos('p','El Numero secreto es Menor!');
        }else{
            asignarTextoElementos('p','El Numero secreto es Mayor!');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElementos('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElementos('h1','Juego de Joel');    
    asignarTextoElementos('p','Indica un Numero del 1 al '+ numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();   
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function tomarNumeroMaximo(){
     
}