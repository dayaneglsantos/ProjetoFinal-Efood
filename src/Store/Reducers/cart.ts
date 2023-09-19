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
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingItem !== -1) {
        state.items[existingItem].quantity += 1
      } else {
        state.items.push(action.payload)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    },
    subtract: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (existingItem !== -1) {
        if (state.items[existingItem].quantity > 1) {
          state.items[existingItem].quantity -= 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
    }
  }
})

export const { add, open, close, remove, clear, subtract } = cartSlice.actions
export default cartSlice.reducer
