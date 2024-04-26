import styled from "styled-components";
import { jsJsonData } from "@/data/mock/js";
const DivContainerSelecto = styled.div`
  width: 20vw;
  height: 64vh;
  border: 2px solid #00008B;
  border-radius: 8px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: aliceblue;
  }
  &::-webkit-scrollbar-thumb {
    background: #00008B;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #00008B;
    backroung-opacity: 0.5;
  }
  &::webkit-scrollbar-button {
    display: none;
  }
`;
const DivSelecto = styled.div<{ selected: boolean }>`
  margin: 5px;
  background: #ADD8E6;
  ${(props) => props.selected && "background: #ADD8E6"}
  ${(props) => (props.selected ? "color: #ADD8E6;" : "color: white;")}
  border-radius: 3px;
  height: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.5s;
`;
export default function SelectorJs(props: any) {
  console.log(jsJsonData);
  return (
    <DivContainerSelecto>
      {jsJsonData.map((e: any, i: number) => {
        return (
          <DivSelecto
            key={i}
            onClick={() => {
              props.setContenidoPresente(i);
            }}
            selected={props.contenidoPresente === i ? true : false}
          >
            {e?.titulo}
          </DivSelecto>
        );
      })}
    </DivContainerSelecto>
  );
}