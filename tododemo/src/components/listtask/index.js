import React, { useState } from "react";
import AddTask from "./addTask/index";
import Task from "./task";
import "./index.scss";
import { cloneDeep } from "lodash";

const listTask = [];

const ListTask = (props) => {
  const [abc, setAbc] = useState(listTask);

  const addABC9 = (text) => {
    let fruits = cloneDeep(abc);
    fruits.push({ id: Math.random(), name: text, status: false });
    setAbc(fruits);
  };

  const onChangeCB = (item, id) => {
    let fruits = cloneDeep(abc);
    fruits.map((item, index) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
    setAbc(fruits);
  };

  const taskCompleted = () => {
    const result = [];
    abc.map((item, index) => {
      if (item.status === true) {
        result.push(item);
      }
    });
    return result;
  };

  return (
    <div>
      <AddTask addABC9={addABC9} />
      <div className="reverse">
        {abc.map((taskItem, index) => {
          if (taskItem.status === false)
            return <Task item={taskItem} key={index} onChangeCB={onChangeCB} />;
        })}
      </div>
      <div>Task Complete</div>
      <div className="reverse">
        {abc.map((taskItem, index) => {
          if (taskItem.status === true)
            return <Task item={taskItem} key={index} onChangeCB={onChangeCB} />;
        })}
      </div>
    </div>
  );
};

export default ListTask;
