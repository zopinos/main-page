import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { H1, P } from "../../StyledElements";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #fff2c5;
  }
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  margin-top: 80px;
  overflow-y: scroll;
`;

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Content>
          <H1 $oldFont>Portfolio</H1>
          <P $oldFont>Projects from newest to oldest.</P>
        </Content>
      </Page>
    </ThemeProvider>
  );
};

export default Portfolio;
