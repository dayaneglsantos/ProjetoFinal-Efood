declare type RestaurantModel = {
  id: number
  title: string
  highlight: boolean
  type: string
  avaliation: string
  description: string
  cover: string
  menu: [
    {
      id: number
      img: string
      description: string
      price: number
      name: string
      portion: string
    }
  ]
}

declare type ModalState = {
  img: string
  isVisible: boolean
  description: string
  portion: string
  name: string
  price: number
  id: number
  quantity: number
}
