import styled from 'styled-components'
import { cores } from '../../styles'

export const DisheCard = styled.div`
  padding: 8px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  font-size: 14px;
`
export const DisheName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`
export const DisheDescription = styled.p`
  line-height: 22px;
  margin: 8px 0;
`
export const AddButton = styled.button`
  padding: 4px;
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
`
