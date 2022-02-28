import React from 'react'
import SideMenu from '../../components/DrawerProfile/SideMenu'
import { useDrawer } from '../../layouts/DrawerProvider'
import './Drawer.css'
export default function Drawer({isVisible = false, children}) {
    const [isOpen, setIsOpen] = useDrawer()
    return (
        <div  className={`drawer ${isOpen ? `drawer--open` : ''}` }>
            <div className={`drawer__items ${isOpen ? 'drawer__items--open' : ''}`}>
                <SideMenu />

            </div>
            <div onClick={() => {setIsOpen(state=>!state)}} className='drawer__closer'>

            </div>
        </div>
    )
}
