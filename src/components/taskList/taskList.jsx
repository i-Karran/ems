import React from "react";
import AcceptTask from "./acceptTask";
import NewTask from "./newTask";
import CompleteTask from "./completeTask";
import FailedTask from "./failedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5 overflow-x-auto"
    >
      {data.tasks.map((elem,idx) => {
        if(elem.active){
          return <AcceptTask key={idx}/>
        }else if(elem.newTask){
          return <NewTask key={idx} />
        }else if(elem.completed){
          return <CompleteTask key={idx} />
        }else if(elem.failed){
          return <FailedTask key={idx} />
        }else{
          return 'There is no Pending Task here'
        }
      })}
    </div>
  );
};

export default TaskList;
