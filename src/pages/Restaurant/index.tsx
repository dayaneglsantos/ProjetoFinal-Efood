import { useParams } from 'react-router-dom'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import HeaderStore from '../../components/HeaderStore'
import Presentation from '../../components/Presentation'
import { useGetRestaurantQuery } from '../../Services/api'
import Loader from '../../components/Loader'

const RestaurantPage = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <HeaderStore />
      <Presentation restaurant={restaurant} />
      <DishesList restaurante={restaurant} />
      <Footer />
    </>
  )
}

export default RestaurantPage
