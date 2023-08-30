import { ContainerList, List } from './styles'
import DisheModel from '../../models/dishe'
import Dishe from '../Dishe'

type Props = {
  dishes: DisheModel[]
}

const DishesList = ({ dishes }: Props) => (
  <ContainerList>
    <div className="container">
      <List>
        {dishes.map((item) => (
          <li key={item.id}>
            <Dishe name={item.name} description={item.description} />
          </li>
        ))}
      </List>
    </div>
  </ContainerList>
)

export default DishesList
