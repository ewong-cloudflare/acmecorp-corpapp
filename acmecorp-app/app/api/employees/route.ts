import { NextResponse } from 'next/server';
import { employeeService } from '../../employeeService';
 
export async function GET() {
  try {
    const result = await employeeService.getAllEmployees();
    return NextResponse.json(
      { data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching employees: ", error);
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const employeeData = await req.json()
    const result = await employeeService.createEmployee(employeeData);
    return NextResponse.json(
      { message: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating employee: ", error);
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}