import React from "react";
import Header from "../other/header";
import CreateTask from "../other/createTask";
import AllTask from "../other/allTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
     <CreateTask />
     <AllTask />
    </div>
  );
};

export default AdminDashboard;
