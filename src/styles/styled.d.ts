import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: string;

    colors: {
      primary: string;
      green: string;
      greenLighter: string;
      black: string;
      white: string;
      primaryText: string;
      primaryTextLighter: string;

      grayLight: string;
      secondaryGray: string;
      primaryGray: string;

      title: string;
      text: string;
      textDetails: string;

      buttonText: string;

      inputBackground: string;

      shapes: string;
    };
  }
}
