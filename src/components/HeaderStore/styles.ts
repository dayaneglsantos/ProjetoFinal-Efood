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
export const Text = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosaEscuro};
`
