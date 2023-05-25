import { useForm } from 'react-hook-form';
import { IFormInput } from '../shared/modal';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const PersonalForm = () => {
const { register, handleSubmit,formState: { errors } } = useForm<IFormInput>();
const [validateMyForm, setValidateMyForm] = useState<boolean>(false)


const onSubmit = ():void => setValidateMyForm(true)

  
  return (
   <div>
     <div className=' bg-white   rounded-xl -mt-12'>
     <div className='px-12'>
       <h1 className="md:text-3xl text-xl font-bold text-blue-900 mt:pt-0 pt-12">
Personal info
  </h1>
  <h2 className="mt-2 text-gray-400 w-64 ">
Please provide your name, email, adress and phone number
  </h2>
     </div>
  <form action="" className="flex flex-col md:mt-6 px-12 md:pb-0 pb-12" onSubmit={handleSubmit(onSubmit)}>
  <div className='flex items-center justify-between '>
      <label htmlFor="name" className="text-blue-900 mt-2 text-sm my-1">Name</label>  {
      errors.lastname && <span className='text-xs font-bold text-red-600 '>This field is required</span>
    }
  </div>
    <input type="text" id="" className="border border-1 h-12 rounded-xl " placeholder="e.g. Stephen King" {...register("lastname", {required: true, minLength:12, pattern: /^[A-Za-z]+$/i})} />
   
    

   <div className='flex items-center justify-between '>
     <label htmlFor="email" className="text-blue-900 mt-6 text-sm my-1" >Email Adress</label>
         {errors.email && <span role="alert" className='text-xs font-bold text-red-600 mt-4'>{errors.email?.message}</span>}
   </div>
    <input type="email"  id="email" aria-invalid={errors.email ? "true" : "false"} className="border border-1 h-12 rounded-xl " placeholder="e.g. stephenking@lorem.com" {...register("email",{required: "Email Adress is required", pattern: /^\S+@\S+$/i})}/>


   <div className='flex items-center justify-between '>
     <label htmlFor="phone" className="text-blue-900 mt-6 text-sm my-1" >Phone Number</label>
    {  errors.telephone && <span className='text-xs font-bold text-red-600 mt-6'>This field is required</span>}
   </div>
    <input type="text"  id="" className="border border-1 h-12 rounded-xl" placeholder="e.g. +1 234 567 890"  {...register("telephone", {required: true, pattern: /^\d{10,}$/, minLength: 10})}/>

    <div className="md:flex justify-end hidden  ">
      {validateMyForm ?
        <NavLink to= '/step2' >

        <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12  mt-8 " />
      </NavLink> :  

        <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12  mt-8 " />
     }
    
    </div>
  </form>
  
    </div>
       <div className="flex justify-end md:hidden ">
      {validateMyForm ?
        <NavLink to= '/step2' >

        <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12  mt-8 " />
      </NavLink> :  

        <input type="submit" value="Next Step" className="bg-blue-900 w-28 rounded-xl text-white h-12  mt-8 " />
     }
    
    </div>
   </div>
  )
}

export default PersonalForm