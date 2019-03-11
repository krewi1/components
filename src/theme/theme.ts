import * as styledComponents from "styled-components";

export interface IThemeInterface {
    primaryColor: string;
    errorColor: string;
    successColor: string;
    warningColor: string;
    defaultPadding: number;
    paddingMultiplier: number;
}

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
