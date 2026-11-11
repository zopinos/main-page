import { createGlobalStyle } from "styled-components";
import PhysicsDemo from "./PhysicsDemo";
import { H1, P } from "../../StyledElements";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #01020c;
  }
`;

const DragNThrow = () => {
  return (
    <div>
      <GlobalStyle />
      <PhysicsDemo />
      <H1 $whiteFont>zopinos.dev</H1>
      <P $whiteFont>Main page.</P>
    </div>
  );
};

export default DragNThrow;
