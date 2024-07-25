import React, { useState } from "react";

function App() {
  const [text, setText] = useState("something");
  const handleClick = () => {
    return text === "something" ? setText("nothing") : setText("something");
  };
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}

export default App;
