import styled from "styled-components";
import { BoxButton, H1, H2, P } from "../../StyledElements";

const Base = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary};
`;

const Content = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 40%;
  margin-top: 80px;
  overflow-y: scroll;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

const LinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ProjectBox = styled.div`
  margin-bottom: 20px;
`;

const HyperLink = styled.a`
  color: #70a9ff;

  &:hover {
    color: #4678c4;
  }
`;

interface ProjectButtonProps extends React.PropsWithChildren {
  link: string;
}

const ProjectButton = ({ link, children }: ProjectButtonProps) => {
  return <BoxButton onClick={() => window.open(link, "_blank", "noopener")}>{children}</BoxButton>;
};

const Portfolio = () => {
  return (
    <Base>
      <Content>
        <Heading>
          <H1 $whiteFont>Portfolio</H1>
          <P $whiteFont>Projects from newest to oldest.</P>
        </Heading>

        <ProjectBox>
          <H2 $whiteFont>Glare Game</H2>
          <LinkButtons>
            <ProjectButton link="https://zopinos.github.io/glare-game/">To Game</ProjectButton>
            <ProjectButton link="https://github.com/zopinos/glare-game">Github</ProjectButton>
          </LinkButtons>
          <P $whiteFont>Game project. Project 2 for the course Device-Agnostic Design with Flutter and Dart.</P>
        </ProjectBox>
        <ProjectBox>
          <H2 $whiteFont>demo-dump</H2>
          <LinkButtons>
            <ProjectButton link="https://zopinos.github.io/demo-dump/">To Page</ProjectButton>
            <ProjectButton link="https://github.com/zopinos/demo-dump">Github</ProjectButton>
          </LinkButtons>
          <P $whiteFont>
            Personal visual sandbox and archive.
            <HyperLink href="https://zopinos.github.io/demo-dump/#/photo-dump" rel="noopener" target="_blank">
              Here
            </HyperLink>{" "}
            I also have my photography portfolio currently set up.
          </P>
        </ProjectBox>
        <ProjectBox>
          <H2 $whiteFont>Futuboard</H2>
          <LinkButtons>
            <ProjectButton link="https://futuboard.live/">To Page</ProjectButton>
            <ProjectButton link="https://github.com/Futuboard/Futuboard">Github</ProjectButton>
          </LinkButtons>
          <P $whiteFont>Personal visual sandbox and archive.</P>
        </ProjectBox>
        <ProjectBox>
          <H2 $whiteFont>recipe-form</H2>
          <LinkButtons>
            <ProjectButton link="https://zopinos.github.io/recipe-form/">To Page</ProjectButton>
            <ProjectButton link="https://github.com/zopinos/recipe-form">Github</ProjectButton>
          </LinkButtons>
          <P $whiteFont>
            Recipe creation app designed to be used as the recipe item is being made. I made this to learn front-end web
            dev and React Native.
          </P>
        </ProjectBox>
        <ProjectBox>
          <H2 $whiteFont>Maze Project</H2>
          <P $whiteFont>Project for the Ohjelmointistudio 2 -course.</P>
        </ProjectBox>
      </Content>
    </Base>
  );
};

export default Portfolio;
