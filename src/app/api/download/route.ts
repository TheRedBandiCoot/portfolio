import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';

export async function GET(req: NextRequest) {
  const path = `download/resume.txt`;
  const { size } = await fs.stat(path);
  const file = await fs.readFile(path);
  const extension = path.split('.').pop();

  return new NextResponse(file, {
    headers: {
      'Content-Disposition': `attachment; filename=resume.${extension}`,
      'Content-length': size.toString()
    }
  });
}
