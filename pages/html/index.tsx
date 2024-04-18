import Head from "next/head";

export default function HTML() {
  return (
    <>
      <Head>
        <title>HTML</title>
      </Head>
      <main>
        <h1>La documentación HTML</h1>
        <li>
          <a href="/html/p">Parrafo p</a>
        </li>
        <li>
          <a href="/html/listas">Listas</a>
        </li>
        <li>
          <a href="/html/hx">Encabezas</a>
        </li>
        <li>
          <a href="/html/table">Table</a>
        </li>
        <li>
          <a href="/html/buttons">Buttons</a>
        </li>
        <li> 
          <a href="./">Home</a>
        </li>
      </main>
    </>
  );
}
