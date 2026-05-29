import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 rounded-xl p-5 bg-orange-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category} </h3>
          <h4 className="text-sm ">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2 ">
          {data.taskDescription}
        </p>
        <div  className='flex justify-between mt-4'>
            <button className='bg-green-500 text-sm py-1 px-2'>Mark as Completed</button>
            <button className='bg-red-500 text-sm py-1 px-2'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask;