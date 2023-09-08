import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${cores.rosaEscuro};
  position: relative;

  > img {
    height: 217px;
    width: 100%;
    object-fit: cover;
  }
`
export const RestaurantName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosaEscuro};
`

export const PlaceInfo = styled.div`
  display: flex;
  padding: 8px 8px 16px;
  justify-content: space-between;

  div {
    display: flex;
  }
`

export const Avaliation = styled(RestaurantName)`
  margin-right: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0 8px;
  color: ${cores.rosaEscuro};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
