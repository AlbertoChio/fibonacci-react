import { useEffect, useState } from "react";

const fib = function(n:number) {

  if (n <= 1) return n;
  let prev2 = 0;
  let prev1 = 1;
  let c = 0;
  for (let i = 2; i<= n; i++) {
      c = prev1 + prev2;
      prev2 = prev1;
      prev1 = c;
  }
  
  return c;
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
  const [resultado, setResultado] = useState("");
  useEffect(() => {
    try {
      validar(valor);
      setResultado(String(fib(valor)));
    } catch (error: any) {
      setResultado(error.message);
    }
  },[valor]);

  return resultado;
}

export default operacion;
