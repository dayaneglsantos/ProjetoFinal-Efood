import { HeaderContainer, Text } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeaderStore = () => (
  <HeaderContainer>
    <Text>Restaurantes</Text>
    <Link to={'/'}>
      <img src={logo} alt="Logo Efood" />
    </Link>
    <Text>0 produto(s) no carrinho</Text>
  </HeaderContainer>
)
export default HeaderStore
