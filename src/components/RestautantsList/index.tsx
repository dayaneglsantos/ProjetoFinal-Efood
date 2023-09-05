import { List } from './styles'
import Restaurant from '../Restaurant'
import { RestaurantModel } from '../../pages/Home'

type Props = {
  restautants: RestaurantModel[]
}

const RestaurantsList = ({ restautants }: Props) => {
  return (
    <>
      <div className="container">
        <List>
          {restautants.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
                highlight={item.destacado}
                typeFood={item.tipo}
                key={item.id}
                name={item.titulo}
                description={item.descricao}
                image={item.capa}
                avaliation={item.avaliacao}
              />
            </li>
          ))}
        </List>
      </div>
    </>
  )
}

export default RestaurantsList
