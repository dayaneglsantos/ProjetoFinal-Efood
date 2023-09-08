import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 0 120px;

    @media (max-width: ${breakpoints.desktop}){
      width: 80%;
    }
  }
`
export const cores = {
  rosaClaro: '#FFF8F2',
  rosa: '#FFEBD9',
  rosaEscuro: '#E66767',
  branco: '#fff'
}

export default GlobalStyle
