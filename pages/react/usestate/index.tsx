import Head from "./next/head";
import Contador from "../../../components/pages/home/footer/contador";
import Saludo from "../../../components/layout/main/saludo";

export default function Component() {
  return (
    <>
      <header>
        <Saludo />
      </header>
      <main>
        <h1>useState</h1>
        <p>El hook useState es una función en React que permite añadir estado a componentes funcionales. 
        Retorna un par de valores: el estado actual y una función para actualizarlo. 
        Durante el primer renderizado del componente, useState utiliza el valor inicial pasado como argumento. 
        Cuando la función de actualización es llamada con un nuevo valor, React renderiza el componente con el estado actualizado.
        </p>
      </main>
      <footer>
        <Contador />
      </footer>
    </>
  );
}
