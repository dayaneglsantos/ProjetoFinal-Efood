import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantPage from './pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
