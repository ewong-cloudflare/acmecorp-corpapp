export default function FileList({ files }: { files: { name: string; url: string }[] }) {
    return (
      <ul className="space-y-2">
        {files.length === 0 ? (
          <li className="text-gray-500">No files uploaded yet.</li>
        ) : (
          files.map((file) => (
            <li key={file.name} className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span>{file.name}</span>
              <a
                href={file.url}
                download
                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                Download
              </a>
            </li>
          ))
        )}
      </ul>
    )
  }
  
  