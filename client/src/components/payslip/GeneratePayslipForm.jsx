import { Loader2, Plus, X } from 'lucide-react'
import React, { useState } from 'react'

const GeneratePayslipForm = ({employees, onSuccess}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    if (!isOpen) {
        return(
            <button className='btn-primary flex items-center gap-2'
            onClick={() => setIsOpen(true)}>
                <Plus className='w-4 h-4'/>Generate Payslip
            </button>
        )
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-lime-50/40 backdrop-blur-sm'>
         <div className='card max-w-lg w-full p-6 animate-slide-up'>
             <div className='flex justify-between items-center mb-6'>
                <h3 className='text-lg font-semibold text-cyan-700/70'>
                    Generate Monthly Payslip
                </h3>
                <button className='text-blue-400 hover:text-red-400 p-1 bg-pink-100 hover:bg-teal-200 rounded-full'
                onClick={() => setIsOpen(false)}>
                    <X size={20}/>
                </button>
             </div>
             <form onSubmit={handleSubmit} className='space-y-4'>
                 
                 {/* employee selection */}
                 <div>
                    <label className='block text-md font-medium text-rose-500 mb-2'>
                         Employee
                    </label>
                    <select name="employeeId" required>
                        {employees.map((e) => (
                            <option value={e.id} key={e.id}>
                                {e.firstName} {e.lastName} ({e.position})
                            </option>
                        ))}
                    </select>
                 </div>

                 {/* month and year selection */}
                 <div className='grid grid-cols-2 gap-4'>
                    {/* month selection */}
                    <div>
                        <label className='block text-md font-medium text-rose-500 mb-2'>
                            Month
                        </label>
                        <select name="month">
                            {Array.from({length: 12}, (_, i) => i+1).map((m) => (
                                <option value={m} key={m}>
                                    {m}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* year selection */}
                    <div>
                        <label className='block text-md font-medium text-rose-500 mb-2'>
                            Year
                        </label>
                        <input type="number" name="year" defaultValue={new Date().getFullYear()} />
                    </div>
                </div>

                {/* basic salary */}
                <div>
                    <label className='block text-md font-medium text-rose-500 mb-2'>
                        Basic Salary
                    </label>
                    <input type="number" name="basicSalary" required placeholder='5000' />
                </div>

                {/* allowances and deductions */}
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-md font-medium text-rose-500 mb-2'>
                            Allowances
                        </label>
                        <input type="number" name="allowances" defaultValue={0} />
                    </div>
                    {/* deductions */}
                    <div>
                        <label className='block text-md font-medium text-rose-500 mb-2'>
                            Deductions
                        </label>
                        <input type="number" name="deductions" defaultValue={0} />
                    </div>
                </div>

                {/* buttons */}
                <div className='flex justify-end gap-3 pt-2'>
                    <button className='btn-secondary' type='button' onClick={() => setIsOpen(false)}>
                        Cancel
                    </button>
                    <button className='btn-primary flex items-center' type='submit' disabled={loading}>
                        {loading && <Loader2 className='w-4 h-4 mr-2 animate-spin'/>}
                        Generate
                    </button>
                </div>
             </form>
         </div>
    </div>
  )
}

export default GeneratePayslipForm