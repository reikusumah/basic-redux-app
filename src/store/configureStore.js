import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import listReducer from "./reducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeWithDevTools =
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  // karena reducer nanti akan banyak, maka
  // reducer perlu di combine dengan fungsi
  // combineReducers() dari redux
  const rootReducer = combineReducers({
    lists: listReducer,
  });

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  // configure store / create store (1)
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
