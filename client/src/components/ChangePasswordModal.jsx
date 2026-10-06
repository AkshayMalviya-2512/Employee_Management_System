import { LockIcon, X } from 'lucide-react'
import React, { useState } from 'react'

const ChangePasswordModal = ({open, onClose}) => {

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({
        type: "",
        text: "",
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    if (!open) {
        return null
    }
    
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4' onClick={onClose}>
        <div className='absolute inset-0 bg-lime-50/40 backdrop-blur-sm'/>

        <div className='relative bg-sky-50 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in' 
        onClick={(e) => e.stopPropagation()}>
            <div className='flex items-center justify-between p-6 pb-0'>
                <h2 className='text-lg font-medium text-fuchsia-700 flex items-center gap-2'>
                    <LockIcon className='w-5 h-5 text-red-500'/>
                    Change Password
                </h2>
                <button className='text-blue-400 hover:text-red-400 p-1 bg-amber-300 hover:bg-yellow-200 rounded-lg'>
                    <X className='w-5 h-5'/>
                </button>
            </div>

            {/* password changing details form */}
            <form onSubmit={handleSubmit} className='p-6 space-y-5'>
                {message.text && (
                    <div className={`p-3 rounded-xl text-sm flex items-start gap-3 ${message.type === "success" ? 
                    "bg-emeerald-100 text-fuchsia-400 border border-red-300" : 
                    "bg-blue-100 text-rose-400 border border-teal-300"}`}>
                        <div className={`w-1 h-1 rounded-full mt-1 shrink-0 ${message.type === "success" ? "bg-emerald-400" 
                            : "bg-pink-400"}`}/>
                        {message.text}
                    </div>
                )}
                <div>
                    <label className='block text-md font-medium text-rose-500 mb-2'>
                        Current Password
                    </label>
                    <input type="password" name="currentPassword" required/>
                </div>
                <div>
                    <label className='block text-md font-medium text-rose-500 mb-2'>
                        New Password
                    </label>
                    <input type="password" name="newPassword" required/>
                </div>
                <div className='flex gap-3 pt-2'>
                    <button className='btn-secondary flex-1' type='button' onClick={onClose}>
                        Cancel
                    </button>
                    <button className='btn-primary flex-1 flex justify-center items-center gap-2' 
                    type='submit' disabled={loading}>
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ChangePasswordModal