

const Confirm:React.FC = () => {
  return (
  <div className='bg-white rounded-xl items-center flex justify-center md:p-0  p-12 md:h-72 -mt-12 md:mt-0'>
     <div className='px-12 '>
      <div className="text-center  ">
     <div className="mx-auto flex justify-center flex-col space-y-4 md:mt-24">
        <img src="/public/icon-thank-you.svg" alt="confirm" className="w-20 mx-auto"/>
        <h6 className="text-3xl font-bold text-blue-900">Thank you!</h6>
        <p className=" text-gray-400 text-sm md:w-80 w-52 mx-auto">
            Thanks for confirming your subscription! We hope you have
fun using our platform. If you ever need support, please feel
free to email us at support@loremgaming.com
        </p>
    </div>
   </div>
     </div>
  </div>
  )
}

export default Confirm