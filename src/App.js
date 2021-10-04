
import React from 'react'
import './App.css';

import Editor from './components/Editor'

function App() {
  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor className="editorComponent"/>
        <Editor className="editorComponent"/>
        <Editor className="editorComponent"/>
      </div>
      <div className="pane bottom-pane">
     
        
      </div>
    </div>
  );
  
        
}

          
export default App;
