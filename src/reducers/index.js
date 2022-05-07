import authReducer from './auth.reducers';
import userReducer from './user.reducer';
import productReducer from './product.reducer';



import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,

    product: productReducer

});

export default rootReducer;