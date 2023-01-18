import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: [
    {
      id: 0
    }
  ]
}

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert(state, action) {
      state.alerts.push({id: 2})
    },
    removeAlert(state, action) {

    }
  }
});


const store = configureStore({
  reducer:  alertsSlice.reducer,
});

export const alertsActions = alertsSlice.actions;
export default store;
