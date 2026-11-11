import styled, { createGlobalStyle } from "styled-components";
import PhysicsDemo from "./PhysicsDemo";
import { H1, P } from "../../StyledElements";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #01020c;
  }
`;

const Base = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const DragNThrow = () => {
  return (
    <Base>
      <GlobalStyle />
      <PhysicsDemo />
    </Base>
  );
};

export default DragNThrow;
