
import PersonalForm from "./components/PersonalForm";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Plan from "./components/Plan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import Confirm from "./components/Confirm";
import NavigateMultiStep from "./components/NAvigateMultiStep";



const App = () => {
 

  
return (
    <div className='md:max-w-4xl md:container md:mx-auto '>
<div className=' md:bg-white md:w-full md:h-[37em] md:flex md:justify-start  md:p-3 w-full  md:rounded-xl '>
<NavigateMultiStep/>
<div className=' mx-auto flex justify-center md:p-12 md:ml-0  '>

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