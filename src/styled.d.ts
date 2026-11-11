import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string | number;

    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
      dark: string;
      menu: string;
      light: string;
    };

    typography: {
      fontSizes: {
        smaller: string;
        body: string;
        heading: string;
        heading2: string;
      };
      fonts: {
        main: string;
        old: string;
      };
      fontWeights: {
        normal: string | number;
        bold: number;
      };
    };
  }
}
