import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    border: string;
    textMain: string;
    textColor0: string;
    textGray1: string;
    textGray2: string;
    textGray3: string;
    textGray4: string;
    textGray5: string;
    textBorder: string;
    icon_file: string;
    wrapperGrey: string;
    wrapperBlue: string;
    red: string;
    green: string;
    blue: string;
    orange: string;
    wrapper: string;
  }

  export interface Theme {
    font: {
      fontFamily: string;
      fontSize: number;
    };
  }
}
