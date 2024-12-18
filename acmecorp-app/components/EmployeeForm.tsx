'use client'

const SubmitButton = () => {
  return (
    <button
      type="submit"
    //   disabled={pending}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black disabled:bg-black"
    >
      {/* TODO: to implement pending state */}
      {/* {pending ? 'Adding...' : 'Add Employee'} */}
      Add Employee
    </button>
  )
}

export default function EmployeeForm() {
  const handleSubmit = async (formData: FormData) => {
    console.log("TODO")
  }

  return (
    <form id="employeeForm" action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
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

