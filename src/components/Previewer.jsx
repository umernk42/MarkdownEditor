import React from "react";
import Markdown from "marked-react";

function Previewer({ text }) {
  return (
    <div id="preview" class="preview">
      <h1 class="heading">Previewer</h1>
      <div class = "markdown">
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
}

export default Previewer;
