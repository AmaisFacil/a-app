import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import classReducer from "../reducers/class.js";
import menuReducer from "../reducers/menu.js";
import warnReducer from "../reducers/warn.js";
import sacReducer from "../reducers/sac.js";
import userReducer from "../reducers/user";

const rootReducer = combineReducers({
  class: classReducer,
  menu: menuReducer,
  warn: warnReducer,
  user: userReducer,
  sac: sacReducer,
});

const persistConfig = {
    storage: AsyncStorage,
    whitelist: ["user"],
    key: "root",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
