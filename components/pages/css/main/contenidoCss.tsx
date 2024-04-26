import styled from "styled-components";
import { cssJsonData } from "@/data/mock/css";
import BotonEjemplo from "./botonEjemplo";

const DivContainerContenido = styled.div`
  width: 80vw;
  height: 70vh;
`;
const TituloH2 = styled.h2`
  margin: 32px;
  bottom: 32px;
  margin-bottom: 0;
  background: #00008B;
  height: 100px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 54px;
`;
const DivDescriptionContainer = styled.div`
  margin: 48px;
  border: 2px solid #00008B;
  margin-top: 0;
  height: 220px;
  border-radius: 0 0 8px 8px;
  position: relative;
  top: -2px;
  padding-left: 20px;
  padding-right: 20px;
`;
export default function ContenidoCss(props: any) {
  return (
    <DivContainerContenido>
      <TituloH2>{cssJsonData[props.contenidoPresente]?.titulo}</TituloH2>
      <DivDescriptionContainer>
        <p>{cssJsonData[props.contenidoPresente]?.descripcion}</p>
        <div>
          Ejemplos:
          <div>
            {cssJsonData[props.contenidoPresente]?.ejemplos.map(
              (ejemplo: any, i: number) => {
                return <BotonEjemplo ejemplo={ejemplo} key={i} />;
              }
            )}
          </div>
        </div>
      </DivDescriptionContainer>
    </DivContainerContenido>
  );
}