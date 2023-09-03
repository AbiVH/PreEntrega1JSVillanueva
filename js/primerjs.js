function rangoJugador() {
  let tirosCampo = parseInt(
    prompt(`Coloca los puntos de tiros de campo del jugador`)
  );

  let tiros3Puntos = parseInt(
    prompt(`Coloca los puntos de los tiros de 3 del jugador`)
  );

  let tirosLibres = parseInt(
    prompt(`Coloca los puntos de los tiros libres del jugador`)
  );

  let totalPuntos = tirosCampo + tiros3Puntos + tirosLibres;

  if (totalPuntos > 30) {
    alert(`Kha!! El próximo MJ23 hiciste ${totalPuntos} puntos`);
  } else if (totalPuntos > 20) {
    alert(`Eres promedio bro, tú puedes hiciste ${totalPuntos} puntos`);
  } else if (totalPuntos > 10) {
    alert(`Mmmmmm, eres un bebé hiciste ${totalPuntos} puntos`);
  } else if (totalPuntos <= 10) {
    alert(`Su rango es abuela manca hiciste ${totalPuntos} puntos`);
  }
}

function registroMVP() {
  let numeroJugadores = parseInt(
    prompt(`Coloque el número de jugadores del equipo`)
  );

  for (let i = 1; i <= numeroJugadores; i++) {
    alert(`Datos del Jugador[${i}]`);
    prompt(`Nombre(s)`);
    prompt(`Apellidos`);
    prompt(`Marca de canastas de la anterior temporada`);
    alert(`Jugador registrado con éxito`);
  }
}

function menu() {
  let eleccion = parseInt(
    prompt(`
        Menú
        1-Rango del Jugador
        2-Equipo MVP
        3-Salir
        Elija la función que requiere respecto al menú principal`)
  );

  if (eleccion == 1) {
    rangoJugador();
    do {
      let eleccion = parseInt(
        prompt(`
                Menú
        1-Rango del Jugador
        2-Registro Equipo MVP
        3-Salir
        Elija la función que requiere respecto al menú principal`)
      );
    } while (eleccion == 3);
  } else if (eleccion == 2) {
    registroMVP();
    do {
      let eleccion = parseInt(
        prompt(`
                Menú
        1-Rango del Jugador
        2-Registro Equipo MVP
        3-Salir
        Elija la función que requiere respecto al menú principal`)
      );
    } while (eleccion == 3);
  }
}

// Obtén el botón por su ID
let miBoton = document.getElementById("miBoton");

// Asocia la función "mostrarAlerta" al evento "click" del botón
miBoton.addEventListener("click", menu);
