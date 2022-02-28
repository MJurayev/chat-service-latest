import { useEffect } from "react"
import { useStore } from "../../store/StoreProvider"
import messageAction from '../../store/actions/message.actions'

import "./Chat.css"
export default function Chat() {
    const [state, dispatch] = useStore()
    useEffect(() => {
        dispatch(messageAction.loadingStart())
        console.log(state)
    }, [])
    return (
        <div className="defaultChat">
            <span className="defaultChat__content">
                Assalomu Alaykum Bizning Chatimizga xush kelibsiz!!!
            </span>
        </div>
    )
}
