import styled from "styled-components";
import { H1, HyperLink, P } from "../../StyledElements";
import { Link } from "react-router-dom";

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

const RouteLink = styled(Link)`
  color: #70a9ff;

  &:hover {
    color: #4678c4;
  }
`;

const Home = () => {
  return (
    <Base>
      <Page>
        <H1 $whiteFont>zopinos.dev</H1>
        <P $whiteFont>
          <HyperLink href="https://github.com/zopinos" rel="noopener" target="_blank">
            github
          </HyperLink>
        </P>
        <P $whiteFont>
          <RouteLink to="/portfolio">to portfolio</RouteLink>
        </P>
      </Page>
    </Base>
  );
};

export default Home;
