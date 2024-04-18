import Head from "next/head";

export default function Encabezadas() {
  return (
    <>
      <Head>
        <title>Encabezadas</title>
      </Head>
      <main>
        <div>
          <h1>Descripción de etiquetas HTML</h1>
          <h2>&lt;h1&gt; - Encabezado de nivel 1</h2>
          <p>El elemento &lt;h1&gt; define el encabezado de mayor importancia en una página web. Usualmente se utiliza para el título principal.</p>

          <h2>&lt;h2&gt; - Encabezado de nivel 2</h2>
          <p>El elemento &lt;h2&gt; define un encabezado de segundo nivel. Puede ser utilizado para subtitular secciones importantes de la página.</p>

          <h2>&lt;h3&gt; - Encabezado de nivel 3</h2>
          <p>El elemento &lt;h3&gt; define un encabezado de tercer nivel. Es adecuado para subtítulos menos importantes.</p>

          <h2>&lt;h4&gt; - Encabezado de nivel 4</h2>
          <p>El elemento &lt;h4&gt; define un encabezado de cuarto nivel. Puede ser utilizado para subtítulos aún menos importantes que los definidos con &lt;h3&gt;.</p>

          <h2>&lt;h5&gt; - Encabezado de nivel 5</h2>
          <p>El elemento &lt;h5&gt; define un encabezado de quinto nivel. Se utiliza para subtítulos con menos importancia que los definidos con &lt;h4&gt;.</p>

          <h2>&lt;h6&gt; - Encabezado de nivel 6</h2>
          <p>El elemento &lt;h6&gt; define el encabezado de menor importancia en una página web. Es el nivel más bajo de encabezado.</p>
        </div>
      </main>
    </>
  );
}
