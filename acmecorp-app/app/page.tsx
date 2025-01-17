'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./../components/Hero";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import ExportButton from "../components/ExportButton";

export default function Home() {

  return (
    <main className="min-h-screen bg-black py-24">
      <section className="min-h-64 text-center flex flex-col items-center w-full">
        <Image
          className={`${styles.logo} mx-auto`}
          src="/acme-black.svg"
          alt="Acmecorp logo"
          width={180}
          height={38}
          priority
        />
        <Hero />
      </section>
     
      <section className="min-h-32">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-black">Add New Employee</h2>
              <EmployeeForm />
            </section>
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-2 mb-2">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-black">Employee Records</h2>
                  </div>
                  <div className="text-right">
                    <ExportButton />
                  </div>
              </div>
              <EmployeeTable />
            </section>
          </div>
        </div>
      </section>
  </main>
  );
}