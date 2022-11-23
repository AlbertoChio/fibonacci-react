import { useEffect, useState } from "react";

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
  const [resultado, setResultado] = useState("");
  useEffect(() => {
    try {
      validar(valor);
      setResultado(String(fibonacci(valor)));
    } catch (error: any) {
      setResultado(error.message);
    }
  });

  return resultado;
}

export default operacion;
