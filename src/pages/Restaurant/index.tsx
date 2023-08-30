import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import HeaderStore from '../../components/HeaderStore'
import Presentation from '../../components/Presentation'
import list from './dishesList'

const RestaurantPage = () => (
  <>
    <HeaderStore />
    <Presentation restaurant={0} />
    <DishesList dishes={list} />
    <Footer />
  </>
)

export default RestaurantPage
