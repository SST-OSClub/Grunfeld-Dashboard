import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

export async function POST(req: NextRequest) {
    try {
        const { DownloadLink } = await req.json();

        if(!DownloadLink){
            return NextResponse.json({ error: "Download link not provided" }, { status: 400 });
        }

        const response = await axios.get(
            DownloadLink,
            { responseType: "blob" }
        );
        return new NextResponse(response.data,
             { status: 200,
                headers: { "Content-Type": response.headers["content-type"],
                            "Content-Disposition": `attachment; filename=${DownloadLink?.split("/").pop() || "Download"}`,
        },
    });
    } catch (error) {
        console.error("Error downloading", error);
        return NextResponse.json({ error: "Error downloading" }, { status: 500 });
    }
}
