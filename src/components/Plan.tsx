import { NavLink } from 'react-router-dom';
import { MyInterface } from '../shared/modal';
import { useEffect, useState} from 'react';


const Plan = () => {
  
const [pick, setPick] = useState<MyInterface>();
const [mode, setMode] = useState()
const [validateForm, setValidateForm] = useState<boolean>(false)




  const plan: MyInterface[] =  [
    {
      id: 1,
      img:"public/icon-arcade.svg",
      title: "Arcade",
      price: "$9/mo"
    },
    {
      id: 2,
      img:"public/icon-pro.svg",
      title: "Advanced",
      price: "$12/mo"
    },
    {
      id: 3,
      img:"public/icon-advanced.svg",
      title: "Pro",
      price: "$15/mo"
    }
    

  ]
  const activeBox = (data:MyInterface):void =>{
    setValidateForm(true)
    setPick(data)
    console.log(data);
  }

  
    useEffect(()=>{
        const storedData = localStorage.getItem('myDataPlan')
        if(storedData){
            setPick(JSON.parse(storedData))
        }

    },[])
    useEffect(()=>{
          if(pick){
            localStorage.setItem('myDataPlan', JSON.stringify(pick))
        }

    },[pick])

  
  return (
   <div>
    <div className='bg-white rounded-xl -mt-12'>
    <div className='md:px-0 px-12'>
      <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12 ">
Select your plan
  </h1>
  <h2 className="mt-2 text-gray-400 w-64 md:w-full ">
Please provide your name, email, adress and phone number
  </h2>
    </div>
    <div >
      
        <ul className="flex md:space-x-5 space-y-3 mt-8 flex-col md:flex-row md:px-0 px-12">
            {
                plan.map((level,index) => <li key={index}  className=" flex md:flex-col items-center cursor-pointer p-6 border  w-full md:h-44 h-16 border-gray-300 rounded-xl hover:border-violet-500 "  onClick={()=> activeBox(level)}>
        <img src={level.img} alt="" />

        <div className="md:mt-8 ml-6">
            <h2 className="text-blue-900 font-bold">{level.title}</h2>
            <p className="text-gray-400">{level.price}</p>
        </div>
            </li>)
            }

        </ul>
        <div className="bg-gray-100 space-x-4 flex justify-center mt-6 py-4 rounded-md mx-12 px-12 md:mx-0">
            <p className="text-blue-900 font-bold">Monthly</p>
           <input
        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault" onChange={(e) =>setMode(e)}/>

            <p className="text-gray-400 font-bold">Yearly</p>
        </div>

      <div className="flex justify-between mt-20 items-center">
       <NavLink to='/'>

         <p className="text-blue-900 font-bold cursor-pointer">Go back</p>
       </NavLink>
       <div className="justify-end  ">
{
      validateForm ? <NavLink to='/step3'>
 <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink> :  <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
     }
       </div>
     
    </div>
        
        
    </div>
    
   </div>
    <div className="flex justify-end md:hidden ">
{
      validateForm ? <NavLink to='/step3'>
 <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
</NavLink> :  <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12 cursor-pointer"/>
     }
       </div>
   </div>
  )
}

export default Plan