import styled from 'styled-components'
import { cores } from '../../styles'

export const DisheCard = styled.div`
  padding: 8px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  font-size: 14px;

  img {
    height: 167px;
    width: 304px;
  }
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
export const Button = styled.button`
  padding: 4px;
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
export const ModalContainer = styled.div`
  background-color: ${cores.rosaEscuro};
  height: 344px;
  display: flex;
  color: ${cores.rosaClaro};
  font-size: 14px;

  z-index: 1;
  position: relative;

  &.container {
    padding: 32px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h2 {
    font-size: 18px;
  }

  p {
    margin: 16px 0;
  }
`
