import React, { useCallback, useEffect, useState } from 'react'
import { dummyLeaveData } from '../assets/assets'
import Loading from '../components/Loading'
import { PalmtreeIcon, PlusIcon, ThermometerIcon, UmbrellaIcon } from 'lucide-react'
import LeaveHistory from '../components/leave/LeaveHistory'
import ApplyLeaveModal from '../components/leave/ApplyLeaveModal'

const Leave = () => {

  const [leaves, setLeaves] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false);
  const isAdmin = false;

  const fetchLeaves = useCallback(() => {
    setLeaves(dummyLeaveData)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  useEffect(() => {
    fetchLeaves()
  }, [fetchLeaves])

  if(loading)
    return <Loading />


  const approvedLeaves = leaves.filter((l) => l.status === "APPROVED");
  const sickCount = approvedLeaves.filter((l) => l.type === "SICK").length;
  const casualCount = approvedLeaves.filter((l) => l.type === "CASUAL").length;
  const annualCount = approvedLeaves.filter((l) => l.type === "ANNUAL").length;

  const leaveStats = [
    {
      label: "Sick Leave",
      value: sickCount,
      icon: ThermometerIcon,
    },
    {
      label: "Casual Leave",
      value: casualCount,
      icon: UmbrellaIcon,
    },
    {
      label: "Annual Leave",
      value: annualCount,
      icon: PalmtreeIcon,
    },
  ]

  return (
    <div className='animate fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
        <div>
          <h1 className='page-title'>
            Leave Management
          </h1>
          <p className='page-subtitle'>
            {isAdmin ? "Manage Leave Applications" : "Your leave history"}
          </p>
        </div>
        {!isAdmin && !isDeleted && (
          <button onClick={() => setShowModal(true)}
          className='btn-primary flex items-center gap-2 w-full sm:w-auto justify-center'>
            <PlusIcon className='w-4 h-4'/>Apply for leave
          </button>
        )}
      </div>

      {/* Leave stats */}
      {!isAdmin && (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8'>
          {leaveStats.map((s) => (
            <div className='card card-hover p-5 sm:p-6 flex items-center gap-4 relative overflow-hidden group' 
            key={s.label}>
              <div className='absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-pink-300 group-hover:bg-cyan-300'/>
              <div className='p-3 bg-emerald-200 rounded-lg group-hover:text-violet-400 group-hover:bg-indigo-300
              transition-colors duration-200'>
                <s.icon className='w-5 h-5 text-sky-500 group-hover:text-rose-500 transition-colors duration-200'/>
              </div>
              <div>
                <p className='text-sm text-pink-600'>
                  {s.label}
                </p>
                <p className='text-2xl font-bold text-lime-400 tracking-tight'>
                  {s.value}
                  <span className='text-sm font-normal text-cyan-500 p-2'>
                    taken
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <LeaveHistory leaves={leaves} isAdmin={isAdmin} onUpdate={fetchLeaves}/>
      <ApplyLeaveModal open={showModal} onClose={() => setShowModal(false)} onSuccess={fetchLeaves}/>

    </div>
  )
}

export default Leave