import BarraNavegacion from "@/components/layout/header/barraNav";
import TituloPagina from "@/components/layout/header/tituloPagina";
import MainContainerCss from "@/components/pages/css/main/mainContainerCss";
import styled from "styled-components";

const MainStyles = styled.main`
  display: flex;
`;

export default function CssPage() {
  return (
    <>
      <header>
        <TituloPagina titulo="CSS" />
        <BarraNavegacion page="css" />
      </header>
      <MainStyles>
        <MainContainerCss />
      </MainStyles>
      {/* <footer><CopiRait/></footer> */}
    </>
  );
}