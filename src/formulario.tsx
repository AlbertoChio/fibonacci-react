import { useState } from "react";
import Resultado from './resultado'
function Formulario() {
  const [numero, setNumero] = useState<string>('1');
  return (
    <>
      <form>
        <input
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </form>
      <Resultado valor={numero} />
    </>
  );
}

export default Formulario;
