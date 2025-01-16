'use client'

import { useState } from 'react'
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

interface Employee {
    id: string
    name: string
    position: string
    email: string
}

const doc = new jsPDF({
    orientation: 'l',
    unit: 'pt',
    format: 'a4'
})

const headers: string[] = ['NRIC', 'Name', 'Position', 'Email']

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false)

  const generatePDF = async() => {
    const response = await fetch(`${window.location.origin}/api/employees`)
    const employeesResponse = await response.json()
    const employees: Employee[] = employeesResponse.data

    const date = new Date()
    doc.text(`Acmecorp Employees (${date.getFullYear()})`, 20, 20);
    autoTable(doc, {
        head: [ headers ],
        body: employees.map((e: Employee) => [ e.id, e.name, e.position, e.email]),
    })
    
    doc.save(`${Date.now()}_employee_records.pdf`); 
  }

  const handleExport = async () => {
    setIsExporting(true)
    try {
        await generatePDF()
    } catch (error) {
      console.error('Error exporting PDF:', error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black"
    >
      {isExporting ? 'Exporting...' : 'Export PDF'}
    </button>
  )
}