import { useState } from 'react'
import {
  Button,
  DisheCard,
  DisheDescription,
  DisheName,
  Modal,
  ModalContainer
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../Store/Reducers/cart'

type Props = {
  name: string
  description: string
  image: string
  porcao: string
  price: number
  id: number
}

export type ModalState = {
  img: string
  isVisible: boolean
  description: string
  porcao: string
  name: string
  price: number
  id: number
  quantity: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const Dishe = ({ description, name, image, porcao, price, id }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    img: '',
    description: '',
    porcao: '',
    name: '',
    price: 0,
    id: 0,
    quantity: 0
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 173) {
      return descricao.slice(0, 173) + '...'
    }
    return descricao
  }

  const addtoCart = () => {
    setModal({
      isVisible: false,
      img: '',
      description: '',
      porcao: '',
      name: '',
      price: 0,
      id: 0,
      quantity: 0
    })

    dispatch(add(modal))
    dispatch(open())
  }

  return (
    <>
      <DisheCard>
        <img src={image} alt={name} />
        <DisheName>{name}</DisheName>
        <DisheDescription>{getDescricao(description)}</DisheDescription>
        <Button
          onClick={() =>
            setModal({
              isVisible: true,
              description: description,
              img: image,
              porcao: porcao,
              name: name,
              price: price,
              id: id,
              quantity: 1
            })
          }
        >
          Adicionar ao carrinho
        </Button>
      </DisheCard>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContainer className="container">
          <img src={modal.img} alt={name} />
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{porcao}</p>
            <Button onClick={() => addtoCart()}>
              Adicionar ao carrinho - {formataPreco(price)}
            </Button>
          </div>
        </ModalContainer>
        <div
          className="overlay"
          onClick={() =>
            setModal({
              isVisible: false,
              img: '',
              description: '',
              porcao: '',
              name: '',
              price: 0,
              id: 0,
              quantity: 0
            })
          }
        ></div>
      </Modal>
    </>
  )
}

export default Dishe
