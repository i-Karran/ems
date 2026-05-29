import React from 'react'

const CompleteTask = ({data}) => {
  return (
     <div className="shrink-0 h-full w-75 rounded-xl p-5 bg-green-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category} </h3>
          <h4 className="text-sm ">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2 ">
           {data.taskDescription}
        </p>
        <div className='mt-2'>
<button className='w-full bg-orange-500 text-sm py-1 px-2'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask