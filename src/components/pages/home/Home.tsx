import styled from "styled-components";
import { H1, P } from "../../StyledElements";

const Base = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary};
`;

const Page = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: auto;
  max-width: 30em;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`;

const Home = () => {
  return (
    <Base>
      <Page>
        <Logo src="/main-page/src/assets/logo-2.png" />
        <H1 $whiteFont>zopinos.dev</H1>
        <P $whiteFont>Main page.</P>
      </Page>
    </Base>
  );
};

export default Home;
