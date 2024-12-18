interface Employee {
    id: string
    fullName: string
    position: string
    email: string
  }
  
  export default function EmployeeTable({ employees }: { employees: Employee[] }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{employee.fullName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{employee.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {employees.length === 0 && (
          <p className="text-center py-4 text-gray-400">No employees found.</p>
        )}
      </div>
    )
  }
  
  