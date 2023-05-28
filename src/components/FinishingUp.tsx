
import { NavLink } from 'react-router-dom';
import NavigateMultiStep from './NavigateMultiStep';



const FinishingUp:React.FC = () => {
 
const pickDataJSON = localStorage.getItem('data')
  const pickPlanJSON = localStorage.getItem('myDataPlan')
  
  const pickData =  pickDataJSON ? JSON.parse(pickDataJSON) : null
  const pickDataPlan =  pickPlanJSON? JSON.parse(pickPlanJSON) : null
  const dataGlobal = pickData.map((ok:{price: number}) => Number(ok.price.match(/\d+/)[0]));
return (
   <div className='md:max-w-4xl md:container md:mx-auto '>
<div className=' md:bg-white md:w-full md:h-[37em] md:flex md:justify-start  md:p-3 w-full  md:rounded-xl '>
<NavigateMultiStep/>


  <div className=' mx-auto flex justify-center md:p-12 md:ml-0  '>
    <div className='bg-white pb-12  rounded-xl -mt-12 mx-6 md:mx-0'>
   <div className='px-12 md:px-0'>
      <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12">
Finishing up
  </h1>
     <h2 className="mt-2 text-gray-400 w-full ">
Double-check everything looks OK before conrfiming.
  </h2>
     <div>
     
       <div className="bg-gray-100 space-x-4  mt-6 py-4 rounded-md flex-col">
       <div >
           {/* Pick one Plan */}
        <div className='flex justify-between mx-8 -mb-2 font-bold text-blue-950'>
           <h1 className=''>
        {pickDataPlan.title} 
         (Monthly)
       </h1>
       <p className=''>
        {pickDataPlan.price}
       </p>
        </div>
        <a href="/step2" className='text-xs ml-8 text-gray-400 underline hover:text-blue-600 '>Change</a>
     
       </div>
         {/* Divider */}
          {/* <div className='my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent '></div> */}
             <div className='my-6 h-px border-t-2  bg-transparent  mx-12 '></div>
           <ul>
{
  pickData.map((option:{title: string; price: number }) =><li className='md:mt-2 mt-3'>
       <div className='flex justify-between mx-4 mr-8 '>
 
         <h2 className='text-xs text-gray-400'>
          {option.title}
        </h2>
        <p className='text-xs text-blue-900'>
           {`+$${Number(option.price.match(/\d+/)[0])}/mo`}
       
        </p>
   </div>
    
      </li> )
}

      
           </ul>
          
           
        </div>
         <div className='flex justify-between mx-8 mt-4 md:mt-8 '>
            <small>Total (per month)</small>
            <small className='text-violet-500 font-bold'>{ `+${+dataGlobal.reduce((a,b) => a + b ) } /mo`}</small>
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
   </div>
     {/* Display on the mobile */}
     <div className="flex justify-between mt-20 items-center md:hidden mx-8">
          
       <NavLink to='/step3'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/confirmer'>
 <input type="submit" value="Confirmer" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
    </div>
   </div>

   </div>

  )
}

export default FinishingUp