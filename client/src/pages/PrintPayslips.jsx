import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { dummyPayslipData } from "../assets/assets";
import Loading from "../components/Loading";
import { format } from "date-fns";

const PrintPayslips = () => {

  const {id} = useParams();
  const [payslip, setPayslip] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPayslip(dummyPayslipData.find((slip) => slip._id === id))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!payslip) {
    return <p className="text-center py-12 text-red-800 font-medium">Payslip not Found</p>
  }
  
  return (
    <div className="max-w-2xl mx-auto p-8 bg-rose-50 animate-fade-in">
      <div className="text-center border-b border-cyan-500 pb-6 mb-8">
        <h1 className="text-2xl font-bold text-lime-600 tracking-tight">
          PAYSLIP
        </h1>
        <p className="text-md mt-1 text-emerald-500">
          {format(new Date(payslip.year, payslip.month -1), "MMMM yyyy")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-md text-blue-500 uppercase tracking-wider mb-1">
            Employee Name
          </p>
          <p className="font-semibold text-pink-500">
            {payslip.employee?.firstName} {payslip.employee?.lastName}
          </p>
        </div>
        <div>
          <p className="text-md text-blue-500 uppercase tracking-wider mb-1">
            Position
          </p>
          <p className="font-semibold text-pink-500">
            {payslip.employee?.position}
          </p>
        </div>
        <div>
          <p className="text-md text-blue-500 uppercase tracking-wider mb-1">
            Email
          </p>
          <p className="font-semibold text-pink-500">
            {payslip.employee?.email}
          </p>
        </div>
        <div>
          <p className="text-md text-blue-500 uppercase tracking-wider mb-1">
            Period
          </p>
          <p className="font-semibold text-pink-500">
            {format(new Date(payslip.year, payslip.month -1), "MMMM yyyy")}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-yellow-400 overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-emerald-100">
              <th className="text-left py-3 px-4 text-sm text-rose-500 uppercase tracking-wide">
                Description
              </th>
              <th className="text-right py-3 px-4 text-sm text-rose-500 uppercase tracking-wide">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-red-400">
              <td className="py-3 px-4 text-indigo-500">
                Basic Salary
              </td>
              <td className="py-3 px-4 text-indigo-500 font-medium text-right">
                ${payslip.basicSalary?.toLocaleString()}
              </td>
            </tr>
            <tr className="border-t border-red-400">
              <td className="py-3 px-4 text-indigo-500">
                Allowances
              </td>
              <td className="py-3 px-4 text-indigo-500 font-medium text-right">
                +${payslip.allowances?.toLocaleString()}
              </td>
            </tr>
            <tr className="border-t border-red-400">
              <td className="py-3 px-4 text-indigo-500">
                Deductions
              </td>
              <td className="py-3 px-4 text-indigo-500 font-medium text-right">
                -${payslip.deductions?.toLocaleString()}
              </td>
            </tr>
            <tr className="border-t-2 border-red-400 bg-sky-100">
              <td className="py-4 px-4 font-bold text-indigo-700 text-md">
                Net Salary
              </td>
              <td className="py-4 px-4 text-indigo-700 font-bold text-right text-md">
                ${payslip.netSalary?.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button className="btn-primary print:hidden" onClick={() => window.print()}>
          Print Payslip
        </button>
      </div>
    </div>
  )
}

export default PrintPayslips