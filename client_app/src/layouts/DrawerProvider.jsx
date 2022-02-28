import React, {  createContext, createRef, useState} from 'react'
import { useContext } from 'react'


export const Context = createContext()

export default function DrawerProvider({children}) {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <Context.Provider value={{isOpen, setIsOpen}}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}
const useDrawer =(setterOnly) => {
    const {isOpen, setIsOpen} = useContext(Context)
    return setterOnly ? [setIsOpen] : [isOpen, setIsOpen]
}

export {useDrawer}