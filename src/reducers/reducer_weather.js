import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action) {
  switch(action.type) {
    case FETCH_WEATHER :
      //return state.concat([action.payload.data]);
      // ... is a ES6 syntax will keep on adding payload.data ex. [city, city, city]
      return [ action.payload.data, ...state ];

  }
  console.log(action.type);
  console.log(action.payload);
  return state;
}