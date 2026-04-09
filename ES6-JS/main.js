
"use strict"; // Activa el modo estricto de JavaScript para evitar errores comunes y hacer el código más seguro


// FUNCION PARA VALIDAR EL VALOR

function validarNumero(valor) { // función que recibe un valor que el usuario quiere convertir
  const numero = Number(valor); // convierte el valor recibido a número

  if (!Number.isFinite(numero)) { // verifica si el valor convertido es un número válido
    throw new Error("El valor ingresado debe ser un número válido"); // lanza un error si no es número
  }

  return numero; // devuelve el número ya validado
}

// FUNCION PRINCIPAL DE CONVERSION

function convertir(valor, origen, destino) { // función que recibe valor, unidad origen y unidad destino

  const v = validarNumero(valor); // primero valida que el valor sea un número

  // -------------------------------
  // TEMPERATURA
  // -------------------------------

  if (origen === "C" && destino === "F") { // si convierte de Celsius a Fahrenheit
    return (v * 9/5) + 32; // aplica la formula correspondiente
  }

  if (origen === "C" && destino === "K") { // si convierte de Celsius a Kelvin
    return v + 273.15; // aplica la formula correspondiente
  }

  if (origen === "F" && destino === "C") { // si convierte de Fahrenheit a Celsius
    return (v - 32) * 5/9; // aplica la formula correspondiente
  }

  if (origen === "F" && destino === "K") { // si convierte de Fahrenheit a Kelvin
    return (v - 32) * 5/9 + 273.15; // aplica la formula correspondiente
  }

  if (origen === "K" && destino === "C") { // si convierte de Kelvin a Celsius
    return v - 273.15; // aplica la formula correspondiente
  }

  if (origen === "K" && destino === "F") { // si convierte de Kelvin a Fahrenheit
    return (v - 273.15) * 9/5 + 32; // aplica la formula correspondiente
  }


  // -------------------------------
  // LONGITUD
  // -------------------------------

  if (origen === "m" && destino === "cm") { // metros a centímetros
    return v * 100; // multiplica por 100
  }

  if (origen === "m" && destino === "km") { // metros a kilómetros
    return v / 1000; // divide entre 1000
  }

  if (origen === "cm" && destino === "m") { // centímetros a metros
    return v / 100; // divide entre 100
  }

  if (origen === "cm" && destino === "km") { // centímetros a kilómetros
    return v / 100000; // divide entre 100000
  }

  if (origen === "km" && destino === "m") { // kilómetros a metros
    return v * 1000; // multiplica por 1000
  }

  if (origen === "km" && destino === "cm") { // kilómetros a centímetros
    return v * 100000; // multiplica por 100000
  }


  // -------------------------------
  // PESO
  // -------------------------------

  if (origen === "kg" && destino === "g") { // kilogramos a gramos
    return v * 1000; // multiplica por 1000
  }

  if (origen === "kg" && destino === "lb") { // kilogramos a libras
    return v * 2.20462; // aplica el factor de conversión
  }

  if (origen === "g" && destino === "kg") { // gramos a kilogramos
    return v / 1000; // divide entre 1000
  }

  if (origen === "g" && destino === "lb") { // gramos a libras
    return v / 453.592; // divide entre 453.592
  }

  if (origen === "lb" && destino === "kg") { // libras a kilogramos
    return v / 2.20462; // divide entre 2.20462
  }

  if (origen === "lb" && destino === "g") { // libras a gramos
    return v * 453.592; // multiplica por 453.592
  }


  // -------------------------------
  // SI LA CONVERSION NO EXISTE
  // -------------------------------

  throw new Error("Conversión no válida. Revisa las unidades ingresadas."); // lanza error si la conversión no está definida
}


// ===============================
// FUNCION PARA MOSTRAR RESULTADO
// ===============================

function ejecutarConversion(valor, origen, destino) { // función que ejecuta el programa

  try { // intenta ejecutar el bloque de código

    const resultado = convertir(valor, origen, destino); // llama la función convertir

     const resultadoFormateado = resultado.toFixed(2);

    console.log("Resultado:", resultadoFormateado, destino); // muestra el resultado en consola

  } catch (error) { // captura cualquier error que ocurra

    console.log("Error:", error.message); // muestra el mensaje de error de forma clara al usuario

  }

}


// ===============================
// EJEMPLOS DE USO
// ===============================

ejecutarConversion(25, "C", "F"); // convierte 25 grados Celsius a Fahrenheit

ejecutarConversion(1000, "m", "km"); // convierte 1000 metros a kilómetros

ejecutarConversion(5, "kg", "lb"); // convierte 5 kilogramos a libras

ejecutarConversion("abc", "kg", "g"); // ejemplo de error al ingresar un valor inválido


