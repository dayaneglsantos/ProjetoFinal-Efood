import Restaurant from '../Restaurant'

import { List } from './styles'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <>
      <div className="container">
        <List>
          {restaurants.map((item) => (
            <li key={item.id}>
              <Restaurant
                id={item.id}
                highlight={item.highlight}
                typeFood={item.type}
                key={item.id}
                name={item.title}
                description={item.description}
                image={item.cover}
                avaliation={item.avaliation}
              />
            </li>
          ))}
        </List>
      </div>
    </>
  )
}

export default RestaurantsList
