import Head from "next/head";

export default function Anchor() {
  return (
    <>
      <Head>
        <title>Etiqueta a</title>
      </Head>
      <main>
        <div>
          <h1>Etiqueta A</h1>
          <p>El elemento &lt;a&gt; se utiliza para crear enlaces o hipervínculos en una página web.</p>
          <a href="https://www.ejemplo.com">Este es un enlace de ejemplo</a>
          <p>Este es un enlace que lleva al sitio web de ejemplo.</p>
        </div>
      </main>
    </>
  );
}
