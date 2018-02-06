import { FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //method concat creates a new array instead of manipulating the current
    //array
      return state.concat([ action.payload.data ]);

  }

  return state;
}
