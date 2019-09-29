import React from "react";
import "./Stories.css";
import { inject, observer } from "mobx-react";

/** Components**/
import Story from "./Story";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%"
  },
  author: {
    label: "Author",
    width: "30%"
  },
  comments: {
    label: " Comments",
    width: "10%"
  },
  points: {
    label: "Points",
    width: "10%"
  },
  archive: {
    width: "10%"
  }
};

const Stories = ({ storyStore }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {storyStore.error && <p className="error">Something went wrong...</p>}
      {storyStore.readableStories.map(story => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  );
};

const StoriesHeader = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(columns).map(key => {
        return (
          <span key={key} style={{ width: columns[key].width }}>
            {columns[key].label}
          </span>
        );
      })}
    </div>
  );
};

export default inject("storyStore")(observer(Stories));
