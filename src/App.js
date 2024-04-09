import MyRoute from "./MyRoute";
import './App.css'
import cartReducer from "./Redux/Reducers/cartReducer";
import {legacy_createStore} from'redux' // it helps compiler to know that any reducer is a store.
import { Provider } from "react-redux"; // it  helps to provide data from reducer to components.
import store from "./store";

function App() {

  // const store =legacy_createStore(cartReducer)

  return (
    <Provider store={store}>

  <MyRoute/>

    </Provider>
  );
}

export default App;
