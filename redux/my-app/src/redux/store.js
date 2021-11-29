import { createStore } from 'redux' //createStore is used to create store object
import reducer from './reducer'

export default createStore(reducer)