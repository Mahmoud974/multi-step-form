import {  NavLink, useLocation} from 'react-router-dom';


const NavigateMultiStep = () => {
  const location = useLocation()

  return (
        <div className="md:mt-0 w-94 md:bg-[url('/img/bg-sidebar-desktop.svg')] w-full md:h-full md:w-[17em] md:rounded-lg md:h-42 h-56 bg-[url('./bg-sidebar-mobile.svg')] bg-cover -mt-12">
  <ul className="flex md:justify-start md:flex-col md:ml-12 mt-12  md:mt-6 justify-center space-x-3 md:space-x-0 py-20 md:py-0">
    <NavLink to='/'>
      <li className='flex text-white items-center md:mt-6' >
      <p className={`text-xl border w-8 h-8 rounded-full text-center ${location.pathname === '/' && 'bg-blue-200 text-black font-bold'}`}>1</p>

        <div className=" ml-4 md:flex md:flex-col hidden">
        <p className="md:text-xs text-gray-300">STEP 1</p>
        <h3 className="font-bold">YOUR INFO</h3>
      </div>

    </li>
    </NavLink>
<li className='flex text-white items-center md:mt-6 '>
      <p className={`text-xl border w-8 h-8 rounded-full text-center ${location.pathname === '/step2' && 'bg-blue-200 text-black font-bold' }`}>2</p>
      <div className="ml-4 md:flex md:flex-col hidden">
        <p className="text-xs text-gray-300">STEP 2</p>
        <h3 className="font-bold">SELECT PLAN</h3>
      </div>
    </li>
    <li className='flex text-white items-center md:mt-6'>
      <p className={`text-xl border w-8 h-8 rounded-full text-center ${location.pathname === '/step3' && 'bg-blue-200 text-black font-bold'}`}>3</p>
      <div className="ml-4 md:flex md:flex-col hidden">
        <p className="text-xs text-gray-300">STEP 3</p>
        <h3 className="font-bold">ADD-ONS</h3>
      </div>
    </li>

     <li className='flex text-white items-center md:mt-6'>
      <p className={`text-xl border w-8 h-8 rounded-full text-center ${location.pathname === '/step4' && 'bg-blue-200 text-black font-bold' }`}>4</p>
      <div className="ml-4 md:flex md:flex-col hidden">
        <p className="text-xs text-gray-300">STEP 4</p>
        <h3 className="font-bold">SUMMARY</h3>
      </div>
    </li>
  </ul>
</div>
    );
};

export default NavigateMultiStep;