import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import {
  Avaliation,
  Card,
  Description,
  Infos,
  PlaceInfo,
  RestaurantName
} from './styles'
import star from '../../assets/images/estrela.svg'
import Button from '../Button'
import { Link } from 'react-router-dom'

export type Props = {
  name: string
  description: string
  image: string
  highlight: boolean
  typeFood: string
  avaliation: string
  id: number
}

const Restaurant = ({
  name,
  description,
  image,
  highlight,
  typeFood,
  avaliation,
  id
}: Props) => {
  return (
    <>
      <Card>
        <Infos>
          {highlight ? <TagContainer>Destaque da semana</TagContainer> : ''}
          <Tag>{typeFood}</Tag>
        </Infos>
        <Link to={`/restaurante/${id}`}>
          <img src={image} alt={name} className="restaurantImg" />
        </Link>
        <PlaceInfo>
          <RestaurantName>{name}</RestaurantName>
          <div>
            <Avaliation>{avaliation}</Avaliation>
            <img src={star} alt="Star" />
          </div>
        </PlaceInfo>
        <Description>{description}</Description>
        <div>
          <Button id={id} />
        </div>
      </Card>
    </>
  )
}

export default Restaurant
