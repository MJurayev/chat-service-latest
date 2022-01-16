import React, {  createContext, createRef} from 'react'


export const MessagesAllContext = createContext()

export default function ChatProvider({children}) {
    const messageAreaRef= createRef()
    return (
        <MessagesAllContext.Provider value={messageAreaRef}>
            <MessagesAllContext.Consumer>
                {
                    () => children
                }
            </MessagesAllContext.Consumer>
        </MessagesAllContext.Provider>
    )
}
