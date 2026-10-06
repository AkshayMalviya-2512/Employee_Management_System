import React, { useEffect, useState } from "react"
import { dummyProfileData } from "../assets/assets"
import Loading from "../components/Loading"
import { Lock } from "lucide-react";
import ProfileForm from "../components/ProfileForm";
import ChangePasswordModal from "../components/ChangePasswordModal";

const Settings = () => {

  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const fetchProfile = async () => {
    setProfile(dummyProfileData)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if (loading) {
    return <Loading />
  }
  
  return (
    <div className="animate-fade-in">

      {/* page header */}
      <div className="page-header">
        <h1 className="page-title">
           Settings
        </h1>
        <p className="page-subtitle">
          Manage your account
        </p>
      </div>

      {/* profile form to display profile data */}
      {profile && <ProfileForm initialData={profile} onSuccess={fetchProfile}/>}

      {/* change password trigger */}
      <div className="!bg-pink-100 hover:bg-lime-200 card max-w-md p-6 flex items-center justify-between !rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-100 rounded-lg hover:bg-rose-100">
            <Lock className="w-5 h-5 text-rose-600 hover:text-teal-600"/>
          </div>
          <div>
            <p className="font-medium text-violet-700">Password</p>
            <p className="text-sm text-violet-500">Update your account password</p>
          </div>
        </div>
        <button onClick={() => setShowPasswordModal(true)} className="btn-secondary text-md">
          Change
        </button>
      </div>
      <ChangePasswordModal open={showPasswordModal} onClose={() => setShowPasswordModal(false)}/>
    </div>
  )
}

export default Settings