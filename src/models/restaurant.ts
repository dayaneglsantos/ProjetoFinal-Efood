class Store {
  id: number
  name: string
  image: string
  description: string
  avaliation: string
  typeFood: string
  highlight: boolean

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    avaliation: string,
    typeFood: string,
    highlight: boolean
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.avaliation = avaliation
    this.typeFood = typeFood
    this.highlight = highlight
  }
}

export default Store
