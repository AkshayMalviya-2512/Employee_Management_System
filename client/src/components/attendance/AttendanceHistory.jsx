import React from 'react'
import { getDayTypeDisplay, getWorkingHoursDisplay } from '../../assets/assets'
import { format } from "date-fns";

const AttendanceHistory = ({history}) => {
  return (
    <div className='card overflow-hidden'>
      <div className='px-6 py-4 border-b border-violet-300'>
        <h3 className='font-semibold text-indigo-700'>
          Recent Activity
        </h3>
      </div>
      <div className='overflow-x-auto'>
        <table className='table-modern'>
          <thead>
            <tr>
              <th className='px-6 py-4'>Date</th>
              <th className='px-6 py-4'>Check In</th>
              <th className='px-6 py-4'>Check Out</th>
              <th className='px-6 py-4'>Working Hours</th>
              <th className='px-6 py-4'>Day Type</th>
              <th className='px-6 py-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td className='text-center py-12 text-teal-400' colSpan={6}>
                  No Records Found
                </td>
              </tr>
            ) : (
              history.map((record) => {
                const dayType = getDayTypeDisplay(record)
                return(
                  <tr key={record._id || record.id}>

                    {/* Displaying date */}
                    <td className='px-6 py-4 font-medium text-fuchsia-700'>
                      {format(new Date(record.date), "MMM dd yyyy")}
                    </td>

                    {/* Checkin record */}
                    <td className='px-6 py-4 font-medium text-fuchsia-700'>
                      {record.checkIn ? format(new Date(record.checkIn), "hh:mm a") : "-"}
                    </td>

                    {/* Checked out time */}
                    <td className='px-6 py-4 font-medium text-fuchsia-700'>
                      {record.checkOut ? format(new Date(record.checkOut), "hh:mm a") : "-"}
                    </td>

                    {/* Working hours */}
                    <td className='px-6 py-4 font-medium text-fuchsia-700 font-medium'>
                      {getWorkingHoursDisplay(record)}
                    </td>

                    {/* Day type display */}
                    <td className='px-6 py-4 font-medium text-fuchsia-700'>
                      {dayType.label !== "-" ? <span className={`badge ${dayType.className}`}>
                        {dayType.label}
                      </span> : "-"}
                    </td>

                    {/* status display */}
                    <td className='px-6 py-4 font-medium text-fuchsia-700'>
                      <span className={`badge ${record.status === "PRESENT" ? "badge-success" : record.status === "LATE" 
                        ? "badge-warning" : "badge-danger"}`}>
                        {record.status}
                      </span>
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

export default AttendanceHistory