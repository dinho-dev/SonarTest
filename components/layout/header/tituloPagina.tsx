import styled from "styled-components";
const TituloH1 = styled.h1`
  color: white;
  background: #00008B;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
  border-radius: 8px;
  padding: 12px;
`;
export default function TituloPagina(props: any) {
  return (
    <TituloH1 style={{ textAlign: "center" }}>
      Documentacion de {props.titulo}
    </TituloH1>
  );
}