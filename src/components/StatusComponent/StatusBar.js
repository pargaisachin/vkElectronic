import React,{useState} from 'react'
import InputForm from '../InputForm/InputForm'

export default function StatusBar() {
const [showModel,setShowModel]=useState(false)

const modelComponent=()=>{

     if(showModel===true){
         return <InputForm/>
     }else{
          return null
     }

}
  return (
    <div className='flex flex-wrap justify-center'>
          <div className="w-80 mx-auto">
     

     <div className="bg-green-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-green-300" id="open-btn ">
     <h3 className=" truncate font-bold">"Shelf"</h3>
     </div>
 
 


</div>
<div className="w-80 mx-auto">
     

     <div className="bg-orange-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-green-300" id="open-btn">
     <h3 className=" truncate font-bold">"Repair"</h3>
     </div>
 
 


</div>
<div className="w-80 mx-auto">
     

     <div className="bg-red-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-green-300" id="open-btn">
     <h3 className=" truncate font-bold">"Dead"</h3>
     </div>
 
 


</div>
<div className="w-80 mx-auto">
    
    <div className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-green-300" onClick={()=>{setShowModel(true)}}>
        Add Product
    </div>
</div>
{modelComponent()}
    </div>

    

  )
}
