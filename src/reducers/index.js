import { combineReducers } from 'redux';

import cardData from './cardDataReducer';
import empList from './empListReducer';

const rootReducer = combineReducers({
  cardData: cardData,
  empList: empList
})

export default rootReducer;