import * as S from './styles'

type Restaurant = {
  type: string
  title: string
  cover: string
}

type Props = {
  restaurant: Restaurant
}

const Presentation = ({ restaurant }: Props) => {
  return (
    <S.PresentationContainer
      style={{ backgroundImage: `url(${restaurant.cover})` }}
    >
      <div className="container">
        <S.TypeFood>{restaurant.type}</S.TypeFood>
        <S.RestaurantName>{restaurant.title}</S.RestaurantName>
      </div>
    </S.PresentationContainer>
  )
}

export default Presentation
