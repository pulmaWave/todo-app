import React from "react";
import { Input } from "reactstrap";
import "./index.scss";

const Task = (props) => {
  // const [cbTask, setTask] = useState(props.item.status);

  return (
    <div className="task">
      <div className="checkbox">
        <Input
          type="checkbox"
          className="checkbox-input"
          checked={props.item.status}
          onChange={(e) => {
            props.onChangeCB(props.item.name, props.item.id);
          }}
        />
      </div>
      <div className="span">
        <span>{props.item.name}</span>
      </div>
    </div>
  );
};

export default Task;
