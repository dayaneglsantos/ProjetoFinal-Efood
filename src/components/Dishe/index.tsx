import { AddButton, DisheCard, DisheDescription, DisheName } from './styles'
import pizza from '../../assets/images/pizza.svg'

type Props = {
  name: string
  description: string
}

const Dishe = ({ description, name }: Props) => (
  <>
    <DisheCard>
      <img src={pizza} alt="Pizza" />
      <DisheName>{name}</DisheName>
      <DisheDescription>{description}</DisheDescription>
      <AddButton>Adicionar ao carrinho</AddButton>
    </DisheCard>
  </>
)

export default Dishe
