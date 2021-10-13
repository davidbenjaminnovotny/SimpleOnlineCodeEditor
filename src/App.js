
import React from 'react'
import './App.css';


import Editor from './components/Editor'
import Navigation from './components/Navigation'
import Display from './components/Display'

import {javascriptOptions,xmlOptions,cssOptions} from './constants/EditorOptions.js'

import useLocalStorage from './hooks/UseLocalStorage.js'

function App() {
  // Are set to current contents of individual editor boxes
  const [htmlCode, setHtmlCode] = useLocalStorage('html');
  const [cssCode, setCssCode] = useLocalStorage('css');
  const [javascriptCode, setJavascriptCode] = useLocalStorage('js');

  // Final compilation 
  const [finalCode, setFinalCode] = React.useState('')

  // Child to parent data transfers
  const codeOut = (childData) => {
    switch(childData.type) {
      case "xml":
        setHtmlCode(childData.code)
        break;
      case "css":
        setCssCode(childData.code)
        break;
      case "javascript":
        setJavascriptCode(childData.code)
        break;
        default:
          console.log("no code")
    }
  }

// Timeout for paint after changes
React.useEffect(() => {
  const timeout = setTimeout(() => {
    if(htmlCode){
      setFinalCode(`
      <html>
        <style>${cssCode}</style>
        <body>
        ${htmlCode}
        <script>${javascriptCode}</script>
        </body>
      </html>
      `)
    }
  }, 550);
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
        codeExtract={codeOut}
        codeInput={htmlCode}
      />
           <Editor 
        className="editorComponent" 
        title={cssOptions.title} 
        mode={cssOptions.mode} 
        codeExtract={codeOut}
        codeInput={cssCode}
      />
          <Editor 
        className="editorComponent" 
        title={javascriptOptions.title} 
        mode={javascriptOptions.mode} 
        codeExtract={codeOut}
        codeInput={javascriptCode}
      />
       
      </div>
      <div className="pane bottom-pane">
        <Display 
        code={finalCode}
        />
      </div>
    </div>
  );
  
        
}

          
export default App;
