import styled from 'styled-components'
import bgImage from '../../assets/images/bgHeader.svg'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  height: 186px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const SectionTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosaEscuro};
`
export const CartItems = styled(SectionTitle)`
  cursor: pointer;
`
