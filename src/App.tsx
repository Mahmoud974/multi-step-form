
import PersonalForm from "./components/PersonalForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plan from "./components/Plan";
import PickAddOns from "./components/PickAddOns";
import { MyInterface } from './shared/modal';
import FinishingUp from "./components/FinishingUp";
import Confirm from "./components/Confirm";


const App = () => {



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
    <div className='md:max-w-4xl md:container md:mx-auto flex  '>
<div className=' md:bg-white md:w-full md:h-[37em] md:flex md:justify-start md:mt-24 md:p-3 w-full  md:rounded-xl '>
<div className="md:mt-0 w-94 md:bg-[url('./bg-sidebar-desktop.svg')] w-full md:h-full md:w-[17em] md:rounded-lg md:h-42 h-56 bg-[url('./bg-sidebar-mobile.svg')] bg-cover -mt-12">
  <ul className="flex md:justify-start md:flex-col md:ml-12 mt-12 justify-center space-x-3 py-20 md:py-0 ">
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
<div className=' mx-auto flex justify-center md:p-12 md:ml-8  '>

<BrowserRouter>
<Routes>

  <Route  path='/' Component={PersonalForm}/>
  <Route  path='/step2' Component={Plan}/>
<Route  path='/step3' Component={PickAddOns} />
<Route  path='/step4' Component={FinishingUp }/>
<Route  path='/confirmer' Component={Confirm }/>
 <Route  path='*' Component={PersonalForm}/>

</Routes>
</BrowserRouter>


</div>

</div>
    </div>
  );
};

export default App;