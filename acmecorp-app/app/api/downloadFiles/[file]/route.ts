import { NextResponse } from 'next/server';
import { fileService } from '../../../fileService';

export async function GET(req: Request) {
  try {
    const filename = req.url.split('/').slice(-1).join()
    const fileContent = await fileService.downloadFile(filename);
    
    return new NextResponse(fileContent, { 
      status: 200, 
    });
  } catch (error) {
    console.error("Error creating downloadable file: ", error);
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