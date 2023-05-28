
import PersonalForm from "./components/PersonalForm";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Plan from "./components/Plan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import Confirm from "./components/Confirm";
import NavigateMultiStep from "./components/NAvigateMultiStep";



const App = () => {
 

  
return (


<BrowserRouter>
<Routes>
<Route  path='/step1' Component={PersonalForm}/> 
<Route  path='/step2' Component={Plan}/>
<Route  path='/step3' Component={PickAddOns} />
<Route  path='/step4' Component={FinishingUp }/>
<Route  path='/confirmer' Component={Confirm }/>
 {/* <Route  path='*' Component={PersonalForm}/> */}

</Routes>
</BrowserRouter>



  );
};

export default App;