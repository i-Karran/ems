import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/login";
import EmployeeDashboard from "./components/dashboard/employeeDashboard";
import AdminDashboard from "./components/dashboard/adminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/authProvider";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, )

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" , data : employee }),
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div>
        {/* To yhapr hmne likha if user nhi hai toh login screen p le jao nhi dashboard of employee or admin */}
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user == "admin" ? (
          <AdminDashboard changeUser={setUser}/>
        ) : user == "employee" ? (
          <EmployeeDashboard changeUser={setUser}  data={loggedInUserData} />
        ) : null}

        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
      </div>
    </>
  );
};

export default App;
