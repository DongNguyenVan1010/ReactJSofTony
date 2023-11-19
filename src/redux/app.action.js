export const SET_LOADING = 'APP/SET_LOADING';
export const SET_STATUS = 'APP/SET_STATUS';
export const SHOW_MODAL_ERROR = 'APP/SHOW_MODAL_ERROR';

export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

export const setStatus = payload => ({
  type: SET_STATUS,
  payload
})

export const showModalError = (payload = {}) => ({
  type: SET_STATUS,
  payload: {
    isShow: payload.isShow,
    title: payload.title,
    content: payload.content
  }
})