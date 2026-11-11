import styled from "styled-components";
import MenuIcon from "./icons/MenuIcon";
import { CircleButton, P } from "./StyledElements";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
`;

const Header = styled.div`
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  //background: rgba(0, 0, 0, 0.5);
`;

const menuHeight = "80%";
const MenuWindow = styled.div<{ $height: string }>`
  position: fixed;
  top: 80px;
  left: 5px;
  display: flex;
  background: ${({ theme }) => theme.palette.menu};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 60%;
  overflow-y: ${({ $height }) => ($height == "0px" ? "scroll" : "none")};
  padding: 0px;
  height: ${({ $height }) => $height};
  transition: height 200ms ease-out;
`;

const MenuContainer = styled.div<{ $flex: string }>`
  flex: ${({ $flex }) => $flex || "1"};
  display: flex;
  margin: 14px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.secondary};
  border-width: 1px;
`;

const MenuDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

const LinkList = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const DemoLink = styled(Link)`
  display: block;
  padding: 10px;
  color: ${({ theme }) => theme.palette.secondary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  font-family: ${({ theme }) => theme.typography.fonts.main};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  color: ${({ theme }) => theme.palette.secondary};
  font-family: ${({ theme }) => theme.typography.fonts.main};
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  width: 70px;
  height: 70px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 14px;
  color: ${({ theme }) => theme.palette.secondary};
  font-family: ${({ theme }) => theme.typography.fonts.main};
`;

const ProfileLink = styled.a`
  color: #70a9ff;

  &:hover {
    color: #4678c4;
  }
`;

const TopBar = () => {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState("0px");

  const closeWindow = () => {
    setHeight("0px");
    setTimeout(() => setIsOpen(false), 300);
  };

  const handleOnClick = (event: MouseEvent) => {
    if (
      windowRef.current &&
      menuButtonRef.current &&
      !event.composedPath().includes(windowRef.current) &&
      !event.composedPath().includes(menuButtonRef.current)
    ) {
      closeWindow();
    }
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.code === "Escape") {
      closeWindow();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setHeight(menuHeight), 10);
      document.body.addEventListener("click", handleOnClick);
      document.body.addEventListener("keydown", handleOnKeyDown);
      return () => {
        document.body.removeEventListener("click", handleOnClick);
        document.body.removeEventListener("keydown", handleOnKeyDown);
      };
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <Base>
      <TopBarBase>
        <CircleButton ref={menuButtonRef} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </CircleButton>
        <Header onClick={goToMainPage}>
          <P $whiteFont $bolded>
            zopinos.dev
          </P>
        </Header>
      </TopBarBase>

      {isOpen && (
        <Overlay>
          <MenuWindow ref={windowRef} $height={height}>
            <MenuDiv>
              <MenuContainer $flex={"1"}>
                <ProfileInfo>
                  <ProfileImg src="https://avatars.githubusercontent.com/u/89577985?v=4" draggable={false} />
                  <div style={{ flexDirection: "column", gap: "0px" }}>
                    <div style={{ padding: "5px", fontSize: "20px" }}>
                      <b>zopinos</b>
                    </div>
                    <div style={{ padding: "5px" }}>
                      <ProfileLink href="https://github.com/zopinos/demo-dump" target="_blank">
                        github
                      </ProfileLink>
                    </div>
                  </div>
                </ProfileInfo>
              </MenuContainer>
              <MenuContainer $flex={"5"}>
                <LinkList>
                  <DemoLink to="/">[0] Home</DemoLink>
                  <DemoLink to="/portfolio">[1] Portfolio</DemoLink>
                </LinkList>
              </MenuContainer>
            </MenuDiv>
            <MenuContainer $flex={"2"}>
              <InfoBox>Info</InfoBox>
            </MenuContainer>
          </MenuWindow>
        </Overlay>
      )}
    </Base>
  );
};

export default TopBar;
