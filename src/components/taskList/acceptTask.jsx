import React from 'react'

const AcceptTask = () => {
  return (
    <div className="shrink-0 h-full w-75 rounded-xl p-5 bg-orange-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High </h3>
          <h4 className="text-sm ">25 May 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus maxime doloremque error cupiditate amet impedit,
          doloribus alias odio voluptatibus incidunt, ea maiores. Quidem.
        </p>
        <div  className='flex justify-between mt-4'>
            <button className='bg-green-500 text-sm py-1 px-2'>Mark as Completed</button>
            <button className='bg-red-500 text-sm py-1 px-2'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask;