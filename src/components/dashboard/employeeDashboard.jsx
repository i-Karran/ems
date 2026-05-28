import React from 'react'
import Header from '../other/header'
import TaskIndicator from '../other/taskindicator'
import TaskList from '../taskList/taskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
      
        <Header data={data}/>
        <TaskIndicator data={data} />
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard