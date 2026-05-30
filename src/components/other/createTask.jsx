import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    const data = userData
    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }
    });
   setUserData(data)
   console.log(data)

    setTaskTitle("");
    setCategory("");
    setTaskDate("");
    setAssignTo("");
    setTaskDescription("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rouded outline-none  border-1px bg-[#5d5858] border-gray-400 mb-4"
              type="text"
              placeholder="Enter the Task Title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-[#5d5858] border-1px border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-[#5d5858] border-1px border-gray-400 mb-4"
              type="text"
              placeholder="Employer Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={setCategory}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-[#5d5858] border-1px border-gray-400 mb-4"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-[#5d5858] border-1px border-gray-400"
            name=""
            id=""
          ></textarea>
          <button
            onSubmit={submitHandler}
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full "
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
