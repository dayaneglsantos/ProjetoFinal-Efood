import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  padding: 6px 4px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  border: none;
  margin: 16px 8px 8px;
  cursor: pointer;
  text-decoration: none;
`
