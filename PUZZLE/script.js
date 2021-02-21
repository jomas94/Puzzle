
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15," "];
var move = 0;

function aleatorizar(array) {
    var j, x, i;
    //Recorremos el array del final hacia delante
    for (i = array.length - 1; i > 0; i--) {
    //Generamos una posicion comprendida entre los valores de nuestro array
    j = Math.floor(Math.random() * (i + 1));
    // Asignamos el valor de la posición actual a una variable
    x = array[i];
    //Intercambiamos los valores de las dos posiciones
    array[i] = array[j];
    array[j] = x;
    }
}

function iniciar(){
    
    aleatorizar(numeros); // barajamos el array cada vez se pulse el boton iniciar.
    
    var movim =0;
    var contarmove = document.getElementById('movimientos').textContent = movim; //Siempre se iniciará los movimientos en cero
    
    for(var i=0; i<numeros.length; i++){

        var celdas = document.getElementById("c"+i).innerHTML = numeros[i]; // metemos el array en las celdas
    }
    reset(); //reseteamos el reloj
    start(); // iniciamos el reloj
    resetearcolores();
}

function moverficha(celdaId){
    // aqui empezamos a mover las celdas, aplicando los IFs a cada celda
    if(esFinal()==false){
    //  alert("Has ganado amigo");  
    
    if(celdaId == 'c0'){
         if(numeros[1]==" "){
            var valor1 = celdaId;
            var valor2= "c1";
            intercambiar(valor1,valor2);
        }
        else if(numeros[1]==" "){
            var valor1 = celdaId;
            var valor2= "c1";
            intercambiar(valor1,valor2);
        }
        else if(numeros[4]==" "){
            var valor1 = celdaId;
            var valor2= "c4";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c1'){
        if(numeros[0]==" "){
           var valor1 = celdaId;
           var valor2= "c0";
           intercambiar(valor1,valor2);
        }
        if(numeros[2]==" "){
            var valor1 = celdaId;
            var valor2= "c2";
            intercambiar(valor1,valor2);
        }
       if(numeros[5]==" "){
           var valor1 = celdaId;
           var valor2= "c5";
           intercambiar(valor1,valor2);
       }
    }
    else if(celdaId == 'c2'){
        if(numeros[1]==" "){
            var valor1 = celdaId;
            var valor2= "c1";
            intercambiar(valor1,valor2);
        }
        if(numeros[3]==" "){
            var valor1 = celdaId;
            var valor2= "c3";
            intercambiar(valor1,valor2);
        }
        if(numeros[6]==" "){
            var valor1 = celdaId;
            var valor2= "c6";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c3'){
        if(numeros[2]==" "){
            var valor1 = celdaId;
            var valor2= "c2";
            intercambiar(valor1,valor2);
        }
        if(numeros[4]==" "){
            var valor1 = celdaId;
            var valor2= "c4";
            intercambiar(valor1,valor2);
        }
        if(numeros[7]==" "){
            var valor1 = celdaId;
            var valor2= "c7";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c4'){
        if(numeros[0]==" "){
            var valor1 = celdaId;
            var valor2= "c0";
            intercambiar(valor1,valor2);
        }
        if(numeros[5]==" "){
            var valor1 = celdaId;
            var valor2= "c5";
            intercambiar(valor1,valor2);
        }
        if(numeros[8]==" "){
            var valor1 = celdaId;
            var valor2= "c8";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c5'){
        if(numeros[1]==" "){
            var valor1 = celdaId;
            var valor2= "c1";
            intercambiar(valor1,valor2);
        }
        else if(numeros[4]==" "){
            var valor1 = celdaId;
            var valor2= "c4";
            intercambiar(valor1,valor2);
        }
        else if(numeros[6]==" "){
            var valor1 = celdaId;
            var valor2= "c6";
            intercambiar(valor1,valor2);
        }
        else if(numeros[9]==" "){
            var valor1 = celdaId;
            var valor2= "c9";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c6'){
        if(numeros[2]==" "){
            var valor1 = celdaId;
            var valor2= "c2";
            intercambiar(valor1,valor2);
        }
        else if(numeros[5]==" "){
            var valor1 = celdaId;
            var valor2= "c5";
            intercambiar(valor1,valor2);
        }
        else if(numeros[7]==" "){
            var valor1 = celdaId;
            var valor2= "c7";
            intercambiar(valor1,valor2);
        }
        else if(numeros[10]==" "){
            var valor1 = celdaId;
            var valor2= "c10";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c7'){
        if(numeros[3]==" "){
            var valor1 = celdaId;
            var valor2= "c3";
            intercambiar(valor1,valor2);
        }
        else if(numeros[6]==" "){
            var valor1 = celdaId;
            var valor2= "c6";
            intercambiar(valor1,valor2);
        }
        else if(numeros[11]==" "){
            var valor1 = celdaId;
            var valor2= "c11";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c8'){
        if(numeros[4]==" "){
            var valor1 = celdaId;
            var valor2= "c4";
            intercambiar(valor1,valor2);
        }
        else if(numeros[9]==" "){
            var valor1 = celdaId;
            var valor2= "c9";
            intercambiar(valor1,valor2);
        }
        else if(numeros[12]==" "){
            var valor1 = celdaId;
            var valor2= "c12";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c9'){
        if(numeros[5]==" "){
            var valor1 = celdaId;
            var valor2= "c5";
            intercambiar(valor1,valor2);
        }
        else if(numeros[8]==" "){
            var valor1 = celdaId;
            var valor2= "c8";
            intercambiar(valor1,valor2);
        }
        else if(numeros[10]==" "){
            var valor1 = celdaId;
            var valor2= "c10";
            intercambiar(valor1,valor2);
        }
        else if(numeros[13]==" "){
            var valor1 = celdaId;
            var valor2= "c13";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c10'){
        if(numeros[6]==" "){
            var valor1 = celdaId;
            var valor2= "c6";
            intercambiar(valor1,valor2);
        }
        else if(numeros[9]==" "){
            var valor1 = celdaId;
            var valor2= "c9";
            intercambiar(valor1,valor2);
        }
        else if(numeros[11]==" "){
            var valor1 = celdaId;
            var valor2= "c11";
            intercambiar(valor1,valor2);
        }
        else if(numeros[14]==" "){
            var valor1 = celdaId;
            var valor2= "c14";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c11'){
        if(numeros[7]==" "){
            var valor1 = celdaId;
            var valor2= "c7";
            intercambiar(valor1,valor2);
        }
        else if(numeros[10]==" "){
            var valor1 = celdaId;
            var valor2= "c10";
            intercambiar(valor1,valor2);
        }
        else if(numeros[15]==" "){
            var valor1 = celdaId;
            var valor2= "c15";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c12'){
        if(numeros[8]==" "){
            var valor1 = celdaId;
            var valor2= "c8";
            intercambiar(valor1,valor2);
        }
        else if(numeros[13]==" "){
            var valor1 = celdaId;
            var valor2= "c13";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c13'){
        if(numeros[9]==" "){
            var valor1 = celdaId;
            var valor2= "c9";
            intercambiar(valor1,valor2);
        }
        else if(numeros[12]==" "){
            var valor1 = celdaId;
            var valor2= "c12";
            intercambiar(valor1,valor2);
        }
        else if(numeros[14]==" "){
            var valor1 = celdaId;
            var valor2= "c14";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c14'){
        if(numeros[10]==" "){
            var valor1 = celdaId;
            var valor2= "c10";
            intercambiar(valor1,valor2);
        }
        else if(numeros[13]==" "){
            var valor1 = celdaId;
            var valor2= "c13";
            intercambiar(valor1,valor2);
        }
        else if(numeros[15]==" "){
            var valor1 = celdaId;
            var valor2= "c15";
            intercambiar(valor1,valor2);
        }
    }
    else if(celdaId == 'c15'){
        if(numeros[11]==" "){
            var valor1 = celdaId;
            var valor2= "c11";
            intercambiar(valor1,valor2);
        }
        else if(numeros[14]==" "){
            var valor1 = celdaId;
            var valor2= "c14";
            intercambiar(valor1,valor2);
        }
    }
   
    }else{
        alert('HAS GANADO!')}
}

function intercambiar(valor1, valor2){
    var valor1; // celda pulsada
    var valor2; // celda a cambiar

    //Cortamos la "c" para tener solo el número y usarlo en el array
    var indexSeleccionado=valor1.slice(1);
    var indexVacio=valor2.slice(1);
    //cambiamos la posicion de los valores en el Array
    numeros[indexVacio]= numeros[indexSeleccionado];
    numeros[indexSeleccionado]=" ";

    //cogemos los datos
    var cogerValor1 = document.getElementById(valor1).textContent;
    var cogerValor2 = document.getElementById(valor2).textContent;
    //cambiamos los valores
    var cambio1 = document.getElementById(valor2).textContent = cogerValor1;
    var cambio2 = document.getElementById(valor1).textContent = cogerValor2;

    // contando y enseñando los movimientos
    move=move+1;
    var contarmove = document.getElementById('movimientos').textContent = move;
    
    cambiarfondo(valor2,valor1);

}

function cambiarfondo(celdaVacia,celdaLlena){
//cambiando el fondo
    var colorfondo = document.getElementById(celdaLlena);
    colorfondo.className = "vacio";

    var colorfondo = document.getElementById(celdaVacia);
    colorfondo.className = "llena";
}
function resetearcolores(){
    //para resetear los colores
    for(var i=0; i<numeros.length; i++){
        var colorfondo = document.getElementById("c"+i);
        colorfondo.className = "llena";

        var valorcolor = colorfondo.textContent;
        if(valorcolor==" "){
            
            colorfondo.className = "vacio";  
        }
        
    }

}


function esFinal(){
    var verificar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15," "];
    var cont=0;

    for(var i=0; i<verificar.length; i++){

        if (numeros[i]==verificar[i]){
                cont++;
        }

        if(cont==15){
            return true;
            stop () ;
        }else
        return false
    }
}

/**** RELOJ *******/
//Code from - https://codepen.io/Rudepride/pen/cJjdy
window.onload = function() {
    pantalla = document.getElementById("reloj");
}
var isMarch = false; 
var acumularTime = 0; 

function start () {
    if (isMarch == false) { 
        timeInicial = new Date();
        control = setInterval(cronometro,10);
        isMarch = true;
    }
}

function cronometro () { 
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime); 
    cc = Math.round(acumularTime2.getMilliseconds()/10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
//   hh = acumularTime2.getHours()-18;
    if (cc < 10) {cc = "0"+cc;}
    if (ss < 10) {ss = "0"+ss;} 
    if (mm < 10) {mm = mm;}
//   if (hh < 10) {hh = "0"+hh;}
    pantalla.innerHTML = mm+" : "+ss+" : "+cc;
}
 
function stop () { 
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }     
}      
 
// function resume () {
//     if (isMarch == false) {
//         timeActu2 = new Date();
//         timeActu2 = timeActu2.getTime();
//         acumularResume = timeActu2-acumularTime;
        
//         timeInicial.setTime(acumularResume);
//         control = setInterval(cronometro,10);
//         isMarch = true;
//     }     
// }
 
function reset () {
    if (isMarch == true) {
        clearInterval(control);
        isMarch = false;
    }
    acumularTime = 0;

    pantalla.innerHTML="00 : 00 : 00";
}

