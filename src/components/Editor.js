
import React from 'react'
import '../App.css'

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { Controlled as CodeMirror } from 'react-codemirror2'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');



function Editor({ title, mode, codeExtract, codeInput }) {
    const [code, setCode] = React.useState(codeInput === undefined ? "" : codeInput);
   


    const options = {
        mode: mode,
        theme: 'material',
        lineNumbers: true,
        lineWrapping: true,
        showCursorWhenSelecting: true,
        alignWithWord: true,
        spellcheck: true,
        autocorrenct: true,

    };

    return (
        <div className="Editor">
            <div className="EditorHeader">
                <div className="EditorHeader_TitleContainer">
                    <h1 className="EditorHeader_Title">{title}</h1>
                </div>
                <div>
                    <button className="EditorHeader_button EditorHeader_Resize">Resize</button>
                </div>
            </div>

            <CodeMirror
                value={code}
                options={options}
                className="EditorConsole"
                onBeforeChange={(editor, data, value) => {
                    setCode(value);

                }}
                onChange={(editor, data, value) => {
                    codeExtract({ code: value, type: mode })
                }}
            />

        </div>
    );
}

export default Editor;
