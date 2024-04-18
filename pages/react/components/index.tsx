import Saludo from "../../../components/layout/main/saludo";
import Contador from "../../../components/pages/home/footer/contador";

export default function Components() {
  return (
    <>
      <header><Saludo /></header>
      <main>
        <h1>Componente</h1>
        <p>Un componente en React es una pieza reutilizable de la interfaz de usuario. 
        Puede ser una pequeña parte de la interfaz de usuario, como un botón o un cuadro de texto, 
        o una colección de componentes más compleja, como un formulario o una barra de navegación. 
        Los componentes en React se componen unos de otros para construir la interfaz de usuario completa de una aplicación.
        </p>
      </main>
      <footer>
        <Contador />
      </footer>
    </>
  );
}
