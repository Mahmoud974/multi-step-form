import { NavLink } from 'react-router-dom';




const PickAddOns = () => {
  return (
    <div>
        <ul>
            <li className="mt-6 flex space-x-12 border border-violet-500 p-4  rounded-xl ">
                <input type="checkbox" name="" id="" />
                <div>
                    <p className="text-blue-800 font-bold">Online service</p>
                <p className="text-gray-400">Access to multiplayer games</p></div>
                <p className="text-violet-500">
                    +$1/mo
                </p>
            </li>

             <li className="mt-6 flex space-x-12 border border-violet-500 p-4 rounded-xl ">
                <input type="checkbox" name="" id="" />
                <div>
                    <p className="text-blue-800 font-bold">Larger storage</p>
                <p className="text-gray-400">Extra 1TB of cloud save</p></div>
                <p className="text-violet-500 flex justify-end">
                    +$1/mo
                </p>
            </li>
             <li className="mt-6 flex space-x-12 border border-violet-500 p-4 rounded-xl ">
                <input type="checkbox" name="" id="" />
                <div>
                    <p className="text-blue-800 font-bold">Customizable Profile</p>
                <p className="text-gray-400">Custome theme on your profile</p></div>
                <p className="text-violet-500">
                    +$1/mo
                </p>
            </li>
        </ul>
  <div className="flex justify-between mt-20 items-center">
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