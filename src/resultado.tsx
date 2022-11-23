import operacion from './operacion'

function Resultado(props: { valor: string }) {
  const resultado = operacion(Number(props.valor))
  return <>
  <p>{resultado}</p>
  </>;
}

export default Resultado;
