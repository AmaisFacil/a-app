import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import userReducer from "../reducers/user";
import recordReducer from "../reducers/record";

const rootReducer = combineReducers({
  user: userReducer,
  record: recordReducer
});

const persistConfig = {
    storage: AsyncStorage,
    whitelist: ["user", "record"],
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
