import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function information(emojiproperty) {
  return (
    <Entry
      key={emojiproperty.id}
      emoji={emojiproperty.emoji}
      name={emojiproperty.name}
      meaning={emojiproperty.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(information)}
      </dl>
    </div>
  );
}

export default App;
