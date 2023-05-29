
var operator1;
var operator2;
var operator;
const str = 'platano'
const newStr = str.slice(0, -1)
console.log(newStr) // platano

function init() {
var resultado = document.getElementById("resultado");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var borrar = document.getElementById("borrar");
var limpiar = document.getElementById("limpiar");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");
var cero = document.getElementById("cero");
var punto = document.getElementById("punto");
var EXP = document.getElementById("EXP");
var ANS = document.getElementById("ANS");
var igual = document.getElementById("igual");

//eventos
uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    limpiar.onclick = function(e){
        resultado.textContent = "";
    }
    
    borrar.onclick = function(e){
        retroceder();
    }

    ANS.onclick = function(e){
        resultado.textContent = resultado.textContent + "Ans";
    }

    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ".";
    }
//operaciones

    sumar.onclick = function(e){
        operator1 = resultado.textContent;
        operator = "+";
        resultado.textContent = "";
    }   
    
    restar.onclick = function(e){
        operator1 = resultado.textContent;
        operator = "-";
        resultado.textContent = "";
    }   
    
    division.onclick = function(e){
        operator1 = resultado.textContent;
        operator = "/";
        resultado.textContent = "";
    }   
    
    multiplicacion.onclick = function(e){
        operator1 = resultado.textContent;
        operator = "*";
        resultado.textContent = "";
    }   

    igual.onclick = function(e){
        operator2 = resultado.textContent;
        calcular();
    }   
    
}

//funciones

function reset(){

    operator1 = 0;
    operator2 = 0;
    operator = "";
}

function calcular(){
var res = 0;
switch(operator){

    case "+":
    res = parseFloat(operator1) + parseFloat(operator2)
    break;

    case "-":
    res = parseFloat(operator1) - parseFloat(operator2)
    break;

    case "*":
    res = parseFloat(operator1) * parseFloat(operator2)
    break;

    case "/":
    res = parseFloat(operator1) / parseFloat(operator2)
    break;
}
reset();
resultado.textContent = res;
}



function sumar(){


}

function retroceder() {
    resultado.textContent = resultado.textContent.slice(0, -1)
}

//eventos






