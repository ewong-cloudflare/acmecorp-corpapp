import { NextResponse } from 'next/server';
import { fileService } from '../../fileService';
 
export async function GET() {
  try {
    const result = await fileService.getAllFiles();
    return NextResponse.json(
      { data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching files: ", error);
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = (formData.get('file') as Blob) || null;
    const result = await fileService.uploadFile(file);
    return NextResponse.json(
      { message: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading file: ", error);
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}