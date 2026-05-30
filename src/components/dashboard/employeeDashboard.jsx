import React from 'react'
import Header from '../other/header'
import TaskIndicator from '../other/taskindicator'
import TaskList from '../taskList/taskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
      
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskIndicator data={props.data} />
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard