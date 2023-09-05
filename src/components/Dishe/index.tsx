import { useState } from 'react'
import {
  Button,
  DisheCard,
  DisheDescription,
  DisheName,
  Modal,
  ModalContainer
} from './styles'

type Props = {
  name: string
  description: string
  image: string
  porcao: string
  price: number
}

type ModalState = {
  img: string
  isVisible: boolean
  description: string
  porcao: string
  name: string
  price: number
}

const Dishe = ({ description, name, image, porcao, price }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    img: '',
    description: '',
    porcao: '',
    name: '',
    price: 0
  })

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 173) {
      return descricao.slice(0, 173) + '...'
    }
    return descricao
  }

  return (
    <>
      <DisheCard>
        <img src={image} alt="Pizza" />
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
              price: price
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
            <Button>Adicionar ao carrinho - {formataPreco(price)}</Button>
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
              price: 0
            })
          }
        ></div>
      </Modal>
    </>
  )
}

export default Dishe
