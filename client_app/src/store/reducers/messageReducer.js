import { MESSAGE_LOADING_FAIL, MESSAGE_LOADING_START, MESSAGE_LOADING_SUCCESS } from '../constants/message.constants'
export const messageState = {
    isLoading: false,
    error: null,
    messages: [
    ]
}
const reducer = (state, action) => {
    switch (action.type) {
        case MESSAGE_LOADING_START: return { ...state, isLoading: true }; break;
        case MESSAGE_LOADING_SUCCESS: return { ...state, isLoading: false, messages: action.payload }; break;
        case MESSAGE_LOADING_FAIL: return { ...state, isLoading: false, error: action.payload }; break;
    }
}
export default reducer