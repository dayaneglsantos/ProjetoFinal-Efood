import Dishe from '../Dishe'
import * as S from './styles'

type Props = {
  restaurante: RestaurantModel
}

const DishesList = ({ restaurante }: Props) => {
  return (
    <S.ContainerList>
      <div className="container">
        <S.List>
          {restaurante.menu.map((item) => (
            <li key={item.id}>
              <Dishe
                id={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                portion={item.portion}
                price={item.price}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.ContainerList>
  )
}

export default DishesList
