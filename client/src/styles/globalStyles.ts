import { createGlobalStyle } from 'styled-components';
import { appStyles } from './appStyles';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${appStyles.colors.background};
        font-family:Roboto;
        letter-spacing: ${appStyles.letterSpacing};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @font-face {
        src: url("../assets/fonts/RobotoSlab-VariableFont_wght.woff2") format("woff2");
        font-family: "Roboto";
    }
`;

export default GlobalStyle;
