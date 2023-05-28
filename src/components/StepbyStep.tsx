import React from 'react'



 const StepbyStep = () => {
  return (
   <div className="md:mt-0 w-94 md:bg-[url('./bg-sidebar-desktop.svg')] w-full md:h-full md:w-[17em] md:rounded-lg md:h-42 h-56 bg-[url('./bg-sidebar-mobile.svg')] bg-cover -mt-12">
  <ul className="flex md:justify-start md:flex-col md:ml-12 mt-12  md:mt-6 justify-center space-x-3 md:space-x-0 py-20 md:py-0">
    <li className='flex text-white items-center md:mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>1</p>

        <div className=" ml-4 md:flex md:flex-col hidden">
        <p className="md:text-xs text-gray-300">STEP 1</p>
        <h3 className="font-bold">YOUR INFO</h3>
      </div>

    </li>
<li className='flex text-white items-center md:mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>2</p>
      <div className="ml-4 md:flex md:flex-col hidden">
        <p className="text-xs text-gray-300">STEP 2</p>
        <h3 className="font-bold">SELECT PLAN</h3>
      </div>
    </li>


     <li className='flex text-white items-center md:mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>3</p>
      <div className="ml-4 md:flex md:flex-col hidden">
        <p className="text-xs text-gray-300">STEP 3</p>
        <h3 className="font-bold">ADD-ONS</h3>
      </div>
    </li>

     <li className='flex text-white items-center md:mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>4</p>
      <div className="ml-4 md:flex md:flex-col hidden">
        <p className="text-xs text-gray-300">STEP 4</p>
        <h3 className="font-bold">SUMMARY</h3>
      </div>
    </li>
  </ul>
</div>
  )
}

export default StepbyStep;