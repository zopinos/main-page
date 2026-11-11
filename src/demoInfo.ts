// @ts-ignore: imported raw markdown without type declarations
import homeReadme from "./components/pages/home/README.md?raw";
// @ts-ignore: imported raw markdown without type declarations
import wordVortexReadme from "./components/pages/word-vortex/README.md?raw";
// @ts-ignore: imported raw markdown without type declarations
import photoDumpReadme from "./components/pages/photo-dump/README.md?raw";
// @ts-ignore: imported raw markdown without type declarations
import dragNThrowReadme from "./components/pages/drag-n-throw/README.md?raw";

const demoInfo: Record<string, string> = {
  home: homeReadme,
  wordVortex: wordVortexReadme,
  photoDump: photoDumpReadme,
  dragNThrow: dragNThrowReadme
};

export default demoInfo;
