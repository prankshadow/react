import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function information(emojipedia) {
  return (
    <Card 
      emoji = {emojipedia.emoji}
      name = {emojipedia.name}
      meaning = {emojipedia.meaning}
    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        
    </div>
  );
}

export default App;
