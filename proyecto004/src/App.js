import './App.css';
import { useState } from 'react'; //Necesario para poder usar la funcion especial de useState


function App() {
  const [numerosAleatorios, setNumeros] = useState([0,0,0,0,0]);
  function generarEnterosAleatorios(){
    const numeros = new Array(5);
    for (let i = 0; i < numeros.length; i++) {
      numeros[i] = Math.trunc(Math.random()*10);
    }
    setNumeros(numeros)
  }
  return (
    <div>
      <p>Numeros Aleatorios: </p>
      {numerosAleatorios.map(n => (<p>{n}</p>))}
      <button onClick={generarEnterosAleatorios}>Generara numeros aleatorios</button>
    </div>
  );
}

export default App;
