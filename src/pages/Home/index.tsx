import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantsList from '../../components/RestautantsList'

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
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((json) => setList(json))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restautants={list} />
      <Footer />
    </>
  )
}

export default Home
