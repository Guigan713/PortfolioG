import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    /* New palette: light beige + forest green accents */
    --dark-bg: #F5F0E6; /* page background (light beige) */
    --deep-dark: #ECE5D8; /* surfaces/cards (slightly darker beige) */
    --gray-2: #C8BBAA; /* subtle borders/dividers (warm grey-beige) */
    --gray-1: #2F2B28; /* primary text (deep brown/charcoal) */
    --white : #FFFFFF;
    --black: #000000;
    --primary: #2E5E4E; /* forest green */
    --on-primary: #FDFBF7; /* text on primary */
  }
  html{
    font-size: 10px;
    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--dark-bg);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-2);
      }
    }
  }
`;
export default GlobalStyles;
