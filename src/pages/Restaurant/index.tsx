import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import HeaderStore from '../../components/HeaderStore'
import Presentation from '../../components/Presentation'
import { RestaurantModel } from '../Home'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantModel>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((json) => setRestaurant(json))
  }, [])

  if (!restaurant) {
    return <h3>Carregando...</h3>
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
