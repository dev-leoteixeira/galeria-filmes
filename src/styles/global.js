import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: roboto light, sans-serif;
}
  
/* styles.css ou global.css */
.modal-open .Card:hover {
  transform: none !important;
  box-shadow: none !important;
}

.modal-open .Card img:hover {
  transform: none !important;
  opacity: 1 !important;
}

.modal-open .Card button:hover {
  background-color: #007bff !important;
  transform: none !important;
}
`;





export default GlobalStyle;