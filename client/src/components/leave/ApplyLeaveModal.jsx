import React, { useState } from 'react'
import { CalendarDays, FileText, Loader2, Send, X } from "lucide-react";

const ApplyLeaveModal = ({open, onSuccess, onClose}) => {

    const [loading, setLoading] = useState(false);
    const today = new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    if (!open) {
      return null
    }
    
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-lime-50/40 backdrop-blur-sm' 
    onClick={onClose}>
      <div className='relative bg-green-100 rounded-2xl shaodw-2xl w-full max-w-lg animate-fade-in' 
      onClick={(e) => e.stopPropagation()}>
        
        {/* header content */}
        <div className='flex items-center justify-between p-6 pb-0'>
          <div>
            <h2 className='text-lg font-semibold text-cyan-600'>
              Apply for Leave
            </h2>
            <p className='text-md text-red-500 mt-1'>
              Submit leave request for approval
            </p>
          </div>
          <button className='p-2 rounded-lg bg-lime-200 text-violet-400 hover:bg-teal-200 hover:text-red-400 transition-all' 
          onClick={onClose}>
            <X className='w-5 h-5'/>
          </button>
        </div>

        {/* form content */}
        <form onSubmit={handleSubmit} 
        className='p-6 space-y-5'>
          
          {/* leave type */}
          <div>
            <label className='flex items-center gap-2 text-md font-medium text-rose-500 mb-2'>
              <FileText className='w-5 h-5 text-indigo-400'/>
              Leave Type
            </label>
            <select name="type" required>
              <option value="SICK">Sick Leave</option>
              <option value="CASUAL">Casual Leave</option>
              <option value="ANNUAL">Annual Leave</option>
            </select>
          </div>

          {/* Leave duration */}
          <div>
            <label className='flex items-center gap-2 text-md font-medium text-rose-500 mb-2'>
              <CalendarDays className='w-5 h-5 text-indigo-400'/>
              Duration
            </label>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <span className='block text-sm text-pink-700 mb-1'>
                  From
                </span>
                <input type="date" name="startDate" required min={minDate} />
              </div>
              <div>
                <span className='block text-sm text-pink-700 mb-1'>
                  To
                </span>
                <input type="date" name="endDate" required min={minDate} />
              </div>
            </div>
          </div>

          {/* Leave reason */}
          <div>
            <label className='text-md font-medium text-rose-500 mb-2 block'>
              Reason
            </label>
            <textarea name="reason" required rows={3} 
            className='resize-none' placeholder='Breif description of your leave...'/>
          </div>

          {/* buttons */}
          <div className='flex gap-3 pt-2'>
            <button className='btn-secondary flex-1' type='button' onClick={onClose}>
              Cancel
            </button>

            <button className='btn-primary flex-1 flex items-center justify-center gap-2' 
            type='submit' onClick={onClose} disabled={loading}>
              {loading ? <Loader2 className='w-4 h-4 animate-spin'/> : <Send className='w-5 h-5'/>}
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplyLeaveModal