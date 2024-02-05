/*
Crear un programa que le diga al usuario cuál es su signo zodiacal. Para
eso va a preguntar 2 valores: el mes de nacimiento y el día de nacimiento, en ese
orden. Debe de ingresarlos en números, por ejemplo si nació el 11 de mayo, debe
ingresar: 5 y 11.

Esperamos dos inputs, se comparan con números enteros y esperamos como output un string.

A cada mes y le asignamos un número

enero = 1
marzo = 3
abril = 4
y asi hasta diciembre = 12
*/
//Inicializar variables para día (dia_nac) y mes (mes_nac) de la fecha de nacimiento.
var mes_nac;
var dia_nac;

//Preguntar la fecha de nacimiento(en numeros) usando prompt
  mes_nac = prompt("Por favor ingrese el mes (en números) de su fecha de nacimiento");
  parseInt(mes_nac);
  dia_nac = prompt("Por favor ingrese el día (en números) de su fecha de nacimiento");
  parseInt(dia_nac);

//Establecer los bloques de días y meses que comprenden la clasificación de los signos zodiacales
if (((dia_nac>=21 && dia_nac<=31)&&(mes_nac==3))||((dia_nac>0 && dia_nac<=20)&&(mes_nac==4))){
  alert("Aries");
} else if (((dia_nac>=21 && dia_nac<=30)&&(mes_nac==4))||((dia_nac>0 && dia_nac<=20)&&(mes_nac==5))){
  alert("Tauro");
} else if (((dia_nac>=21 && dia_nac<=31)&&(mes_nac==5))||((dia_nac>0 && dia_nac<=20)&&(mes_nac==6))){
  alert("Géminis");
} else if (((dia_nac>=21 && dia_nac<=30)&&(mes_nac==6))||((dia_nac>0 && dia_nac<=22)&&(mes_nac==7))){
  alert("Cáncer");
} else if (((dia_nac>=23 && dia_nac<=31)&&(mes_nac==7))||((dia_nac>0 && dia_nac<=23)&&(mes_nac==8))){
  alert("Leo");
} else if (((dia_nac>=24 && dia_nac<=31)&&(mes_nac==8))||((dia_nac>0 && dia_nac<=22)&&(mes_nac==9))){
  alert("Virgo");
} else if (((dia_nac>=23 && dia_nac<=30)&&(mes_nac==9))||((dia_nac>0 && dia_nac<=23)&&(mes_nac==10))){
  alert("Libra");
} else if (((dia_nac>=24 && dia_nac<=31)&&(mes_nac==10))||((dia_nac>0 && dia_nac<=22)&&(mes_nac==11))){
  alert("Escorpion");
} else if (((dia_nac>=23 && dia_nac<=30)&&(mes_nac==11))||((dia_nac>0 && dia_nac<=21)&&(mes_nac==12))){
  alert("Sagitario");
} else if (((dia_nac>=22 && dia_nac<=31)&&(mes_nac==12))||((dia_nac>0 && dia_nac<=20)&&(mes_nac==1))){
  alert("Capricornio");
} else if (((dia_nac>=21 && dia_nac<=31)&&(mes_nac==1))||((dia_nac>0 && dia_nac<=19)&&(mes_nac==2))){
  alert("Acuario");
}else if (((dia_nac>=20 && dia_nac<=29)&&(mes_nac==2))||((dia_nac>0 && dia_nac<=20)&&(mes_nac==3))){
  alert("Piscis");}
else {
  alert("Introduzca una fecha valida");
}
