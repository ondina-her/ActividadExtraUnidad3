/*
El juego usa una baraja estándar de poker de 52 cartas, 4 grupos de 14 cartas. con
valores que van del 1 al 11 dependiendo de la carta. El objetivo del juego es obtener la
combinación de cartas más cercana a 21 sin pasarse, el jugador con el valor más
alto, gana. Para nuestra simulación, no vamos a considerar la cantidad de cartas ni el tipo.

Esperamos como input un string; y obtener por outputs números enteros y al final un string.
*/	

function sumCar(usuario,carta1,carta2,sum_cartas2,sum_cartas1){
  
  
//Variable para establecer el valor de las cartas usando random
  carta1 = Math.floor(Math.random() * 11) + 1;
  carta2 = Math.floor(Math.random() * 11) + 1;
  sum_cartas2 = 0;//Suma total del valor de las cartas
  var total_c = carta1 + carta2;//Suma que establece la cantidad total de las 2 primeras cartas
  
  
  return sum_cartas2 += total_c;
  
}
function miFuncion(carta1, carta2, sum_cartas2,sum_cartas1){

  
  //Inizializa variable para interactuar con el usuario
  usuario = "";
  sumCar(carta1, carta2, sum_cartas2, sum_cartas1);
  
  //Llamamos a la funcion sumCar()
  sum_cartas2 = sumCar();
  sum_cartas1 = sumCar();
  
  
//Usamos while para interactuar con el usuario de acuerdo a las respuestas
while(true) {
  //Variables para controlar valores para el "usuario" dentro de while
  var sum_cartas = sum_cartas1;
  
  //Variables para controlar valores que maneja la computadora dentro de while
  var sum_cartas_c = sum_cartas2;
  
  while (sum_cartas1<=21){

    if (sum_cartas>21){
      alert("Lastima, su total es " + sum_cartas +", suerte para la próxima");
      break;
    }
    else{
      usuario = prompt("¿Desea otra carta? (si, no) Actualmente el valor de sus cartas suma: " + sum_cartas);
      
      if (usuario == "si"){
        //Variables para valores de "usuario"
        var user_car = Math.floor(Math.random() * 11) + 1;
        sum_cartas += user_car;
        alert("Su nueva carta vale " + user_car + ", su total es " + sum_cartas);
        
 
        //Variables para valores para computadora
        var comp_car = Math.floor(Math.random() * 11) + 1;
        sum_cartas_c += comp_car;
        
      }else if (usuario == "no"){
          
          alert("La computadora tiene " + sum_cartas_c);
        
          alert("El jugador tiene " + sum_cartas);
        
        
          if ((sum_cartas > sum_cartas_c) || (sum_cartas_c >= 21)){
          
          alert("Enhorabuena, ha ganado");
            
          } else if (sum_cartas < sum_cartas_c){
          
          alert("Lastima, ha perdido");
            
          } else {
            alert("Empate");

          }
        
          break;
      }
    } 
  }
 }
}

function main(){

  alert("Blackjack");
  alert("Bienvenido a nuestro juego, el objetivo del juego es obtener la combinación " +
        "de cartas más cercana a 21 sin pasarse, el jugador con el valor más alto, gana.");
  
  //Llamamos a la funcion miFuncion()
  miFuncion();

}
main();