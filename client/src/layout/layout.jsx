import React from 'react'
import classes from './layout.module.css'
import { Link, NavLink, useHistory } from 'react-router-dom'

function Layout() {

    const history = useHistory()

    const pathName = history.location.pathname
    const isActive = _name_ => {
        return _name_ == pathName
    }

    const routes = [
        { pathName: '/', name: 'Camera Screen'},
        { pathName: '/form', name: 'Form Screen'},
        { pathName: '/map', name: 'Map Screen'}
    ]


    return (
        <div className={`bg-green-500 p-2`}>
            <button onClick={() => history.push('/')} className={`p-2 outline-none ${pathName == '/' ? 'text-white' : 'text-black'}`}>
                Camera Screen
            </button>
            <button onClick={() => history.push('/form')} className={`p-2 outline-none ${pathName == '/form' ? 'text-white' : 'text-black'}`}>
                Form Screen
            </button>
            <button  onClick={() => history.push('/map')} className={`p-2 outline-none ${pathName == '/map' ? 'text-white' : 'text-black'}`}>
                MapScreen
            </button>
        </div>
    )
}


export default Layout


