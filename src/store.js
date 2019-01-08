// 1. Setup Files and Folders
// 2. Use {createStore, combineReducers}
import { createStore, combineReducers } from 'redux'

// 4. Import reducer file and create reducer function in the file
import colors from './reducers/colors'
const reducers = combineReducers({ colors })

// 3. create reducer fn's
export default createStore(reducers)

/*
 5. import and test store.js in your app's index.js store.getState()
 6. import your action/color.js constants and add case to reducer/color.js
 7. import {Provider} from react-redux in your app's index.js and pass store into it
 8. import { connect } from 'react-redux' in your component files - this also connects the state of your App.js directly to every component
*/
