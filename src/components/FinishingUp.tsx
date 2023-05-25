
import { NavLink } from 'react-router-dom';





const FinishingUp = () => {

  
  
  
const pickDataJSON = localStorage.getItem('myData')
const pickPlanJSON = localStorage.getItem('myDataPlan')

 const pickData =  pickDataJSON ? JSON.parse(pickDataJSON) : null
 const pickDataPlan =  pickPlanJSON? JSON.parse(pickPlanJSON) : null
 


  return (
   <div>
    <div className=' bg-white pb-12  rounded-xl -mt-12'>
   <div className='px-12'>
      <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12">
Finishing up
  </h1>
   <h2 className="mt-2 text-gray-400 w-64 md:w-0">
Double-check everything looks OK before conrfiming.
  </h2>
     <div>
       {/* Divider */}
       <div className="bg-gray-100 space-x-4  mt-6 py-4 rounded-md flex-col">
       <div >
        <div className='flex justify-between mx-8 -mb-2'>
           <h1>
        {pickDataPlan.title}
       </h1>
       <p className='font-bold'>
        {pickDataPlan.price}
       </p>
        </div>
        <a href="/step2" className='text-xs ml-8 text-violet-600 underline '>Change</a>
     
       </div>
          <div className='my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent '></div>
           <ul>
      <li className=''>
       <div className='flex justify-between mx-7'>

         <h2 className='text-xs'>
          {pickData.title}
        </h2>
        <p className='text-xs'>
          {pickData.price}
        </p>
   </div>
    
      </li>
           </ul>
          
           
        </div>
         <div className='flex justify-between mx-8'>
            <small>Total (per month)</small>
            <small className='text-violet-500 font-bold'>{ `+$${Number(pickDataPlan.price.match(/\d+/)) + Number(pickData.price.match(/\d+/))}/mo`}</small>
           </div>
        <div className="md:flex justify-between mt-20 items-center hidden">
          
       <NavLink to='/step3'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/confirmer'>
 <input type="submit" value="Confirmer" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
    </div>
    </div>

   </div>
   
    </div>
     <div className="flex justify-between mt-20 items-center md:hidden">
          
       <NavLink to='/step3'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/confirmer'>
 <input type="submit" value="Confirmer" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
    </div>
   </div>
  )
}

export default FinishingUp