import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const stories = [
  {
    title: "React",
    url: "https://www.typescriptlang.org/docs/handbook/gulp.html",
    author: "Jodan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://www.typescriptlang.org/docs/handbook/gulp.html",
    author: "Annette Dev",
    num_comments: 5,
    points: 41,
    objectID: 1
  }
];

ReactDOM.render(
  <App
    stories={stories}
    onArchive={objectID => {
      console.log(objectID);
    }}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
