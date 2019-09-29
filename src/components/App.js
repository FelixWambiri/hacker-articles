import React from "react";
import "./App.css";

/** Components**/
import Stories from "./Stories";

const App = ({ stories, onArchive }) => {
  return (
    <div className="app">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
};

export default App;
