import {configureStore} from '@reduxjs/toolkit';
import reservationReducer from '../feautures/reservationSlice'
import customerReducer from '../feautures/customerSlice'

export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        customer: customerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch



