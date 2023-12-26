import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
// import accountReducer from './account';
// import userManagementReducer from './usermanagement';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // account: accountReducer,
    // userManagement: userManagementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
