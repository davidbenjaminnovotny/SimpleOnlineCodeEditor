
import React from 'react'
import './App.css';


import Editor from './components/Editor'
import Navigation from './components/Navigation'
import Display from './components/Display'

import {cssOptions, xmlOptions, javascriptOptions} from './constants/EditorOptions.js'

function App() {
  // Are set to current contents of individual editor boxes
  const [htmlCode, setHtmlCode] = React.useState('');
  const [cssCode, setCssCode] = React.useState('');
  const [javascriptCode, setJavascriptCode] = React.useState('');

  // Final compilation 
  const [finalCode, setFinalCode] = React.useState('')

  // Child to parent data transfers
  const htmlPull = (childData) => {
        setHtmlCode(childData)
  }
  const cssPull = (childData) => {
      setCssCode(childData)
  }
  const javascriptPull = (childData) => {
    setJavascriptCode(childData)
  }

// Timeout for paint after changes
React.useEffect(() => {
  const timeout = setTimeout(() => {
    setFinalCode(`
    <html>
      <style>${cssCode}</style>
      <body>
      ${htmlCode}
      <script>${javascriptCode}</script>
      </body>
    </html>
    `)
  }, 250);
  return () => clearTimeout(timeout);
}, [htmlCode, cssCode, javascriptCode]);


  return (
    <div className="App">
      <Navigation/>
      <div className="pane top-pane">
        <Editor 
          className="editorComponent" 
          title={xmlOptions.title} 
          mode={xmlOptions.mode} 
          childToParent={htmlPull}
        />
        <Editor 
          className="editorComponent" 
          title={cssOptions.title} 
          mode={cssOptions.mode} 
          childToParent={cssPull}
        />
        <Editor 
          className="editorComponent" 
          title={javascriptOptions.title} 
          mode={javascriptOptions.mode} 
          childToParent={javascriptPull}
        />
      </div>
      <div className="pane bottom-pane">
        <Display 
        
        />
      </div>
    </div>
  );
  
        
}

          
export default App;
