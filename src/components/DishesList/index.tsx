import { ContainerList, List } from './styles'
import Dishe from '../Dishe'

import { RestaurantModel } from '../../pages/Home'

type Props = {
  restaurante: RestaurantModel
}

const DishesList = ({ restaurante }: Props) => {
  return (
    <ContainerList>
      <div className="container">
        <List>
          {restaurante.cardapio.map((item) => (
            <li key={item.id}>
              <Dishe
                id={item.id}
                image={item.foto}
                name={item.nome}
                description={item.descricao}
                porcao={item.porcao}
                price={item.preco}
              />
            </li>
          ))}
        </List>
      </div>
    </ContainerList>
  )
}

export default DishesList
