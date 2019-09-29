import React from "react";
import "./Story.css";
import { inject, observer } from "mobx-react";

/**Components**/
import { ButtonInline } from "./Button";

const Story = ({ story, columns, archiveStore }) => {
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
        <ButtonInline onClick={() => archiveStore.archiveStory(objectID)}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
};

export default inject("archiveStore")(observer(Story));
