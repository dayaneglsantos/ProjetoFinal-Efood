import { List } from './styles'
import Store from '../../models/restaurant'
import Restaurant from '../Restaurant'

type Props = {
  restautants: Store[]
}

const RestaurantsList = ({ restautants }: Props) => (
  <>
    <div className="container">
      <List>
        {restautants.map((item) => (
          <Restaurant
            highlight={item.highlight}
            typeFood={item.typeFood}
            key={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            avaliation={item.avaliation}
          />
        ))}
      </List>
    </div>
  </>
)

export default RestaurantsList
