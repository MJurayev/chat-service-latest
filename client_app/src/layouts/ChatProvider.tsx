import React, { Component, createContext, createRef, ReactElement, Ref, RefObject, SetStateAction, useContext, useState } from 'react'


export const MessagesAllContext = createContext<RefObject<HTMLDivElement>>(undefined!)

export default function ChatProvider({children}: {children:ReactElement}) {
    const messageAreaRef:RefObject<HTMLDivElement>|undefined = createRef()
    // const [state, setState] = useState<Ref<any>>(messageAreaRef)
    // const store:IChatContextProvider = {
    //     state,
    //     setState
    // }
   
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
