/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "employee_id_key" ON "employee"("id");
