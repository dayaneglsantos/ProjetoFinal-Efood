import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle from './styles'
import Rotas from './route'
import Cart from './components/Cart'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
