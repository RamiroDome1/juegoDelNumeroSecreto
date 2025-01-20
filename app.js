let numeroSecreto;
console.log (numeroSecreto);
let intentosMaximos;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
//funciones 

//condiciones iniciales
function condicionesIniciales() {
    intentosMaximos = 5;
    numeroSecreto = generarNumeroAleatorio(); 
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("h2", `Intentos maximos: ${intentosMaximos}`);
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
    document.getElementById("reiniciar").setAttribute("disabled", "true");    
    document.getElementById("intentar").removeAttribute("disabled");    
    limpearCaja();   
}


//asigna texto a un elemento html
function asignarTextoElemento(elemento , texto){
    
    let elemntoHtml = document.querySelector(elemento); 
    elemntoHtml.innerHTML= texto;
    return;
}

//gerena el numero secreto aleatoriamente
function generarNumeroAleatorio (){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;  
    console.log(listaNumeroSorteados);
    console.log(numeroGenerado);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        listaNumeroSorteados = [];
        return generarNumeroAleatorio();
    }
    else{
        //si el numero generado esta en la lista de numeros sorteados, genera otro
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }
        //si el numero generado no esta en la lista de numeros sorteados
        else{
            listaNumeroSorteados.push(numeroGenerado);
            
            return numeroGenerado;
        }
    }
}    
//limpia la caja de los numeros
function limpearCaja() {
    document.getElementById("valorUsuario").value = "";
}

//verifica el intento del usuario
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //obtiene el valor del input con id valorUsuario
    
    //el usuario acerto
    if(numeroDeUsuario == numeroSecreto) { 

        asignarTextoElemento("h1","Acertaste el numero!")
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled", "true");
    }

    //el usuario no acerto
    else { 
        
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p",`El numero secreto es mayor`);
        }
        else {
            asignarTextoElemento("p",`El numero secreto es menor`);
        }   
        asignarTextoElemento("h2", `Intentos maximos: ${intentosMaximos-1}`);
        intentosMaximos--; 
        if (intentosMaximos <= 0){
            document.getElementById("reiniciar").removeAttribute("disabled");
            document.getElementById("intentar").setAttribute("disabled", "true");
            asignarTextoElemento("h1",`Has agotado los intentos! :c`);
            asignarTextoElemento("p", `el numero secreto era ${numeroSecreto}`)
        }
        limpearCaja();

    }
    return;
}


//reinicia el juego
function nuevoJuego() { 
    condicionesIniciales();
}

//llamado de funciones
condicionesIniciales()