import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'



export async function GET () {
    const lists = await prisma.list.findMany();
return NextResponse.json(lists)
}

export async function POST (request) {
const {user, title, genero, description} = await request.json();
const newList= await prisma.list.create({
data:{
user: "fran" ,
title,
genero,
description
}
})
return NextResponse.json(newList)
}

