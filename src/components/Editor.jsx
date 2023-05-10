import React from "react";
import { useState } from "react";

function Editor(props) {
  const { text, changeText } = props;

  return (
    <div class="editor">
      <h1>Editor</h1>
      <textarea
        id="editor"
        class="editor"
        value={text}
        onChange={changeText}
      ></textarea>
    </div>
  );
}

export default Editor;
