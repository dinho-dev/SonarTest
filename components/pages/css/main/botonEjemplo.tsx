import { useState } from "react";
import styled from "styled-components";


const MaskDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 255, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalContainer = styled.div`
    background: white;
    width: 40vw;
    height: 40vh;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 5px 5px 23px 5px rgba(0,0,0,0.58);
`;

const ButtonStyle = styled.button`
border: 0;
background: #FFEFD5;
color: black;
border-radius: 3px;
margin-right: 5px;
margin-bottom: 5px;
cursor: pointer;
`

export default function BotonEjemplo(props: any) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      {modalVisible && (
        <MaskDiv onClick={() => {
             setModalVisible(false);
            }}>
            <ModalContainer onClick={(e) => e.stopPropagation()}> 
                <h3>{props.ejemplo.titulo}</h3>
                <p style={{ padding: "20px" }}>{props.ejemplo.descripcion}</p>
            </ModalContainer>
        </MaskDiv>
        )}
        <ButtonStyle
        onClick={() => {
          setModalVisible(true);
        }}
      >
        {props.ejemplo?.titulo}
        
        </ButtonStyle>
    </>
  );
}