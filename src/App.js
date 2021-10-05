
import React from 'react'
import './App.css';


import Editor from './components/Editor'

function App() {
  
  const [htmlCode, setHtmlCode] = React.useState('');
  const [cssCode, setCssCode] = React.useState('');
  const [javascriptCode, setJavascriptCode] = React.useState('');

  const htmlPull = (childData) => {
        setHtmlCode(childData)
  }
  const cssPull = (childData) => {
    setCssCode(childData)
}
const javascriptPull = (childData) => {
  setJavascriptCode(childData)
}
let srcDoc = `
<html>
  <style>${cssCode}</style>
  <body>
  ${htmlCode}
  <script>${javascriptCode}</script>
  </body>
 

</html>
`

React.useEffect(() => {
  const timeout = setTimeout(() => {
  
  }, 250);

  return () => clearTimeout(timeout);
}, [htmlCode, cssCode, javascriptCode]);

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
        <Editor 
        className="editorComponent" 
        title={xml.title} 
        mode={xml.mode} 
        childToParent={htmlPull}
        />
        <Editor 
        className="editorComponent" 
        title={css.title} 
        mode={css.mode} 
        childToParent={cssPull}
        />
        <Editor 
        className="editorComponent" 
        title={javascript.title} 
        mode={javascript.mode} 
        childToParent={javascriptPull}
        />
      </div>
      <div className="pane bottom-pane">
         <iframe
         title={'SandBox'}
         height={'auto'}
         width={'100%'}
          srcDoc={srcDoc}
        ></iframe>
      </div>
    </div>
  );
  
        
}

          
export default App;
