import React from "react";
import "./Story.css";

/**Components**/
import { ButtonInline } from "./Button";

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = story;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(objectID)}>Archive</ButtonInline>
      </span>
    </div>
  );
};

export default Story;
