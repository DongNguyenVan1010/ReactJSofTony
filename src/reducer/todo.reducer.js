
// CONSTANST
const ADD_TODO = 'TODO/ADD_TODO';
const SHOW_LOADING = 'TODO/SHOW_LOADING';
const HIDE_LOADING = 'TODO/HIDE_LOADING';
const SHOW_ERROR = 'TODO/SHOW_ERROR';

// initialState
export const initialState = {
  todo: [],
  isLoading: false,
  error: null
}

// action creator
export function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: data
  }
}

export function showLoading() {
  return {
    type: SHOW_LOADING
  }
}

export function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}

export function showError(payload) {
  return {
    type: SHOW_ERROR,
    payload
  }
}

export function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      }
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
    case SHOW_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    default:
      return state
  }
}