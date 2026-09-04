import { PencilIcon, Trash2Icon } from 'lucide-react'
import React from 'react'

const EmployeeCard = ({employee, onDelete, onEdit}) => {

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this employee ?")) {
            return;
        }
    }

  return (
    <div className='group relative card card-hover overflow-hidden'>
        
        {/* Initials/ image section in the employee card */}
        <div className='relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-lime-100 
        to-blue-100'>
            <div className='w-full h-full flex items-center justify-center'>
                {/* initials circle */}
                <div className='w-20 h-20 rounded-full bg-linear-to-br from-indigo-200 to-red-200 flex
                items-center justify-center'>
                    <span className='text-2xl font-medium text-indigo-500'>
                        {employee.firstName[0]}
                        {employee.lastName[0]}
                    </span>
                </div>
            </div>
        </div>

        {/* Department badge top left */}
        <div className='absolute top-3 left-3 flex gap-2'>
            <span className='bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-blue-600
            rounded-lg shadow-sm hover:text-red-600 hover:bg-mist-300'>
                {employee.department || "REMOTE"}
            </span>
            {employee.isDeleted && 
            <span className='bg-red-500/60 font-medium text-white px-2.5 py-1 text-xs rounded'>
                DELETED
            </span>}
        </div>

        {/* Edit/ delete button */}
        {!employee.isDeleted && (
                <div className='absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3
                opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <button onClick={() => onEdit(employee)} 
                    className='p-2.5 bg-white/90 backdrop-blur-sm text-red-700 hover:text-indigo-700
                    rounded-xl shadow-lg transition-all hover:scale-105'>
                        <PencilIcon className='w-4 h-4'/>
                    </button>
                    <button onClick={handleDelete}
                    className='p-2.5 bg-white/90 backdrop-blur-sm text-cyan-700 hover:text-rose-700 
                    rounded-xl shadow-lg transtion-all hover:scale-105 disabled:opacity-50'>
                        <Trash2Icon className='w-4 h-4'/>
                    </button>
                </div>
            )}

        {/* Employee name and designation */}
        <div className='p-5'>
            <h3 className='text-cyan-800 hover:text-red-800'>{employee.firstName} {employee.lastName}</h3>
            <p className='text-sm text-indigo-500 hover:text-violet-700'>{employee.position}</p>
        </div>
    </div>
  )
}

export default EmployeeCard