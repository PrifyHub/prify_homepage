import { useState } from 'react'

export default function Contador() {
  const [numero, setNumero] = useState(0)

  const incremento = () => setNumero(numero + 1)
  function decremento() {
    setNumero(numero - 1)
  }
  function reset() {
    setNumero(0)
  }

  return (
    <div
      style={{
        height: '300px',
        width: '500px',
        margin: 'auto',
        border: '3px solid red',
        backgroundColor: '#555',
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: 'flex' }}>Aprendendo 01</h1>
      <h2 style={{ margin: '10px 50px' }}>Contador </h2>
      <div
        style={{
          fontSize: '30px',
          fontFamily: 'Brush Script MT',
          margin: '10px 50px'
        }}
      >
        Valor: {numero}
      </div>
      <div
        style={{ justifyContent: 'center', margin: 'flex', display: 'flex' }}
      >
        <div style={{ margin: '5px 10px' }}>
          <button
            style={{ height: '30px', width: '70px' }}
            onClick={incremento}
          >
            plus
          </button>
        </div>
        <div style={{ margin: '5px 10px' }}>
          <button style={{ height: '30px', width: '70px' }} onClick={reset}>
            redefinir
          </button>
        </div>
        <div style={{ margin: '5px 10px' }}>
          <button
            style={{ height: '30px', width: '70px' }}
            onClick={decremento}
          >
            minus
          </button>
        </div>
      </div>
    </div>
  )
}
