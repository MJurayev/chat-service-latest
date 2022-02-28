import { MESSAGE_LOADING_FAIL, MESSAGE_LOADING_START, MESSAGE_LOADING_SUCCESS } from "../constants/message.constants"

export default {
    loadingStart:() => {
        return {type:MESSAGE_LOADING_START}
    },
    loadingFail:(error) => {
        return {type:MESSAGE_LOADING_FAIL, payload:error}
    },
    loadingSuccess:(messages) => {
        return {type:MESSAGE_LOADING_SUCCESS, payload:messages}
    }
}

