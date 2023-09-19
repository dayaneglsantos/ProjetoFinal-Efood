import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { Button } from '../Dishe/styles'
import { add, clear, close, remove, subtract } from '../../Store/Reducers/cart'
import { RootReducer } from '../../Store'
import { ModalState, formataPreco } from '../Dishe'

import { usePurchaseMutation } from '../../Services/api'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cartOpen, setCartOpen] = useState(true)
  const [deliveryOpen, setDeliveryOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      displayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'Mínimo de 5 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(10, 'Mínimo 10 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(4, 'Mínimo 4 caracteres')
        .required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'Mínimo 9 caracteres')
        .required('Campo obrigatório'),
      number: Yup.number()
        .required('Campo obrigatório')
        .min(2, 'Mínimo 2 caracteres')
        .max(4, 'Máximo 4 caracteres'),
      complement: Yup.string(),
      displayName: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cardCode: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (val) => {
      purchase({
        delivery: {
          receiver: val.receiver,
          address: {
            description: val.address,
            city: val.city,
            zipCode: val.zipCode,
            number: val.number,
            complement: val.complement
          }
        },
        payment: {
          card: {
            name: val.displayName,
            number: val.cardNumber,
            code: val.cardCode,
            expires: {
              month: val.expiresMonth,
              year: val.expiresYear
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.price,
          quantity: item.quantity
        }))
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const totalPrice = () => {
    return items.reduce((ac, item) => {
      return (ac += item.price * item.quantity)
    }, 0)
  }

  const checkErrorInput = (field: string) => {
    const invalid = field in form.errors
    const touched = field in form.touched
    const hasError = invalid && touched

    return hasError
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToDelivery = () => {
    setDeliveryOpen(true)
    setCartOpen(false)
  }

  const backToCart = () => {
    setDeliveryOpen(false)
    setCartOpen(true)
  }

  const goToPayment = () => {
    if (
      'receiver' in form.errors ||
      'address' in form.errors ||
      'city' in form.errors ||
      'zipCode' in form.errors ||
      'number' in form.errors
    ) {
      return
    } else {
      setPaymentOpen(true)
      setDeliveryOpen(false)
    }
  }

  const backToDelivery = () => {
    setPaymentOpen(false)
    setDeliveryOpen(true)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setPaymentOpen(false)
      setSuccessOpen(true)
    }
  }, [isSuccess, dispatch])

  const sumItem = (item: ModalState) => {
    dispatch(add(item))
  }

  const subtractItem = (id: number) => {
    dispatch(subtract(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Aside open={cartOpen}>
        {items.length === 0 ? (
          <p className="emptyCart">Não há itens no carrinho</p>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.img} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <S.NumberDishe>
                    <p>{formataPreco(item.price)}</p>
                    <div>
                      <button onClick={() => subtractItem(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          sumItem({
                            isVisible: true,
                            description: item.description,
                            img: item.img,
                            porcao: item.porcao,
                            name: item.name,
                            price: item.price,
                            id: item.id,
                            quantity: item.quantity + 1
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </S.NumberDishe>
                </div>
                <button onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
            <S.TotalPrice>
              <p>Valor Total:</p>
              <span>R$ {formataPreco(totalPrice())}</span>
            </S.TotalPrice>
            <Button onClick={goToDelivery}>Continuar com a entrega</Button>
          </>
        )}
      </S.Aside>
      <S.Aside open={deliveryOpen}>
        <S.Title>Entrega</S.Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkErrorInput('receiver') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkErrorInput('address') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkErrorInput('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup display="flex">
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99999-999"
                  className={checkErrorInput('zipCode') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="string"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkErrorInput('number') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkErrorInput('complement') ? 'error' : ''}
              />
            </S.InputGroup>
          </div>
          <Button onClick={goToPayment}>Continuar com pagamento</Button>
          <Button onClick={backToCart}>Voltar para o carrinho</Button>
        </form>
      </S.Aside>
      <S.Aside open={paymentOpen}>
        <S.Title>
          Pagamento - Valor a pagar {formataPreco(totalPrice())}
        </S.Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <S.InputGroup>
              <label htmlFor="displayName">Nome no Cartão</label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={form.values.displayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkErrorInput('displayName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup display="flex">
              <S.InputGroup maxWidth="228px;">
                <label htmlFor="cardNumber">Número no Cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                  className={checkErrorInput('cardNumber') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="88px">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                  className={checkErrorInput('cardCode') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                id="expiresMonth"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99"
                className={checkErrorInput('expiresMonth') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                type="text"
                id="expiresYear"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99"
                className={checkErrorInput('expiresYear') ? 'error' : ''}
              />
            </S.InputGroup>
          </div>
          <Button type="submit" onClick={() => form.handleSubmit}>
            Finalizar pagamento
          </Button>
          <Button onClick={backToDelivery}>
            Voltar para edição do endereço
          </Button>
        </form>
      </S.Aside>
      <S.Aside open={successOpen}>
        <S.Title>Pedido realizado - {data?.orderId}</S.Title>
        <S.P>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </S.P>
        <S.P>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.{' '}
        </S.P>
        <S.P>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.P>
        <S.P>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.P>
        <Button onClick={() => dispatch(close())}>Concluir</Button>
      </S.Aside>
    </S.CartContainer>
  )
}

export default Cart
