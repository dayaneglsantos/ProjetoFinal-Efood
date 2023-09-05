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
        <img src={image} alt={name} />
        <PlaceInfo>
          <RestaurantName>{name}</RestaurantName>
          <div>
            <Avaliation>{avaliation}</Avaliation>
            <img src={star} alt="Star" />
          </div>
        </PlaceInfo>
        <Description>{description}</Description>
        <Button id={id} />
      </Card>
    </>
  )
}

export default Restaurant
