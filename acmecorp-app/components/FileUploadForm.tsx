'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black disabled:bg-black"
    >
      {pending ? 'Uploading...' : 'Upload'}
    </button>
  )
}

export default function FileUploadForm() {
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    console.log("TODO")
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <input type="file" name="file" required className="border p-2 rounded w-full" />
      </div>
      <div>
        <SubmitButton />
      </div>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </form>
  )
}

