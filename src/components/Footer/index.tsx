import { FooterContainer, FooterText, SocialMedia } from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Logo Efood" />
    <div>
      <SocialMedia src={instagram} alt="Logo instagram" />
      <SocialMedia src={facebook} alt="Logo facebook" />
      <SocialMedia src={twitter} alt="Logo twitter" />
    </div>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterContainer>
)
export default Footer
