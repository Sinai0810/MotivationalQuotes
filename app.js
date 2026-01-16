
const botonNuevaCita = document.getElementById('boton-cambiar-cita');
const citaElemento = document.getElementById('cita');
const autorElemento = document.getElementById('autor'); 

function mostrarCitaAleatoria(min , max ) {
 return  Math.floor (Math.random() * (max - min ) + min  )

}

function actualizarCita() {
  let indiceAleatorio = mostrarCitaAleatoria(0, citasMotivacionales.length);
  citaElemento.innerText = `"${citasMotivacionales[indiceAleatorio].cita }"`;
  autorElemento.innerText = citasMotivacionales[indiceAleatorio].autor;
}


actualizarCita();

botonNuevaCita.addEventListener('click', actualizarCita)