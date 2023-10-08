import { useState } from "react";
import { marked } from "marked";

import "./app.css";
function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  [GitHub](https://github.com/CharithaSaranga)
\`Inline code\`

	 \` \` \`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
 \` \` \`

- First item
- Second item
- Third item

> blockquote

![Vite](/vite.svg)

	**bold text**

  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="app">
      <textarea
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        className="editor p-2 rounded border focus:border-blue-500"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
      <div className="preview p-4 bg-white border rounded" id="preview">
        <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>
    </div>
  );
}

export default App;
