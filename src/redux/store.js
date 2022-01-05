import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./reducer";

export default configureStore({
  reducer: {
    film: filmReducer,
  },
});
