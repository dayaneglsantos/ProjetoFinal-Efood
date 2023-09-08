import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ModalState } from '../../components/Dishe'

type CartState = {
  items: ModalState[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ModalState>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
