// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={calcularSuma}>
        <p>
          Ingrese primer valor:
          <input type="number" name="valor1"></input>
        </p>
        <p>
          Ingrese segundo valor:
          <input type="number" name="valor2"></input>
        </p>
        <p>
          <input type="submit" name="Sumar"></input>
        </p>
      </form>
    </div>
  );
}

function calcularSuma(event){
  event.preventDefault();
  const valor1 = parseInt(event.target.valor1.value,10);
  const valor2 = parseInt(event.target.valor2.value,10);
  const suma = valor1 + valor2;
  alert("La suma es: "+ suma);
}

export default App;
