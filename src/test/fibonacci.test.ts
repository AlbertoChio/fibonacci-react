import { describe, expect, it } from "vitest";

const fibonacci: Function = (n: number) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  const validar: Function = (valor: number) => {
    if (isNaN(valor)) {
      throw new Error("El valor no debe ser NaN");
    }
  
    if (valor <= 0) {
      throw new Error("El número debe ser positivo");
    }
  
    if (!Number.isInteger(valor)) {
      throw new Error("El número debe ser entero");
    }
  
    if (valor > 68) {
      throw new Error("El calculo es demasiado grande");
    }
  };
  
  function operacion(valor: number): string {
    let resultado = ''
      try {
        validar(valor);
        resultado = String(fibonacci(valor));
      } catch (error: any) {
        resultado = error.message;
      }
      return resultado
    };

const noNumber:any="no num"
describe('fibonacci',():void =>{
    it('debe ser una funcion',():void=>{
        expect(typeof operacion).toBe('function')
    })

    it('Si no recibe un número como parametro, el valor devuelto debe ser',():void=>{
        expect(operacion(noNumber)).toBe("El valor no debe ser NaN")
    })

    it('Si el número es igual o menor a cero, el valor devuelto debe ser',():void=>{
        expect(operacion(0)).toBe("El número debe ser positivo")
    })

    it('Si el número no es entero, el valor devuelto debe ser',():void=>{
        expect(operacion(0.5)).toBe("El número debe ser entero")
    })

    it('Si el número es mayor a 68, el valor devuelto debe ser',():void=>{
        expect(operacion(69)).toBe("El calculo es demasiado grande")
    })

    it('Si el número es 1, el valor devuelto debe ser 1',():void=>{
        expect(operacion(1)).toBe("1")
    })

    it('Si el número es 1, el valor devuelto debe ser 5',():void=>{
        expect(operacion(5)).toBe("5")
    })

    it('Si el número es 12, el valor devuelto debe ser 144',():void=>{
        expect(operacion(12)).toBe("144")
    })
}

)
