import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MyInterface } from '../shared/modal';




const PickAddOns = () => {
    const [pick, setPick] = useState<MyInterface[] | MyInterface>([])
    // const [data, setData] = useState<MyInterface[]>([])

    console.log(pick);
    
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
    useEffect(()=>{
        const storedData = localStorage.getItem('myData')
        if(storedData){
            setPick(JSON.parse(storedData))
        }

      

    },[])
    useEffect(()=>{
          if(pick){
            localStorage.setItem('myData', JSON.stringify(pick))
        }

    },[pick])
return (
   <div>
  <div className='bg-white rounded-xl -mt-12 pb-12'>
      <div className='px-12'>
         <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12 ">
Pick add-ons
  </h1>
   <h2 className="mt-2 text-gray-400 w-64 md:w-0 ">
Add-ons help enhance your gaming experience.
  </h2>
     </div>
    <div>
        <ul className=''>
            {
                priceService.map(option =>
                     <li key={option.id} className=" mt-6 p-2 md:w-[30em] border border-violet-500 md:p-4 mx-12 md:mx-0 rounded-xl md:h-0 h-16 " onClick={()=> setPick(option)}>
               <label htmlFor={option.title} className='flex justify-between'>
                 <input type="checkbox" name="" id={option.title}/>
                <div>
                    <p className="text-blue-800 font-bold">
                        {option.title}
                    </p>
                <p className="text-gray-400">{option.text}</p></div>
                <p className="text-violet-500">
                   {option.price}
                </p>
               </label>
            </li>
                    )
            }
           

          
        </ul>
  <div className="md:flex justify-between mt-20 items-center hidden">
        <NavLink to='/step2'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/step4'>
 <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
    </div>
    </div>
  </div>
  
   <div className="flex justify-between mt-20 items-center md:hidden bg-white ">
        <NavLink to='/step2'>
            <p className="text-blue-900 font-bold cursor-pointer ">Go back</p>
        </NavLink>
       <NavLink to='/step4'>
 <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink>
    </div>
   </div>
  )
}

export default PickAddOns