import { HeaderContainer, Text } from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderStore = () => (
  <HeaderContainer>
    <Text>Restaurantes</Text>
    <img src={logo} alt="Logo Efood" />
    <Text>0 produto(s) no carrinho</Text>
  </HeaderContainer>
)
export default HeaderStore
