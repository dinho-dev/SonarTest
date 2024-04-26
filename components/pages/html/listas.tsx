import Head from "next/head";

export default function Listas() {
  return (
    <>
      <Head>
        <title>Lista de Elementos</title>
      </Head>
      <main>
        <div>
          <h1>Lista de Elementos</h1>
          <p>Los elementos de lista son una forma de organizar y presentar información en una página web. Hay varios tipos de listas que se pueden usar dependiendo de la estructura y el contenido que deseas mostrar.</p>
          <h2>Listas no ordenadas (&lt;ul&gt;)</h2>
          <p>Las listas no ordenadas se crean con el elemento &lt;ul&gt; y contienen elementos de lista (&lt;li&gt;). Estos elementos se muestran con viñetas y no tienen un orden específico.</p>
          <ul>
            <li>Elemento de lista 1</li>
            <li>Elemento de lista 2</li>
            <li>Elemento de lista 3</li>
          </ul>
          <h2>Listas ordenadas (&lt;ol&gt;)</h2>
          <p>Las listas ordenadas se crean con el elemento &lt;ol&gt; y contienen elementos de lista (&lt;li&gt;). Estos elementos se muestran con números o letras y siguen un orden específico.</p>
          <ol>
            <li>Elemento de lista 1</li>
            <li>Elemento de lista 2</li>
            <li>Elemento de lista 3</li>
          </ol>
          <h2>Listas de definición (&lt;dl&gt;)</h2>
          <p>Las listas de definición se crean con el elemento &lt;dl&gt; y contienen pares de términos y definiciones. Cada término se define con el elemento &lt;dt&gt; y cada definición se proporciona con el elemento &lt;dd&gt;.</p>
          <dl>
            <dt>Término 1</dt>
            <dd>Definición 1</dd>
            <dt>Término 2</dt>
            <dd>Definición 2</dd>
            <dt>Término 3</dt>
            <dd>Definición 3</dd>
          </dl>
        </div>
      </main>
    </>
  );
}
