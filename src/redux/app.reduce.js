import * as appAction from './app.action'
;
const initialState = {
  isLoading: false,
  status: null,
  modalError: {
    isShow: false,
    title: null,
    content: null
  }
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case appAction.SET_LOADING: {
      return {
        ...state,
        isLoading: payload
      }
    }
    case appAction.SET_STATUS: {
      return {
        ...state,
        status: payload
      }
    }
    default:
      return state;
  }
}