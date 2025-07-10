import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";
import priceFilterReducer from "./priceSlice";
import suggestionReducer from "./suggestionSlice";
import favoriteReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
    priceFilter: priceFilterReducer,
    suggestion: suggestionReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
