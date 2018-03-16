import { combineReducers } from 'redux';
import { songlist , getsong } from "../pages/Tech/techReducer"

const rootReducers = combineReducers({
    songlist,
    getsong,
})

export default rootReducers;