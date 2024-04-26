import Head from "next/head";

export default function Div() {
  return (
    <>
      <Head>
        <title>Etiqueta Div</title>
      </Head>
      <main>
        <div>
          <h1>Etiqueta Div</h1>
          <p>La etiqueta div es uno de los etiquetas más versátiles en HTML y se utiliza para agrupar otros elementos y aplicar estilos a ellos.</p>
          <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
            <h2>Ejemplo 1</h2>
            <p>Este es el contenido del primer div.</p>
          </div>
          <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
            <h2>Ejemplo 2</h2>
            <p>Este es el contenido del segundo div.</p>
          </div>
          <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
            <h2>Ejemplo 3</h2>
            <p>Este es el contenido del tercer div.</p>
          </div>
        </div>
      </main>
    </>
  );
}
