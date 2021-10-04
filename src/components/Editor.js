import React from 'react'
import '../App.css'

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import {Controlled as CodeMirror} from 'react-codemirror2'


function Editor() {
    const options = {
       
        mode: 'material',
        lineNumbers: true,
        lineWrapping: true,
        showCursorWhenSelecting: true,   
        // allowDropFileTypes: ['image/png']
        // hintOptions related keys
        alignWithWord: true,
        spellcheck: true,
       
      };
  return (
    <div className="Editor">
        <div className="EditorHeader">
            <button className="EditorHeader_Resize">Resize</button>
        </div>
<CodeMirror
    options={options}
  onBeforeChange={(editor, data, value) => {
    console.log("hello")
  }}
  onChange={(editor, data, value) => {
  }}
/>

    </div>
  );
}

export default Editor;
