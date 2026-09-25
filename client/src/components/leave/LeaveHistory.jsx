import React, { useState } from 'react'
import { Check, Loader2, X } from 'lucide-react'
import { format } from 'date-fns'

const LeaveHistory = ({leaves, isAdmin, onUpdate}) => {

    const[processing, setProcessing] = useState(null)
    const handleStatusUpdate = async (id, status) => {
        setProcessing(id)
    }

  return (
    <div className='card overflow-hidden'>
        <div className='overflow-x-auto'>
            <table className='table-modern'>
                <thead>
                    <tr>
                        {isAdmin && <th>Employee</th>}
                        <th>Type</th>
                        <th>Dates</th>
                        <th>Reason</th>
                        <th>Status</th>
                        {isAdmin && <th className='text-center'>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {leaves.length === 0 ? (
                    <tr>
                        <td className='text-center py-12 text-teal-400' colSpan={isAdmin ? 6 : 4}>
                            No leave applications found
                        </td>
                    </tr>
                    ) : (
                        leaves.map((leave) => {
                            return(
                                <tr key={leave._id || leave.id}>
                                    {isAdmin && (
                                        <td className='text-fuchsia-700'>
                                            {leave.employee?.firstName}
                                            {leave.employee?.lastName}
                                        </td>
                                    )}

                                    <td>
                                        <span className='px-6 py-4 bg-pink-100 text-fuchsia-700'>
                                            {leave.type}
                                        </span>
                                    </td>

                                    <td className='text-xs text-fuchsia-700'>
                                        {format(new Date(leave.startDate), "MMM dd")} - 
                                        {format(new Date(leave.endDate), "MMM dd yyyy")}
                                    </td>

                                    <td className='max-w-xs truncate text-fuchsia-700' title={leave.reason}>
                                        {leave.reason}
                                    </td>

                                    <td>
                                        <span className={`badge ${leave.status === "APPROVED" ? "badge-success" : 
                                            leave.status === "REJECTED" ? "badge-danger" : "badge-warning"}`}>
                                            {leave.status}
                                        </span>
                                    </td>

                                    {isAdmin && (
                                        <td>
                                            {leave.status === "PENDING" && (
                                                <div className='flex justify-center gap-2'>
                                                    <button onClick={() => 
                                                    handleStatusUpdate(leave._id || leave.id, "APPROVED")}
                                                    disabled={!!processing}
                                                    className='p-1.5 rounded-md bg-emerald-200 text-rose-500 
                                                    hover:bg-cyan-200 hover:text-violet-500 transition-all'>
                                                        {processing === (leave._id || leave.id) ? 
                                                        <Loader2 className='w-4 h-4 animate-spin'/> : 
                                                        <Check className='w-4 h-4'/> }
                                                    </button>
                                                    <button onClick={() => 
                                                    handleStatusUpdate(leave._id || leave.id, "REJECTED")}
                                                    disabled={!!processing}
                                                    className='p-1.5 rounded-md bg-emerald-200 text-rose-500 
                                                    hover:bg-cyan-200 hover:text-violet-500 transition-all'>
                                                        {processing === (leave._id || leave.id) ? 
                                                        <Loader2 className='w-4 h-4 animate-spin'/> : 
                                                        <X className='w-4 h-4'/> }
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    )}

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

export default LeaveHistory