// Obtener el input, el botón y el párrafo
const inputTexto = document.getElementById('texto');
const btnMostrar = document.getElementById('btnMostrar');
const resultado = document.getElementById('resultado');

// Agregar un event listener al botón para mostrar el texto
btnMostrar.addEventListener('click', () => {
  // Obtener el valor del input
  const textoIngresado = inputTexto.value;

  // Actualizar el contenido del párrafo con el texto ingresado
  resultado.textContent = textoIngresado;
});