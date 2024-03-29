import fakePosts from "@/fakePosts";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(fakePosts);
}

export async function POST(req, res) {
  await cors(req, res);

  console.log("entered in post");
  if (req.method === "POST") {
    const postData = req.body;
    if (!postData) {
      return NextResponse.json({
        message: "Bad Request: No data provided",
      });
    }
    fakePosts.push(postData);
    return NextResponse.json({ message: "Post received", postData });
  } else {
    return NextResponse.json({ message: "Method Not Allowed" });
  }
}
