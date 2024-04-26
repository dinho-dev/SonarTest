import BarraNavegacion from "@/components/layout/header/barraNav";
import TituloPagina from "@/components/layout/header/tituloPagina";
import MainContainerJs from "@/components/pages/js/main/mainContainerJs";
import styled from "styled-components";

const MainStyles = styled.main`
  display: flex;
`;

export default function JsPage() {
  return (
    <>
      <header>
        <TituloPagina titulo="JS" />
        <BarraNavegacion page="js" />
      </header>
      <MainStyles>
        <MainContainerJs />
      </MainStyles>
      {/* <footer><CopiRait/></footer> */}
    </>
  );
}