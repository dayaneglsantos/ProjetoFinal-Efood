import { PresentationContainer, RestaurantName, TypeFood } from './styles'

const Presentation = () => (
  <PresentationContainer>
    <div className="black">
      <div className="container">
        <TypeFood>Italiana</TypeFood>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </div>
    </div>
  </PresentationContainer>
)

export default Presentation
