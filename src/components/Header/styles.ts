import styled from 'styled-components'
import fundo from '../../assets/images/bgHeader.svg'
import { cores } from '../../styles'

export const Cabecalho = styled.header`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 380px;
  padding-top: 64px;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  color: ${cores.rosaEscuro};
  max-width: 540px;
  text-align: center;
  margin: 138px auto 0;
`
