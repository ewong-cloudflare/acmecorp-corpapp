'use client'

import { useState } from "react"

export default function EmployeeForm() {
  const [isAdding, setIsAdding] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsAdding(true)
    console.log("form data: ", formData.values())

    const employeeData: any = {}
    for (let keyValue of formData.entries()) {
      employeeData[keyValue[0]] = keyValue[1];
    }
    console.log(employeeData);

    const response = await fetch(`${window.location.origin}/api/employees`, {
        method: "POST", 
        body: JSON.stringify(employeeData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    const r = await response.json()
    setIsAdding(false)
    location.reload() // Temporary workaround
    return r;
  }

  const SubmitButton = () => {
    return (
      <button
        type="submit"
        disabled={isAdding}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black disabled:bg-black"
      >
        {isAdding ? 'Adding...' : 'Add Employee'}
      </button>
    )
  }

  return (
    <form id="employeeForm" action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="id" className="block text-sm font-medium text-gray-700">NRIC (without '-')</label>
        <input type="text" id="id" name="id" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
        <input type="text" id="position" name="position" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}