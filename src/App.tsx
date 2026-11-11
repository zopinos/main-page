import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import WordVortex from "./components/pages/word-vortex/WordVortex";
import TopBar from "./components/TopBar";
import PhotoDump from "./components/pages/photo-dump/PhotoDump";
import DragNThrow from "./components/pages/drag-n-throw/DragNThrow";
import Menu from "./components/Menu";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    color: ${({ theme }) => theme.palette.primary};
    background-color: rgb(0, 0, 0, 0);
    scrollbar-gutter: stable both-edges;
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-vortex/" element={<WordVortex />} />
          <Route path="/photo-dump/" element={<PhotoDump />} />
          <Route path="/drag-n-throw/" element={<DragNThrow />} />
        </Routes>
        <Menu
          isOpen={false}
          handleSetIsOpen={(state: boolean) => {
            return;
          }}
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;
