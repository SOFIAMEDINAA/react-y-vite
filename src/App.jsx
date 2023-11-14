import { useEffect, useState } from 'react';
import './App.css'

const API = "https://pokeapi.co/api/v2/pokemon/ditto";

function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("def nombre");
  const [imagen, setImagen] = useState("def imagen");

  useEffect(  () => (
    async function fetchApi() {
      const res = await fetch(API);
      let info = "def info";

      if (res.ok) {
        info = await res.json();
        setNombre(info.name);
        setImagen(info.sprites.front_default);

      }
    }

));


  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <>
      <h1>contador</h1>
      <button onClick={aumentar}>aumentar</button>
      <h2>{contador}</h2>
      <h3>{nombre}</h3>
      <img src={imagen} alt={imagen} />

    </>
  )
}

export default App
