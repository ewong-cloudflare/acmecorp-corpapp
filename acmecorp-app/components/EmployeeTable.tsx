import { useEffect, useState } from "react";

interface Employee {
    id: string
    name: string
    position: string
    email: string
  }
  
  export default function EmployeeTable() {
    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
      const getEmployees = async() => {
        const response = await fetch(`${window.location.origin}/api/employees`)
        const employeesResponse = await response.json()
        setEmployees(employeesResponse.data);
      }
      getEmployees()    
    }, []);
    
    return (
      <div className="overflow-x-auto">
        {(employees == undefined || employees?.length === 0) ? (
          <p className="text-center py-4 text-gray-400">No employees found.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {employees?.map((employee: Employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
  }