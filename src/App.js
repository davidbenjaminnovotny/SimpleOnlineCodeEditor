
import React from 'react'
import './App.css';


import Editor from './components/Editor'

function App() {
  const xml = {
    title:"Html",
    mode: "xml"
  }
  const css = {
    title:"Css",
    mode: "css"
  }
  const javascript = {
    title:"Javascript",
    mode: "javascript"
  }
  
  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor className="editorComponent" title={xml.title} mode={xml.mode}/>
        <Editor className="editorComponent" title={css.title} mode={css.mode}/>
        <Editor className="editorComponent" title={javascript.title} mode={javascript.mode}/>
      </div>
      <div className="pane bottom-pane">
     
        
      </div>
    </div>
  );
  
        
}

          
export default App;
