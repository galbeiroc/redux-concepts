const BUY_CAKE = 'BUY_CAKE';

//Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

//(previousState, action) => newState
const initialState = {
  numberOfCakes: 10
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      }
    default:
      return state
  }
}