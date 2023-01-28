const { createStore } = require("redux");

// 0. constant
const INC = "INC";
const DEC = "DEC";
const INCBYVALUE = "INCBYVALUE";
const DECBYVALUE = "DECBYVALUE";
// 1. state
const allCounterState = {
  count: 0,
  count2: 3,
};
// 2. action
// -type
const incCount = () => {
  return { type: INC };
};
const decCount = () => {
  return { type: DEC };
};
 
const incCountByValue = (value) => {
    return { type: INCBYVALUE , payload:value};
  };
  const decCountByValue = (value) => {
    return { type: DECBYVALUE, payload:value };
  };
// -payload
// 3. reducer
const counterReducer = (state = allCounterState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + 1,
        count2: state.count2 + 1,
      };
    case DEC:
      return {
        ...state,
        count: state.count - 1,
        count2: state.count2 - 1,
      };
      case INCBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
        count2: state.count2 + action.payload,
      };
      case DECBYVALUE:
      return {
        ...state,
        count: state.count - action.payload,
        count2: state.count2 - action.payload,
      };

    default:
      return state;
  }
};

// 4. store

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(incCount());
store.dispatch(decCount());
store.dispatch(incCountByValue(3));
store.dispatch(decCountByValue(2));
