import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'

export default function Table() {
  const[showModal,setShowModel]=useState(false)


  const modalComponent=()=>{
    
    switch(showModal){
      case true:return <InputForm title={"Edit Product"}  oncancel={()=>{setShowModel(false)}} onsubmit={()=>{setShowModel(true)}}/>
      break;
      case false:return null
      break;
      default: return null;
    }

  }
  


  return (
    <div className='overflow-auto rounded-lg shadow m-2'>
       <table className='w-full'>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
                <th className='w-3 p-3 text-sm font-semibold tracking-wide text-left'>Purchase Date</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Sale Date</th>
                <th className='w-3 p-3 text-sm font-semibold tracking-wide text-left'>Code Price</th>
                <th className='w-3 p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Capacity</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Items</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Seller ID Details</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Seller Name'</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Seller Address</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Model</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Company</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>IMEI</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
            </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          <tr className='bg-gray-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1/01/2023</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1/01/2024</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>2_225</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase text-green-800 bg-green-200 rounded-lg opacity-50'>
              Shelf
              </span>
              
              </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>100</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>5</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>11214</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>9898976534</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$100.00</td>
            <td onClick={()=>{setShowModel(true)}} className=' p-3 text-sm text-lime-700 whitespace-nowrap hover:text-blue-700'>Edit</td>

          </tr>
          <tr className='bg-white'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10002</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Wakefit Wooden Table, RoseWood +black</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-b-lg opacity-50'>Cancelled</span></td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/09/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$130.00</td>
            <td onClick={()=>{setShowModel(true)}} className=' p-3 text-sm text-lime-700 whitespace-nowrap hover:text-blue-700'>Edit</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10003</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Wakefit Back Support Cussion, Memory Form +black</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg opacity-50'>Pending</span>
              </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/10/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$100.00</td>
            <td onClick={()=>{setShowModel(true)}} className=' p-3 text-sm text-lime-700 whitespace-nowrap hover:text-blue-700'>Edit</td>

          </tr>
          
        </tbody>
    </table>
   {modalComponent()}
    

    </div>
   
  )
}
