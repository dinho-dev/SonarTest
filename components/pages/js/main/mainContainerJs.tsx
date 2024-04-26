import { useState } from "react";
import ContenidoJs from "./contenidoJs";
import SelectorJS from "./selectoJs";

export default function MainContainerJs() {
  const [contenidoPresente, setContenidoPresente] = useState<number>(0);
  return (
    <>
      <SelectorJS
        contenidoPresente={contenidoPresente}
        setContenidoPresente={setContenidoPresente}
      />
      <ContenidoJs contenidoPresente={contenidoPresente} />
    </>
  );
}