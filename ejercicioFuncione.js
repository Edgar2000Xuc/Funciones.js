// Función que siempre devuelve true
function alwaysTrue() {
    return true;
  }
  
  // Función asíncrona que utiliza un setTimeout
  async function delayedGreeting() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
  }
  
  // Función generadora de índices pares automáticos
  function* generateEvenIndexes() {
    let index = 0;
    while (true) {
      yield index;
      index += 2;
    }
  }
  