import Head from "next/head";

export default function Encabezados() {
  return (
    <>
      <main>
        <div>
          <h1>Encabezadoz</h1>
          <p>Los elementos de encabezado implementan seis niveles de encabezado del documento, &lt;h1&gt; es el más importante, y &lt;h6&gt;  , el menos importante. Un elemento de encabezado describe brevemente el tema de la sección que presenta. La información de encabezado puede ser usada por los agentes usuarios, por ejemplo, para construir una tabla de contenidos para un documento automáticamente.</p>
          <h1>&lt;h1&gt; - Encabezado de nivel 1</h1>
          <h2>&lt;h2&gt; - Encabezado de nivel 2</h2>
          <h3>&lt;h3&gt; - Encabezado de nivel 3</h3>
          <h4>&lt;h4&gt; - Encabezado de nivel 4</h4>
          <h5>&lt;h5&gt; - Encabezado de nivel 5</h5>
          <h6>&lt;h6&gt; - Encabezado de nivel 6</h6>
        </div>
      </main>
    </>
  );
}
