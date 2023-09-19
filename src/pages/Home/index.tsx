import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantsList from '../../components/RestautantsList'
import { useGetRestaurantsQuery } from '../../Services/api'

export type RestaurantModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      id: number
      foto: string
      descricao: string
      preco: number
      nome: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: list } = useGetRestaurantsQuery()

  if (list) {
    return (
      <>
        <Header />
        <RestaurantsList restautants={list} />
        <Footer />
      </>
    )
  }
  return <Loader />
}

export default Home
