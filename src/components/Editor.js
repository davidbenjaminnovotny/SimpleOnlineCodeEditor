
import React from 'react'
import '../App.css'

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";





import { Controlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');



function Editor({title,mode, childToParent}) {
    const [code, setCode] = React.useState('');
   
   

    const options = {
        mode: mode,
        theme: 'material',
        lineNumbers: true,
        lineWrapping: true,
        showCursorWhenSelecting: true,
        alignWithWord: true,
        spellcheck: true,

    };

    return (
        <div className="Editor">
            <div className="EditorHeader">
            <h1 className="EditorHeader_Title">{title}</h1>
                <button className="EditorHeader_Resize">Resize</button>
            
            </div>
            <CodeMirror
                value={code}
                options={options}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
                onChange={(editor, data, value) => {
                    childToParent(value)
                }}
            />

        </div>
    );
}

export default Editor;
