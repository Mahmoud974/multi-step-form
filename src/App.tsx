import { useState } from "react";
import PersonalForm from "./components/PersonalForm";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Plan from "./components/Plan";
import PickAddOns from "./components/PickAddOns";
import { MyInterface } from './shared/modal';
import FinishingUp from "./components/FinishingUp";
import Confirm from "./components/Confirm";


const App = () => {
  const [numberInc, setNumberInc] = useState<number>(0)
  const [validate, setValidate] = useState<boolean>(false)

  const titleData: MyInterface[] =  [
    {
      id: 1,
      title: "Personal info",
      text: "Please provide your name, email, adress and phone number"
    },
    {
      id: 2,
      title: "Select your plan",
      text: "You have the option of monthly or yearly biling"
    },
    {
      id: 3,
      title: "Personal info",
      text: "Please provide your name, email, adress and phone number"
    },
    {
      id: 4,
      title: "Personal info",
      text: "Please provide your name, email, adress and phone number"
    },
    

  ]
  console.log(titleData[1].title);
  
  return (
    <div className='max-w-4xl container mx-auto flex  '>
<div className='bg-white w-full h-[37em] flex justify-start mt-24  p-3'>
<div className="bg-[url('./bg-sidebar-desktop.svg')]  h-full w-[17em] rounded-lg">
  <ul className="flex justify-start flex-col ml-12 mt-12">
    <li className='flex text-white items-center'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>1</p>
      <div className="ml-4">
        <p className="text-xs text-gray-300">STEP 1</p>
        <h3 className="font-bold">YOUR INFO</h3>
      </div>
    </li>
    <li className='flex text-white items-center mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>2</p>
      <div className="ml-4">
        <p className="text-xs text-gray-300">STEP 2</p>
        <h3 className="font-bold">SELECT PLAN</h3>
      </div>
    </li>

     <li className='flex text-white items-center mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>3</p>
      <div className="ml-4">
        <p className="text-xs text-gray-300">STEP 3</p>
        <h3 className="font-bold">ADD-ONS</h3>
      </div>
    </li>

     <li className='flex text-white items-center mt-6'>
      <p className='text-xl border w-8 h-8 rounded-full text-center  hover:bg-blue-200 hover:text-black'>4</p>
      <div className="ml-4">
        <p className="text-xs text-gray-300">STEP 4</p>
        <h3 className="font-bold">SUMMARY</h3>
      </div>
    </li>
  </ul>
</div>
<div className=' p-12 ml-8'>
  <h1 className="text-3xl font-bold text-blue-900 ">
{titleData[numberInc].title}
  </h1>
  <h2 className="mt-2 text-gray-400 ">
 {titleData[numberInc].text}
  </h2>
  <div>

<BrowserRouter>
<Routes>

  <Route  path='/' Component={PersonalForm}/>
  <Route  path='/step2' Component={Plan}/>
<Route  path='/step3' Component={PickAddOns} />
<Route  path='/step4' Component={FinishingUp }/>

</Routes>
</BrowserRouter>


 {/* <Plan/> */}
 {/* <PickAddOns/> */}
 {/* <FinishingUp/> */}
 {/* <Confirm/> */}
</div>
</div>

</div>
    </div>
  );
};

export default App;