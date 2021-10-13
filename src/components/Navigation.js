
import React from 'react'
import '../App.css'

import clearLocalStorage from '../hooks/ClearLocalStorage'


const Navigation = () => {


    return (
        <div className="Navigation">
            <div className="Navigation_logo">
                <h1>Simple Code Editor</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <button onClick={clearLocalStorage} >Reset</button>
                    </li>
                    <li>
                        <button>Settings</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation 