import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import HeaderStore from '../../components/HeaderStore'
import Presentation from '../../components/Presentation'
import list from './dishesList'

const RestaurantPage = () => (
  <>
    <HeaderStore />
    <Presentation />
    <DishesList dishes={list} />
    <Footer />
  </>
)

export default RestaurantPage
