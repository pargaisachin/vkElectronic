import React from 'react'

export default function Table() {
  return (
    <div className='overflow-auto rounded-lg shadow m-2'>
       <table className='w-full'>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
                <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>No</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Details</th>
                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                <th className='w- p-3 text-sm font-semibold tracking-wide text-left'>Total</th>
            </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          <tr className='bg-gray-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10001</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Wakefit office chair, mesh + PU +black</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase text-green-800 bg-green-200 rounded-lg opacity-50'>
              Delivered
              </span>
              
              </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/10/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$100.00</td>

          </tr>
          <tr className='bg-white'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10002</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Wakefit Wooden Table, RoseWood +black</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-b-lg opacity-50'>Cancelled</span></td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/09/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$130.00</td>

          </tr>
          <tr className='bg-gray-100'>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10003</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Wakefit Back Support Cussion, Memory Form +black</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
              <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg opacity-50'>Pending</span>
              </td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>16/10/2021</td>
            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$100.00</td>

          </tr>
          
        </tbody>
    </table>

    </div>
   
  )
}
