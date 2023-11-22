import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Resto de tu configuración de servidor





export async function GET (request, {params}){

    const list = await prisma.list.findMany({
        where:{
            id:Number(params.id),
        }
    })
    

    return NextResponse.json(list)
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const listId = Number(params.id);

    // Verificar si 'data.songs' es un array
    if (data.songs && !Array.isArray(data.songs)) {
      throw new Error('El campo songs debe ser un array.');
    }

    // Verificar si 'listId' es un número válido
    if (isNaN(listId)) {
      throw new Error('El parámetro id debe ser un número válido.');
    }

    const existingList = await prisma.list.findUnique({
      where: { id: listId },
    });

    if (!existingList) {
      return NextResponse.json({ error: 'Lista no encontrada' }, { status: 404 });
    }

    // Actualizar solo si hay cambios en los datos
    const updatedListData = {
      user: data.user || existingList.user,
      title: data.title || existingList.title,
      genero: data.genero || existingList.genero,
      description: data.description || existingList.description,
      songs: data.songs
        ? {
            updateMany: data.songs.map((song) => ({
              data: {
                name: song.name,
                artist: song.artist,
                genero: song.genero,
                intensidad: song.intensidad,
              },
            })),
          }
        : {},
    };

    const updatedList = await prisma.list.update({
      where: { id: listId },
      data: updatedListData,
      include: { songs: true },
    });

    return NextResponse.json(updatedList);
  } catch (error) {
    console.error('Error al actualizar lista y canciones:', error.message);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}




export async function DELETE (request, {params}){
    try {
                const listDeleted = await prisma.list.delete({
        where:{
            id: Number(params.id),
        }
    })
    
    return NextResponse.json(listDeleted)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}