import {combineReducers} from 'redux'

import candidatesReducer from "./candidates/candidates.reducers"

const rootReducer = combineReducers({
    candidates: candidatesReducer,
})

export default rootReducer