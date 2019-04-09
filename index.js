function janKenPon(valor){
var valor2 = 0;
var v1,v2 =0;


function getRandomInt(min, max) {
    return  Math.floor(Math.random() * (max - min)) + min;
  }
  valor=parseInt(valor)
  valor2= getRandomInt(1,4);
  console.log("Inicia el juego")

switch(valor){
    case 1:
    document.getElementById("hp1").innerHTML = "Jugador 1 escogiste Piedra";
    document.getElementById("p1").src = "piedra.svg";
    switch(valor2){
        case 1:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Piedra";
        document.getElementById("p2").src = "piedra.svg";
        v1,v2= 1;
        break;
        case 2:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Papel";
        document.getElementById("p2").src = "papel.svg";
        v1= 0;
        v2= 1;
        break;
        case 3:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Tijeras";
        document.getElementById("p2").src = "tijera.svg";
        v1= 1;
        v2= 0;
        break;
        default:
        console.log("Cómo demonios le hiciste?")
    }
    break;
    case 2:
    document.getElementById("hp1").innerHTML = "Jugador 1 escogiste Papel";
    document.getElementById("p1").src = "papel.svg";
    switch(valor2){
        case 1:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Piedra";
        document.getElementById("p2").src = "piedra.svg";
        v1= 1;
        v2= 0;
        break;
        case 2:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Papel";
        document.getElementById("p2").src = "papel.svg";
        v1,v2= 1;
        break;
        case 3:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Tijeras";
        document.getElementById("p2").src = "tijera.svg";
        v1= 0;
        v2= 1;
        break;
        default:
        console.log("Cómo demonios le hiciste?")
    }
    break;
    case 3:
    document.getElementById("hp1").innerHTML = "Jugador 1 escogiste Tijeras";
    document.getElementById("p1").src = "tijera.svg";
    switch(valor2){
        case 1:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Piedra";
        document.getElementById("p2").src = "piedra.svg";
        v1= 0;
        v2= 1;
        break;
        case 2:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Papel";
        document.getElementById("p2").src = "papel.svg";
        v1= 1;
        v2= 0;
        break;
        case 3:
        document.getElementById("hp2").innerHTML = "Jugador 2 escogió Tijeras";
        document.getElementById("p2").src = "tijera.svg";
        v1,v2= 1;
        break;
        default:
        console.log("Cómo demonios le hiciste?")
    }
    break;
    default:
    console.log("Cómo demonios le hiciste?")
}

if(v1 < v2){
    document.getElementById("hg").innerHTML = "Jugador 2 GANA";
} else if(v1 > v2){
    document.getElementById("hg").innerHTML = "Jugador 1 GANA";
} else{
    document.getElementById("hg").innerHTML = "EMPATE";
}
}