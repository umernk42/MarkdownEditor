import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import initialText from "./assets/initialText";

function App() {
  const [text,setText] = useState(initialText);  
  const changeText = (e) => {
      setText(e.target.value);
    }

    console.log(initialText);

  return (
  
    <>
    <main>
      <Editor text = {text} changeText = {changeText}/>
        <br />
      <Previewer text = {text} />
      </main>
    </>
  );
}

export default App;
