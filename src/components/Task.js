import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ task, deleteTaskProps2,onToggle }) => {
  //

  return (
    <div onDoubleClick={()=>onToggle(task.id)}
     className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <AiFillDelete
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTaskProps2(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
