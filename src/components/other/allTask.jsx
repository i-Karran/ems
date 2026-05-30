import React, { useContext } from "react";
import { AuthContext } from "../../context/authProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded overflow-auto h-80">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">Active Task</h3>
        <h5 className="w-1/5 text-lg font-medium">New Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Complete Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed Task</h5>
      </div>
      <div className="overflow-auto h-80%">
        {userData.map(function (elem,idx) {
        return (
          <div key={idx} className="border-2 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
            <h3 className="w-1/5 text-lg font-medium">{elem.taskNumbers.active}</h3>
            <h5 className="w-1/5 text-lg font-medium">{elem.taskNumbers.newTask}</h5>
            <h5 className="w-1/5 text-lg font-medium">{elem.taskNumbers.completed}</h5>
            <h5 className="w-1/5 text-lg font-medium">{elem.taskNumbers.failed}</h5>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AllTask;
