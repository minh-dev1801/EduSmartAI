import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";
import priceFilterReducer from "./priceSlice";
import suggestionReducer from "./suggestionSlice";
import favoriteReducer from "./favoriteSlice";
import historyReducer from "./historySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
    priceFilter: priceFilterReducer,
    suggestion: suggestionReducer,
    favorite: favoriteReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
