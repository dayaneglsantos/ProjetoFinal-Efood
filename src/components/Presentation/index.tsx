import { PresentationContainer, RestaurantName, TypeFood } from './styles'

type Restaurant = {
  tipo: string
  titulo: string
  capa: string
}

type Props = {
  restaurant: Restaurant
}

const Presentation = ({ restaurant }: Props) => {
  return (
    <PresentationContainer
      style={{ backgroundImage: `url(${restaurant.capa})` }}
    >
      <div className="container">
        <TypeFood>{restaurant.tipo}</TypeFood>
        <RestaurantName>{restaurant.titulo}</RestaurantName>
      </div>
    </PresentationContainer>
  )
}

export default Presentation
