
import React from 'react'
import '../App.css'


const Navigation = () => {


    return (
        <div className="Navigation">
            <div className="Navigation_logo">
                <h1>KODEKTOR <sup className="Navigation_logo_sup">simple. code.</sup></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <button>Refresh</button>
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