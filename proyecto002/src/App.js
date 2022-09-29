import './App.css';

function mostrartitulo(titulo){
  return (
    <h1>
      {titulo}
    </h1>
  );
}

function App() {
  return (
    <div>
      {mostrartitulo("¡Hola... Mundo!")}
      {mostrartitulo("¡Adiós... Mundo!")}
    </div>
  );
}

export default App;
