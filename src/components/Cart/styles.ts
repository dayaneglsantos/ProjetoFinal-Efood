import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.svg'

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
  flex-direction: row-reverse;
  z-index: 1;

  &.open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const Aside = styled.aside`
  background-color: ${cores.rosaEscuro};
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  color: ${cores.rosa};
`
export const CartItem = styled.div`
  padding: 8px;
  background-color: ${cores.rosa};
  display: flex;
  color: ${cores.rosaEscuro};
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
export const TotalPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
`
