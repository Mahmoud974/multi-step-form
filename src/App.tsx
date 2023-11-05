
import PersonalForm from "./components/PersonalForm";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Plan from "./components/Plan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import Confirm from "./components/Confirm";

const App = () => {
 
return (
<BrowserRouter>
<Routes>
<Route  path='/' Component={PersonalForm}/> 
<Route  path='/step2' Component={Plan}/>
<Route  path='/step3' Component={PickAddOns} />
<Route  path='/step4' Component={FinishingUp }/>
<Route  path='/confirmer' Component={Confirm }/>
</Routes>
</BrowserRouter>

);
};

export default App;