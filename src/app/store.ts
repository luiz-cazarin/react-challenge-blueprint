import { configureStore, createSlice } from '@reduxjs/toolkit';
import { data } from './DATA'
const initialState = {
  alerts: data
}

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert(state, action) {
    },
    removeAlert(state, action) {
    }
  }
});


const store = configureStore({
  reducer: { alerts: alertsSlice.reducer },
});

export const alertsActions = alertsSlice.actions;
export default store;
