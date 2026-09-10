import { AlertCircleIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import React from 'react'

const AttendanceStats = ({ history }) => {

    const totalPresent = history.filter((h) => h.status === "Present" || h.status === "Late").length;

    const totalLate = history.filter((h) => h.status === "Late").length;

    const stats = [
        {
            label: "Days Present",
            value: totalPresent,
            icon: CalendarIcon
        },
        {
            label: "Late Arrivals",
            value: totalLate,
            icon: AlertCircleIcon
        },
        {
            label: "Average Work Hours",
            value: "8hrs",
            icon: ClockIcon
        },
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8'>
            {stats.map((s) => (
                <div key={s.label} 
                className='card card-hover p-5 sm:p-6 flex items-center gap-4 relative overflow-hidden group'>
                    <div className='absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-red-200 group-hover:bg-amber-300'/>
                    <div className='p-3 bg-fuchsia-200 rounded-lg group-hover:bg-pink-300 transition-colors duration-200'>
                        <s.icon className='w-5 h-5 text-emerald-500 group-hover:text-sky-400 transition-colors duration-200'/>
                    </div>
                    <div>
                        <p className='text-sm text-pink-500'>
                            {s.label}
                        </p>
                        <p className='text-2xl font-medium text-red-300 text-tight'>
                            {s.value}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AttendanceStats