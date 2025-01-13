import { useEffect, useRef, useState } from "react";

type File = {
  name: string,
}

export default function FileList() {
  const linkRef = useRef(null);
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    const getFiles = async() => {
      const response = await fetch(`${window.location.origin}/api/files`)
      const filesResponse = await response.json()
      setFiles((filesResponse.data))
    }
    getFiles()    
  }, []);

  const getDownloadLink = (filename: string) => `${window.location.origin}/api/downloadFiles/${filename}`

  const handleDownload = async (filename: string) => {
    const response = await fetch(`${window.location.origin}/api/downloadFiles/${filename}`)
    const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = linkRef.current as HTMLAnchorElement | null

		if (!link) {
			return
		}

		link.href = url;
		link.download = filename;
		link.click();
		window.URL.revokeObjectURL(url);
  }

  return (
    <ul className="space-y-2">
      {files.length === 0 ? (
        <li className="text-gray-500">No files uploaded yet.</li>
      ) : (
        files.map((file: File) => (
          <li key={file.name} className="flex items-center justify-between bg-gray-50 p-2 rounded">
            <span>{file.name}</span>
            <a
              href={getDownloadLink(file.name)}
              download
              className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              onClick={() => handleDownload(file.name)}
            >
              Download
            </a>
          </li>
        ))
      )}
    </ul>
  )
}