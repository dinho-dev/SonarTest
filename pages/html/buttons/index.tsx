import Head from "next/head";

export default function ButtonsDescription() {
  const handleRickRoll = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };

  return (
    <>
      <Head>
        <title>Descripción de Botones HTML</title>
      </Head>
      <main>
        <div>
          <h1>Descripción de Botones HTML</h1>
          <p>Los botones son elementos importantes en HTML que permiten a los usuarios interactuar con la página web. Aquí hay una descripción de algunos tipos comunes de botones:</p>

          <h2>&lt;button type="button"&gt; - Botón normal</h2>
          <p>Este tipo de botón se utiliza para realizar acciones en la página, como abrir un cuadro de diálogo o realizar una acción JavaScript.</p>
          <button type="button" onClick={handleRickRoll}>¡Haga clic aquí!</button>

          <h2>&lt;button type="submit"&gt; - Botón de envío</h2>
          <p>Este tipo de botón se utiliza dentro de formularios para enviar los datos del formulario al servidor.</p>
          <button type="submit">Enviar</button>

          <h2>&lt;button type="reset"&gt; - Botón de reinicio</h2>
          <p>Este tipo de botón se utiliza dentro de formularios para restablecer los valores de todos los controles a sus valores iniciales.</p>
          <button type="reset">Restablecer</button>
        </div>
      </main>
    </>
  );
}
