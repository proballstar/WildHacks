import React from 'react'
import classes from './layout.module.css'
import { Link, NavLink, useHistory } from 'react-router-dom'

function Layout() {

    const history = useHistory()

    const pathName = history.location.pathname
    const isActive = _name_ => {
        return _name_ == pathName
    }

    isActive('/form')
    
    isActive('/map')

    return (
        <div className={`bg-green-500 p-2`}>
            <button className={`p-2 outline-none`}>Camera Screen</button>
            <button className={`p-2 outline-none`}>Form Screen</button>
            <button className={`p-2 outline-none`}>MapScreen</button>
        </div>
    )
}


export default Layout


