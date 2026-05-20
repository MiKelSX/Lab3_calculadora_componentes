class Calculadora {
  constructor() {
    this.historial = [];
  }
  
  evaluar(expresion) {
    try {
      const r = eval(expresion);
      this.historial.push(r);
      return r;
    } catch {
      return "Error!";
    }
  }
  mostrarHistorial() {
    return this.historial;
  }


  sumar(a, b) {
    const r = a + b;
    this.historial.push(r);
    console.log(this.sumar(a,b));
    return r;
  }

  restar(a, b) {
    const r = a - b;
    this.historial.push(r);
    return r;
  }

  multiplicar(a, b) {
    const r = a * b;
    this.historial.push(r);
    return r;
  }

  dividir(a, b) {
    if (b === 0) {
      this.historial.push("Error: división por cero");
      return "Error";
    }
    const r = a / b;
    this.historial.push(r);
    return r;
  }

  ultimoResultado() {
    return this.historial[this.historial.length - 1];
  }
}


// Ejemplo en consola:
const calc = new Calculadora();
console.log(calc.sumar(5, 3));       // 8
console.log(calc.multiplicar(2, 4)); // 8
console.log(calc.mostrarHistorial()); // [8, 8]
