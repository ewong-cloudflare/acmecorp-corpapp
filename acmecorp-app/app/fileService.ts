import path from "path";
import fs from "fs";

const UPLOAD_DIR = './uploads'

class FileService {
  async getAllFiles() {
    try {
      return fs.readdirSync(UPLOAD_DIR, {withFileTypes: true})
        .filter(item => !item.isDirectory())
    } catch (error) {
      console.error("Error fetching files:", error);
      throw error;
    }
  }

  async downloadFile(filename: string) {
    try {
      const filePath = path.join(process.cwd(), UPLOAD_DIR, filename);
      const fileContent = await fs.readFileSync(filePath)
      return fileContent
    } catch (error) {
      console.error("Error creating downloadable file: ", error);
      throw error;
    }
  }

  async uploadFile(file: any) {
    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR);
      }
      
      const sanitizedFilename = this.sanitize(file.name)

      fs.writeFileSync(
        path.resolve(UPLOAD_DIR, `${Date.now()}_${sanitizedFilename}`),
        buffer
      );
      console.log('file uploaded')
    } catch (error) {
      console.error("Error uploading file: ", error);
      throw error;
    }
  }

  sanitize(filename: string) {
    return filename.replace(/\s+/g, "_")
  } 
}

export const fileService = new FileService();