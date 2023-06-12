const contenedor = document.querySelector('.contenedor');
const asiento = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let precioDelTicket= peliculaSelect.value;
