import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MyInterface } from '../shared/modal';
import NavigateMultiStep from './NavigateMultiStep';




const PickAddOns:React.FC = () => {
const [data, setData] = useState<string[]>(()=>{
    const storedData = localStorage.getItem('myData');
    return storedData ? JSON.parse(storedData) : []
  })
    // console.log(data);
    
    const priceService:MyInterface[] = [
        {
            id: 1,
            title: 'Online service',
            text: 'Access to multiplayer games',
            price: '+$1/mo'

        },
        {
            id: 2,
            title: 'Larger storage',
            text: 'Extra 1TB of cloud save',
            price: '+$2/mo'

        },
        {
            id: 3,
            title: 'Customizable Profile',
            text: 'Custome theme on your profile',
            price: '+$2/mo'

        }
    ]
  const updateData = (newData:string[]) =>{
  setData(newData);
  localStorage.setItem('data', JSON.stringify(newData))
}
const addData = (ok:any) =>{
  const newData = [...data, ok];
  updateData(newData)
}

return (
 <div className='md:max-w-4xl md:container md:mx-auto '>
<div className=' md:bg-white md:w-full md:h-[37em] md:flex md:justify-start  md:p-3 w-full  md:rounded-xl '>
<NavigateMultiStep/>


  <div className=' mx-auto flex justify-center md:p-12 md:ml-0  '>
  <div className='bg-white  rounded-xl -mt-12 pb-12 md:pb-0'>
      <div className='px-12 md:px-0'>
         <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12 ">
Pick add-ons
  </h1>
   <h2 className="mt-2 text-gray-400 w-64 md:w-full ">
Add-ons help enhance your gaming experience.
  </h2>
     </div>
    <div>
        <ul className=''>
            {
                priceService.map(option =>
                     <li key={option.id} className=" mt-6 p-2 md:w-[30em]  border border-violet-500 md:p-4 mx-12 md:mx-0 rounded-xl md:h-24 h-16 "  onClick={()=> addData(option)} >
               <label htmlFor={option.title} className='flex justify-between'>
                 <input type="checkbox" name=""  className='w-3 md:w-4'/>
                <div>
                    <p className="text-blue-800 font-bold ">
                        {option.title}
                    </p>
                <p className="text-gray-400 text-xs md:text-xl">{option.text}</p></div>
                <p className="text-violet-500 text-xs md:text-xl mt-3">
                   {option.price}
                </p>
               </label>
            </li>
                    )
            }
           

          
        </ul>
  <div className="md:flex justify-between mt-8 items-center hidden">
        <NavLink to='/step2'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/step4'>
 <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
    </div>
    </div>
  </div>
  
    </div>
     {/* Display on the mobile */}
   <div className="flex justify-between mt-20 items-center md:hidden  mx-8">
        <NavLink to='/step2'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/step4'>
 <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
   </div>
   </div>
   </div>
  )
}

export default PickAddOns