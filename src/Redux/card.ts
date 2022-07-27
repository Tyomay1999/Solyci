import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type data = {
    id: string,
    number: number
}

interface CardState {
    data: data[] | []
}

const initialState: CardState = {
    data: []
}

const slice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        setCardData: (state: CardState, action: PayloadAction<data | data[]>) => {
            if (Array.isArray(action.payload)) {
                state.data = action.payload
            } else {
                state.data[state.data.length] = action.payload
            }
        },
        deleteCard: (state: CardState, action: PayloadAction<string>) => {
            state.data = state.data.filter((elem: data) => elem.id !== action.payload)
        },
        sortCard: (state: CardState) => {
            state.data = state.data.sort((elem_1: data, elem_2: data) => elem_1.number - elem_2.number)
        }
    }
})

export const {setCardData, deleteCard, sortCard} = slice.actions
export default slice.reducer