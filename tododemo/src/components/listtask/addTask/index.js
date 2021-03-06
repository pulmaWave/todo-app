import React, { useState } from "react";
import { Input } from "reactstrap";
import "./index.scss";

const AddTask = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="body-addTask">
      <div
        className="addTask"
        onClick={() => {
          if (text==='')
          alert('fill to add the task');
          else
               props.addABC9(text);

          }
          
        }
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-plus"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          fontSize="xx-large"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </div>
      <div className="input">
        <Input
          placeholder="Add a task"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddTask;
