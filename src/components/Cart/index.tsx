import { Aside, CartContainer, CartItem, Overlay, TotalPrice } from './styles'
import { Button } from '../Dishe/styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../Store/Reducers/cart'
import { RootReducer } from '../../Store'
import { formataPreco } from '../Dishe'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const totalPrice = () => {
    return items.reduce((ac, item) => {
      return (ac += item.price)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'open' : ''}>
      <Overlay onClick={closeCart} />
      <Aside>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.img} alt="" />
            <div>
              <h3>{item.name}</h3>
              <p>{formataPreco(item.price)}</p>
            </div>
            <button onClick={() => removeItem(item.id)} />
          </CartItem>
        ))}
        <TotalPrice>
          <p>Valor Total:</p>
          <span>R$ {formataPreco(totalPrice())}</span>
        </TotalPrice>
        <Button>Continuar com a entrega</Button>
      </Aside>
    </CartContainer>
  )
}

export default Cart
