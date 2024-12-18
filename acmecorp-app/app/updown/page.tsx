import Image from "next/image";
import styles from "./../page.module.css";
import FileUploadForm from "../../components/FileUploadForm";
import FileList from "../../components/FileList";

export default function Home() {
  // TODO: to implement
  //const files = await getUploadedFiles()
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
      </section>
     
      <section className="min-h-32">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">File Upload and Download</h1>
        <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upload a File</h2>
          {/* <FileUploadForm uploadFile={uploadFile} /> */}
          <FileUploadForm />
        </section>
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
          {/* TODO: implement getting files */}
          {/* <FileList files={files} /> */}
          <FileList files={[]} />
        </section>
      </div>
      </section>
  </main>
  );
}
