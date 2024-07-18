import Connect from "@/utils/database/db";
import { NextResponse } from 'next/server';

export const GET = async (request: any) => {
    

    await Connect()

}