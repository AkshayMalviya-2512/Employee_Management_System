import { Loader2, Save, User } from 'lucide-react'
import React, { useState } from 'react'

const ProfileForm = ({initialData, onSuccess}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit =async (e) => {
        e.preventDefault();
    }
    
  return (
    <form onSubmit={handleSubmit} className='card p-5 sm:p-6 mb-6'>
        <h2 className='text-base font-medium text-cyan-600 mb-6 pb-4 border-b border-purple-300 flex items-center gap-2'>
            <User className='w-5 h-5 text-red-500 bg-yellow-100 rounded-md'/> Public Profile
        </h2>

        {error && (
            <div className='bg-emerald-100 text-sky-600 p-4 rounded-xl text-sm border border-red-300 
            mb-6 flex items-center gap-3'>
                <div className='w-1.5 h-1.5 rounded-full bg-rose-300 mt-1.5 shrink-0'/>
                {error}
            </div>
        )}

        {message && (
            <div className='bg-rose-100 text-purple-600 p-4 rounded-xl text-sm border 
            border-blue-300 mb-6 flex items-start gap-3'>
                <div className='w-1.5 h-1.5 rounded-full bg-emerald-300 mt-1.5 shrink-0'/>
                {message}
            </div>
        )}

        <div className='space-y-5'>
            <div className='grid grid-col-1 sm:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-medium text-rose-500 mb-2'>
                        Name
                    </label>
                    <input disabled value={`${initialData.firstName} ${initialData.lastName}`}
                    className='cursor-not-allowed bg-violet-50 text-fuchsia-600'/>
                </div>
                <div>
                    <label className='block text-sm font-medium text-rose-500 mb-2'>
                        Email
                    </label>
                    <input disabled value={`${initialData.email}`}
                    className='cursor-not-allowed bg-violet-50 text-fuchsia-600'/>
                </div>
                <div className='sm:col-span-2'>
                    <label className='block text-sm font-medium text-rose-500 mb-2'>
                        Position
                    </label>
                    <input disabled value={`${initialData.position}`}
                    className='cursor-not-allowed bg-violet-50 text-fuchsia-600'/>
                </div>
            </div>
            <div>
                <label className='block text-sm font-medium text-rose-500 mb-2'>
                    Bio
                </label>
                <textarea disabled={initialData.isDeleted} name="bio" defaultValue={initialData.bio || ""} 
                placeholder='Brief bio....' className={`resize-none ${initialData.isDeleted ? 
                "bg-violet-50 text-rose-500 cursor-not-allowed" : "bg-rose-50"}`}/>
                <p className='text-xs text-purple-400 mt-1'>
                    This will be displayed on your profile.
                </p>
            </div>
            {initialData.isDeleted ? (
                <div className='pt-2'>
                    <div className='p-4 border border-red-400 rounded-xl bg-cyan-50 text-center'>
                        <p className='text-md text-rose-500 tracking-tight font-medium'>
                            Account deactivated
                        </p>
                        <p className='text-sm text-rose-300 mt-1'>
                            You can no longer update your profile
                        </p>
                    </div>
                </div>
            ) : (
                <div className='flex justify-end pt-2'>
                    <button className='btn-primary flex items-center gap-2 justify-center w-full sm:w-auto'
                    type='submit' disabled={loading}>
                        {loading ? <Loader2 className='w-4 h-4 animate-spin'/> : <Save className='w-4 h-4'/>}
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    </form>
  )
}

export default ProfileForm