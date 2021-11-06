import {configureStore} from '@reduxjs/toolkit';
import reservationReducer from '../feautures/reservationSlice'

export const store = configureStore({
    reducer: {
        reservations: reservationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch



