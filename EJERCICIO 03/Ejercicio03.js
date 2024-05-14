function sumarNumeros() {
    // Obtener los valores de los campos de entrada
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    // Validar si se ingresaron números válidos
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado').innerText = 'Por favor ingresa números válidos.';
    } else {
      // Calcular la suma
      var suma = num1 + num2;
      // Mostrar el resultado
      document.getElementById('resultado').innerText = 'La suma es: ' + suma;
    }
  }