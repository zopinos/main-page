import styled from "styled-components";
import { P } from "./StyledElements";
import { Link, useNavigate } from "react-router-dom";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopBarBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background: ${({ theme }) => theme.palette.menu};
  padding: 8px;
  padding-left: 14px;
  gap: 20px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.light};
  border-width: 1px;
`;

const Header = styled.div`
  cursor: pointer;
`;

const LinkList = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 30px;
  margin-right: 10px;
  overflow-x: auto;
`;

const PageButton = styled(Link)`
  padding: 14px;
  color: ${({ theme }) => theme.palette.secondary};
  background-color: rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 1);
  }
  font-family: ${({ theme }) => theme.typography.fonts.main};
`;

const Logo = styled.img`
  width: 70px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`;

const TopBar = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <Base>
      <TopBarBase>
        <Header onClick={goToMainPage}>
          <Logo src="/main-page/apps.png" />
        </Header>
        <Header onClick={goToMainPage}>
          <P $whiteFont $bolded>
            zopinos.dev
          </P>
        </Header>
        <LinkList>
          <PageButton to="/">[0] Home</PageButton>
          <PageButton to="/portfolio">[1] Portfolio</PageButton>
        </LinkList>
      </TopBarBase>
    </Base>
  );
};

export default TopBar;
