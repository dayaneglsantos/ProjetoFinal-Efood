import { Cabecalho, Logo, Title } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Cabecalho>
    <Logo src={logo} alt="logo" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Cabecalho>
)

export default Header
