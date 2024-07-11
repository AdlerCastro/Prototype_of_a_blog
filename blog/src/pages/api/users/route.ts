import connect from "backend/database/db";
import User from "backend/models/User";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const Get = async (req:NextApiRequest) => {
    try {
        await connect();

        return new NextResponse("welcome", {status: 200})
    } catch (error) {
        return new NextResponse("Error in fetching users" + error, {status: 500})
    }
}

export default Get