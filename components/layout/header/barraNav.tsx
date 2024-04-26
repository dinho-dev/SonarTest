import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 2px solid #00008B;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #ADD8E6;
`;
const LinkA = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const TextSpan = styled.span<{ selected: boolean }>`
  margin-left: 10px;
  color: #00008B;
  ${(props) => (props.selected ? "color: black;" : "color: #00008B;")}
  ${(props) => props.selected && "font-size: 25px;"}
  &:hover {
    color: black;
    font-size: 25px;
  }
  transition: all 0.5s;
`;
export default function barraNav(props: any) {
  return (
    <NavBar>
      <LinkA href="/html">
        <TextSpan selected={props.page === "html" ? true : false}>
          HTML
        </TextSpan>
        <img src="/img/html.png" alt="html" height={36} />
      </LinkA>
      <LinkA href="/css">
        <TextSpan selected={props.page === "css"}>CSS</TextSpan>
        <img src="/img/css.png" alt="css" height={36} />
      </LinkA>
      <LinkA href="/js">
        <TextSpan selected={props.page === "js" ? true : false}>JS</TextSpan>
        <img src="/img/js.png" alt="js" height={36} />
      </LinkA>
      <LinkA href="/ts">
        <TextSpan selected={props.page === "ts" ? true : false}>TS</TextSpan>
        <img src="/img/ts.png" alt="ts" height={36} />
      </LinkA>
      <LinkA href="/react">
        <TextSpan selected={props.page === "react" ? true : false}>
          React
        </TextSpan>
        <img
          src="https://assets-global.website-files.com/62038ffc9cd2db4558e3c7b7/623b38335c7b880db9eff54d_react.svg"
          alt="react"
          height={36}
        />
      </LinkA>
      <LinkA href="/angular">
        <TextSpan selected={props.page === "angular" ? true : false}>
          Angular
        </TextSpan>
        <img src="/img/angular.png" alt="angular" height={36} />
      </LinkA>
    </NavBar>
  );
}