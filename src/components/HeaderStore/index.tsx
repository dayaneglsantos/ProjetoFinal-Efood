import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { open } from '../../Store/Reducers/cart'

const HeaderStore = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <S.HeaderContainer>
      <S.SectionTitle>Restaurantes</S.SectionTitle>
      <Link to={'/'}>
        <img src={logo} alt="Logo Efood" />
      </Link>
      <S.CartItems role="button" onClick={() => dispatch(open())}>
        {items.length} produto(s) no carrinho
      </S.CartItems>
    </S.HeaderContainer>
  )
}
export default HeaderStore
