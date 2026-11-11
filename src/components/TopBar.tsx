import styled from "styled-components";
import { useRef, useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import { P } from "./StyledElements";

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

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.secondary};
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

const DemoList = () => {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSetIsOpen = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <Base>
      <TopBarBase>
        <MenuButton ref={menuButtonRef} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </MenuButton>
        <P $whiteFont $bolded>
          zopinos.dev
        </P>
      </TopBarBase>
    </Base>
  );
};

export default DemoList;
