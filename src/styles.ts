import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 80px 0 120px;
  }
`
export const cores = {
  rosaClaro: '#FFF8F2',
  rosa: '#FFEBD9',
  rosaEscuro: '#E66767'
}

export default GlobalStyle
