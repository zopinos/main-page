import styled from "styled-components";
import { BoxButtonLink, H1, H2, HyperLink, P } from "../../StyledElements";

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
  max-width: 600px;
  margin-top: 80px;
  margin-right: 50px;
  margin-left: 50px;
  overflow-y: hidden;
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
  max-height: 50px;
`;

const ProjectBox = styled.div`
  margin-bottom: 100px;
`;

const ProjectHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const ProjectImageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const ProjectImage = styled.img`
  max-width: 90%;
  object-fit: contain;
`;

const Portfolio = () => {
  return (
    <Base>
      <Content>
        <Heading>
          <H1 $whiteFont>Portfolio</H1>
          <P $whiteFont>Projects from the newest to the oldest.</P>
        </Heading>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>Glare Game</H2>
            <LinkButtons>
              <BoxButtonLink href="https://zopinos.github.io/glare-game/" rel="noopener" target="_blank">
                To Game
              </BoxButtonLink>
              <BoxButtonLink href="https://github.com/zopinos/glare-game" rel="noopener" target="_blank">
                Github
              </BoxButtonLink>
            </LinkButtons>
          </ProjectHeading>

          <ProjectImageBox>
            <ProjectImage src="/main-page/media/glare-game-demo-2.gif" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            Flutter, Flame Engine, Forge2D
          </P>
          <P $whiteFont>Game project. Project 2 for the course Device-Agnostic Design with Flutter and Dart.</P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>demo-dump</H2>
            <LinkButtons>
              <BoxButtonLink href="https://zopinos.github.io/demo-dump/" rel="noopener" target="_blank">
                To Page
              </BoxButtonLink>
              <BoxButtonLink href="https://github.com/zopinos/demo-dump" rel="noopener" target="_blank">
                Github
              </BoxButtonLink>
            </LinkButtons>
          </ProjectHeading>
          <ProjectImageBox>
            <ProjectImage src="/main-page/media/demo-dump-demo.png" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            React, TypeScript, styled-components
          </P>
          <P $whiteFont>
            Personal visual sandbox and archive.{" "}
            <HyperLink href="https://zopinos.github.io/demo-dump/#/photo-dump" rel="noopener" target="_blank">
              Here
            </HyperLink>{" "}
            I also have my photography portfolio currently set up.
          </P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>Peggle Physics Replicated in Godot</H2>
          </ProjectHeading>
          <ProjectImageBox>
            <ProjectImage src="/main-page/media/peggle-clone-demo.gif" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            Godot, gdscript
          </P>
          <P $whiteFont>
            I was interested in how the physics work in Peggle, so I replicated the ball shooting mechanic as a base. I
            wanted to know how the game could be sped up with the physics always staying the same, as well as how when
            aiming, the ball always hits where the cursor is.
          </P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>Futuboard</H2>
            <LinkButtons>
              <BoxButtonLink href="https://futuboard.live/" rel="noopener" target="_blank">
                To Page
              </BoxButtonLink>
              <BoxButtonLink href="https://github.com/Futuboard/Futuboard" rel="noopener" target="_blank">
                Github
              </BoxButtonLink>
            </LinkButtons>
          </ProjectHeading>
          <ProjectImageBox>
            <ProjectImage src="/main-page/media/futuboard-demo.png" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            React, TypeScript, Django, Python
          </P>
          <P $whiteFont>
            Free and open source workflow management tool on the web which was part of the Software Project course in
            Aalto University. We worked as a nine-person Scrum team.
          </P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>recipe-form</H2>
            <LinkButtons>
              <BoxButtonLink href="https://zopinos.github.io/recipe-form/" rel="noopener" target="_blank">
                To Page
              </BoxButtonLink>
              <BoxButtonLink href="https://github.com/zopinos/recipe-form" rel="noopener" target="_blank">
                Github
              </BoxButtonLink>
            </LinkButtons>
          </ProjectHeading>
          <P $whiteFont $italic>
            React, Redux, JavaScript, React Native
          </P>
          <P $whiteFont>
            Recipe creation app designed to be used as the recipe item is being made. I made this to learn front-end web
            dev and React Native.
          </P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>Art Gallery Project</H2>
          </ProjectHeading>
          <ProjectImageBox>
            <ProjectImage src="/main-page/media/art-gallery-demo.gif" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            Godot, gdscript, Blender
          </P>
          <P $whiteFont>Small experiment where the user can put their own images on walls of an art gallery.</P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>Maze Project</H2>
          </ProjectHeading>
          <ProjectImageBox>
            <ProjectImage src="/main-page/media/maze-project-demo.gif" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            Scala, ScalaFX
          </P>
          <P $whiteFont>
            Project for the Ohjelmointistudio 2 -course. Randomly generated mazes are created and solved with recursive
            backtracking. The 3D rasterizer is written with the help of{" "}
            <HyperLink href="https://youtu.be/ih20l3pJoeU?si=fYl0p9cPybsIO0sf" rel="noopener" target="_blank">
              javidx9's 3D Graphics Engine tutorial series
            </HyperLink>
            .{" "}
          </P>
        </ProjectBox>

        <ProjectBox>
          <ProjectHeading>
            <H2 $whiteFont>Godot Voxel Experiment</H2>
          </ProjectHeading>
          <ProjectImageBox>
            <ProjectImage src="/main-page/media/voxel-demo.gif" />
          </ProjectImageBox>
          <P $whiteFont $italic>
            Godot, gdscript
          </P>
          <P $whiteFont>
            Small experiment replicating the{" "}
            <HyperLink href="https://github.com/s-macke/VoxelSpace" rel="noopener" target="_blank">
              VoxelSpace
            </HyperLink>{" "}
            demo in Godot.
          </P>
        </ProjectBox>
      </Content>
    </Base>
  );
};

export default Portfolio;
