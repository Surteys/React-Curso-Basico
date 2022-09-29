import './App.css';
import { useState } from 'react'; //Necesario para poder usar la funcion especial de useState


function App() {
  const [numero, setNumero] = useState(0);
  function generarEnteroAleatorio(){
    const enteroAleatorio = Math.trunc(Math.random()*10);
    setNumero(enteroAleatorio)
  }
  return (
    <div>
      <p>Numero aleatorio: {numero}</p>
      <button onClick={generarEnteroAleatorio}>Generar entero aleatorio</button>
    </div>
  );
}

export default App;
