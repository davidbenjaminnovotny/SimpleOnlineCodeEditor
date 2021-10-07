
import React from 'react'
import '../App.css'


const Display = ({code}) => {

    return (
        <div className="Display">
            <iframe
                title={'SandBox'}
                height={'100%'}
                width={'100%'}
                srcDoc={code}
            ></iframe>
        </div>
    )
}

export default Display