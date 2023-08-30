import styled from 'styled-components'
import { cores } from '../../styles'
import bgPresentation from '../../assets/images/massa.svg'

export const PresentationContainer = styled.div`
  background-image: url(${bgPresentation});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  font-size: 32px;
  color: ${cores.branco};
  position: relative;

  .black {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
`
export const TypeFood = styled.span`
  font-weight: 200;
  position: absolute;
  top: 25px;
`

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: bold;
  position: absolute;
  bottom: 32px;
`
