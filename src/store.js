import { combineReducers, legacy_createStore} from 'redux'
import cartReducer from './Redux/Reducers/cartReducer'
import studentReducer from './Redux/Reducers/studentReducer'

const reducers =combineReducers({
    cart: cartReducer,
    student:studentReducer
})
const store = legacy_createStore(reducers)
export default store


