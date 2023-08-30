import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantsList from '../../components/RestautantsList'
import List from './list'

const Home = () => (
  <>
    <Header />
    <RestaurantsList restautants={List} />
    <Footer />
  </>
)

export default Home
