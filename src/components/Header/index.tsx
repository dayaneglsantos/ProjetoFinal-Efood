import { Cabecalho, Logo, Title } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <Cabecalho>
    <Link to={'/'}>
      <Logo src={logo} alt="logo" />
    </Link>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Cabecalho>
)

export default Header
