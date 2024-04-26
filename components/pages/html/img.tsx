import Head from "next/head";

export default function Img() {
  return (
    <>
      <Head>
        <title>Etiqueta Img</title>
      </Head>
      <main>
        <div>
          <h1>Etiqueta Img</h1>
          <p>El elemento &lt;img&gt; se utiliza para insertar imágenes en una página web.</p>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-c53c1097303f4f3dec189c80e887bfdf-pjlq" alt="Descripción de la imagen" />
          <p>Esta es una imagen insertada utilizando el elemento &lt;img&gt;.</p>
        </div>
      </main>
    </>
  );
}
