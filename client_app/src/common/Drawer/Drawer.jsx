import React from 'react'
import { useDrawer } from '../../layouts/DrawerProvider'
import './Drawer.css'
export default function Drawer({isVisible = false, children}) {
    const [isOpen, setIsOpen] = useDrawer()
    return (
        <div onClick={() => {setIsOpen(state=>!state)}} className={`drawer ${isOpen ? `drawer--open` : ''}` }>
            <div className='drawer__items'>
                profile
            </div>
        </div>
    )
}
