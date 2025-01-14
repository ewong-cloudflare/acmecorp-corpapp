'use client'

function SubmitButton() {
  return (
    <button
      type="submit"
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black disabled:bg-black"
    >
      Upload
    </button>
  )
}

export default function FileUploadForm() {
  async function handleSubmit(formData: FormData) {
    const response = await fetch(`${window.location.origin}/api/files`, {
      method: "POST", 
      body: formData,
    })
    const r = await response.json()
     // Temporary workaround to trigger page reload
    location.reload()
    return r;
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <input type="file" name="file" required className="border p-2 rounded w-full" />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}