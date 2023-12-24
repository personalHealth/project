import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  revalidatePath("/pelis");
  revalidatePath("/series");


  return NextResponse.json({ revalidated: true, now: Date.now() });
}
