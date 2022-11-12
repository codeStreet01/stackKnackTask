import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import  Reducers  from "./Reducers";
import thunk from 'redux-thunk';

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;