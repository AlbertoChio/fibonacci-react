import { useEffect, useState } from "react";

function operacion(props: { valor: string }) {
  const [resultado, setResultado] = useState("");
  const numero = Number(props.valor);

  const fibonacci: Function = (n: number) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const validar: Function = (n: number) => {
    if (isNaN(numero)) {
      return { error: "El valor no debe ser NaN" };
    }

    if (numero <= 0) {
      return { error: "El número debe ser positivo" };
    }

    if (!Number.isInteger(numero)) {
      return { error: "El número debe ser entero" };
    }

    if (numero > 68) {
      return { error: "El calculo es demasiado grande" };
    }
  };

  useEffect(() => {
    if (validar(numero)?.error) {
      setResultado(validar(numero).error);
    } else {
      setResultado(String(fibonacci(numero)));
    }
  }, [fibonacci]);
  return  resultado ;
}

export default operacion;
