import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import travelersApi from "./src/services/travelers";

const store = configureStore({
  reducer: {
    [travelersApi.reducerPath]: travelersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(travelersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
