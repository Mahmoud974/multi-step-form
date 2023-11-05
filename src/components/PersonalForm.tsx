import { useForm } from 'react-hook-form';
import { IFormInput } from '../shared/modal';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavigateMultiStep from './NavigateMultiStep';

const PersonalForm:React.FC = () => {
const { register, handleSubmit,formState: { errors } } = useForm<IFormInput>();
const [validateMyForm, setValidateMyForm] = useState<boolean>(false)
const onSubmit = ():void => setValidateMyForm(true)

return (
     <div className='md:max-w-4xl md:container md:mx-auto '>
<div className=' md:bg-white md:w-full md:h-[37em] md:flex md:justify-start  md:p-3 w-full  md:rounded-xl '>
<NavigateMultiStep/>

  <div className=' mx-auto flex justify-center md:p-12 md:ml-0  '>
     <div className=' bg-white rounded-xl -mt-12'>
     <div className='px-12 md:px-0'>
       <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12">
Personal info
  </h1>
  <h2 className="mt-2 text-gray-400 w-64 md:w-full">
Please provide your name, email, adress and phone number
  </h2>
     </div>
  <form action="" className="flex flex-col md:mt-6 px-12   md:px-2  md:pb-0 pb-12 " onSubmit={handleSubmit(onSubmit)}>
  <div className='flex items-center justify-between '>
      <label htmlFor="name" className="text-blue-900 mt-2 text-sm my-1">Name</label>  {
      errors.lastname && <span className='text-xs font-bold text-red-600 '>This field is required</span>
    }
  </div>
    <input type="text"  className={`border-2 h-12 rounded-xl ${errors.lastname &&  `border-red-400`}`}  placeholder="&nbsp; &nbsp; e.g. Stephen King" {...register("lastname", {required: true, minLength:12, pattern: /^[\p{L}\p{M}\s'-]+$/u})} />
   
  

   <div className='flex items-center justify-between '>
     <label htmlFor="email" className="text-blue-900 mt-6 text-sm my-1" >Email Adress</label>
         {errors.email && <span role="alert" className='text-xs font-bold text-red-600 mt-4'>{errors.email?.message}</span>}
   </div>
    <input type="email"  id="email" aria-invalid={errors.email ? "true" : "false"} className={`border-2 h-12 rounded-xl ${errors.email &&  `border-red-400`}`}  placeholder="&nbsp; &nbsp; e.g. stephenking@lorem.com" {...register("email",{required: "Email Adress is required", pattern: /^\S+@\S+$/i})}/>


   <div className='flex items-center justify-between '>
     <label htmlFor="phone" className="text-blue-900 mt-6 text-sm my-1" >Phone Number</label>
    {  errors.telephone && <span className='text-xs font-bold text-red-600 mt-6'>This field is required</span>}
   </div>
    <input type="text" className={`border-2 h-12 rounded-xl ${errors.telephone &&  `border-red-400`}`}  placeholder="&nbsp; &nbsp;e.g. +1 234 567 890"  {...register("telephone", {required: true, pattern: /^\d{10,}$/, minLength: 10})}/>
{/* Display on the desktop */}
    <div className="md:flex justify-end hidden  ">
      {validateMyForm ?
        <NavLink to='/step2' >

        <input type="submit" value="Next Step" className="cursor-pointer bg-blue-900 w-28 rounded-xl text-white h-12  mt-8 " />
      </NavLink> :  

        <input type="submit" value="Next Step" className="cursor-pointer bg-blue-900 hover:bg-blue-700 w-28 rounded-xl text-white h-12  mt-8 " />
     }
    
    </div>
  </form>
  </div>
    
    </div>
   </div>
   {/* Display on the mobile */}
          <div className="flex justify-end md:hidden mb-12">
         {validateMyForm ?
          <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12  mt-8" />
          : <NavLink to='/step2'>
         <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12  mt-8" />
         </NavLink>   
   
          
        }
   </div>
   </div>
  )
}

export default PersonalForm