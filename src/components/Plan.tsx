import { NavLink } from 'react-router-dom';
import { MyInterface } from '../shared/modal';
import { useEffect, useState} from 'react';
import NavigateMultiStep from './NavigateMultiStep';


const Plan:React.FC = () => {
  
const [pick, setPick] = useState<MyInterface>();
const [pickPeriod, setPickPeriod] = useState<number>(0)
const [pickPeriodOne, setPickPeriodOne] = useState<number>(3)
const [validateForm, setValidateForm] = useState<boolean>(false)
const [isChecked, setIsChecked] = useState<boolean>(false);


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
    },
       {
      id: 4,
      img:"public/icon-arcade.svg",
      title: "Arcade",
      price: "$90/yr",
      offer: "2 months free"
    },
    {
      id: 5,
      img:"public/icon-pro.svg",
      title: "Advanced",
      price: "$120/yr",
       offer: "2 months free"
    },
    {
      id: 6,
      img:"public/icon-advanced.svg",
      title: "Pro",
      price: "$150/yr",
       offer: "2 months free"
    }
  ]

  const activeBox = (data:MyInterface):void =>{
    setValidateForm(true)
    setPick(data)
}
// Data de Localstorage
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

const modePeriod = (e:any)=>{
setIsChecked(e.currentTarget.checked)
if(isChecked){
  setPickPeriod(0);
  setPickPeriodOne(3) 
}else{
    setPickPeriod(3);
  setPickPeriodOne(6)
}
} 

return (
       <div className='md:max-w-4xl md:container md:mx-auto '>
<div className=' md:bg-white md:w-full md:h-[37em] md:flex md:justify-start  md:p-3 w-full  md:rounded-xl '>
<NavigateMultiStep/>


  <div className=' mx-auto flex justify-center md:p-12 md:ml-0  '>
    <div className='bg-white rounded-xl -mt-12 pb-12 md:pb-0'>
    <div className='md:px-0 px-12'>
      <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12 ">
Select your plan
  </h1>
  <h2 className="mt-2 text-gray-400 w-64 md:w-full ">
Please provide your name, email, adress and phone number
  </h2>
    </div>
    <div >
      
        <ul className="flex md:space-x-5 space-y-3 md:space-y-0 mt-8 flex-col md:flex-row md:px-0 px-12   ">
            {
                plan.slice(pickPeriod, pickPeriodOne
                 ).map((level,index) => <li key={index}  className={`  flex md:flex-col md:items-start }
                 items-center cursor-pointer p-6 border w-full md:h-44 h-16 border-gray-300 rounded-xl `}  
                onClick={()=> activeBox(level)}>
                
        <img src={level.img} alt="" />

        <div className="md:mt-8 ml-6 md:ml-0 md:flex md:items-start md:justify-start md:flex-col ">
            <h2 className="text-blue-900 font-bold">{level.title}</h2>
            <p className="text-gray-400">{level.price}</p>
            <p className="text-blue-900 text-xs">{level.offer}</p>
        </div>
            </li>)
            }

        </ul>
        {/* Type de periode */}
        <div className="bg-gray-100 space-x-4 flex justify-center mt-6 py-4 rounded-md mx-12 px-12 md:mx-0">
    <p className="text-blue-900 font-bold">Monthly</p>
    <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" onChange={(e)=> modePeriod(e)} checked={isChecked}/>
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
    <p className="text-gray-400 font-bold">Yearly</p>
        </div>


      <div className="md:flex justify-between mt-20 items-center hidden">
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

 </div>
    {/* Display on the mobile */}
<div className="flex justify-between mt-20 items-center md:hidden mx-8 ">
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
  )
}

export default Plan