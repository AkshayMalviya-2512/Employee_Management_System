import { format } from 'date-fns'
import { Download } from 'lucide-react'
import React from 'react'

const PayslipList = ({payslips, isAdmin}) => {
  return (
    <div className='card overflow-hidden'>
        <div className='overflow-x-auto'>
            <table className='table-modern'>
                <thead>
                    <tr>
                        {isAdmin && <th>Employee</th>}
                        <th>Period</th>
                        <th>Basic Salary</th>
                        <th>Net Salary</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payslips.length === 0 ? (
                    <tr>
                        <td className='text-center py-12 text-teal-400' colSpan={isAdmin ? 5 : 4}>
                            No Payslips found
                        </td>
                    </tr>
                    ) : (
                        payslips.map((payslip) => {
                            return(
                                <tr key={payslip._id || payslip.id}>
                                    {isAdmin && (
                                        <td className='text-fuchsia-700'>
                                            {payslip.employee?.firstName}
                                            {payslip.employee?.lastName}
                                        </td>
                                    )}

                                    <td className='text-fuchsia-700'>
                                        {format(new Date(payslip.year, payslip.month - 1), "MMMM yyyy")}
                                    </td>

                                    <td className='text-fuchsia-700'>
                                        ${payslip.basicSalary?.toLocaleString()}
                                    </td>

                                    <td className='text-fuchsia-700 font-md'>
                                        ${payslip.netSalary?.toLocaleString()}
                                    </td>

                                    <td className='text-center' >
                                        <button onClick={() => window.open(`/print/payslips/${payslip.id || payslip.id}`)}
                                            className='inline flex items-center px-3 py-1.5 text-xs font-md rounded-full
                                            bg-emerald-200 text-rose-500 hover:bg-cyan-200 hover:text-violet-500 transition-all'>
                                            <Download className='w-4 h-4 mr-1.5'/>Download
                                        </button>
                                    </td>

                                    

                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PayslipList