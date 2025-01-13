import { PrismaClient } from "@prisma/client";

class EmployeeService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllEmployees() {
    try {
      const employees = await this.prisma.employee.findMany({
        select: {
          id: true,
          name: true,
          position: true,
          email: true,
        },
      });
      return employees;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  }

  async createEmployee(data: any) {
    try {
      const employee = await this.prisma.employee.create({
        data,
      });
      return employee;
    } catch (error) {
      console.error("Error creating employee:", error);
      throw error;
    }
  }
}

export const employeeService = new EmployeeService();