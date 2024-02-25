// no saben lo que me costo entender lo que se pedia :( me atrase una semana! 

/*PERDON POR SUBIRLO ASI DE ORDINARIO PERO NO PUEDO SUBIRLO, ME DICE 
error: remote origin already exists.
 git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository. 
ESTOY EN EL PC DE MI CASA, EN GENERAL LO SUBO DESDE EL PC DEL TRABAJO
*/

var partidas = parseInt(prompt("Indique el numero de partidas"));

do {
  var jugador = parseInt(prompt("Indique el numero de su jugada: 1 piedra, 2 papel, 3 tijeras"));

  if (jugador === 1 || jugador === 2 || jugador === 3) {
    
  } else {
    
    console.log("Número inválido. Ingrese un número entre 1 y 3.");
    continue; // 
  }

  var maquina = Math.floor(Math.random() * 3) + 1;

  if (jugador === maquina) {
    console.log("Empate");
  } else if (
    (jugador === 1 && maquina === 3) ||
    (jugador === 2 && maquina === 1) ||
    (jugador === 3 && maquina === 2)
  ) {
    console.log("Ganaste");
  } else {
    console.log("Pierdes");
  }

  partidas--;
} while (partidas > 0);

// no me funciona la key SSH, la hice desde el pc de la practica, ahora estoy con mi pc pero no funciona