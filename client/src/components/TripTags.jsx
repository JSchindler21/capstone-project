import { useState } from "react";
import styled from "styled-components";

function TripTags({ tags, onUpdateTags, onDeleteTag }) {
  const [tagInput, setTagInput] = useState("");

  const handleChange = (event) => {
    const tagInputValue = event.target.value;
    setTagInput(tagInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onUpdateTags(tagInput.toUpperCase());
      setTagInput("");
    }
    if (event.key === "Backspace" && tagInput === "" && tags.length > 0) {
      onDeleteTag(tags[tags.length - 1]);
    }
  };

  return (
    <container>
      <label htmlFor="tags">Tags</label>
      <div>
        {tags.map((tag, index) => (
          <Tag>
            {tag}{" "}
            <span
              key={index}
              onClick={(event) => {
                onDeleteTag(tag, event);
              }}
            >
              &times;
            </span>
          </Tag>
        ))}
        <input
          type="text"
          name="tags"
          id="Tags"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={tagInput}
          placeholder="...."
        />
      </div>
    </container>
  );
}

export default TripTags;

const Tag = styled.span`
  background: #062424 100%;
  border-radius: 0.5rem;
  color: #fcec95;
  margin: 0.5rem;
  padding: 0.3rem;
`;
