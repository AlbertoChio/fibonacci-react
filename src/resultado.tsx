import operacion from './operacion'

function Resultado(props: { valor: string }) {
  const resultado = operacion({valor:props.valor})
  return <>
  <p>{resultado}</p>
  </>;
}

export default Resultado;
