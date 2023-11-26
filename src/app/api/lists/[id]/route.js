import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'



export async function GET(request, { params }) {
  try {
    const listWithSongs = await prisma.list.findUnique({
      where: {
        id: Number(params.id),
      },
      include: {
        songs: true,
      },
    });

    if (!listWithSongs) {
      return NextResponse.json({ error: 'Lista no encontrada' }, { status: 404 });
    }

    return NextResponse.json(listWithSongs);
  } catch (error) {
    console.error('Error al obtener la lista y canciones:', error.message);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}


export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const listId = Number(params.id);

    const existingList = await prisma.list.findUnique({
      where: { id: listId },
      include: { songs: true },
    });

    if (!existingList) {
      return NextResponse.json({ error: 'Lista no encontrada' }, { status: 404 });
    }

    // Actualizar solo si hay cambios en los datos de la lista
    const updatedListData = {
      user: data.user || existingList.user,
      title: data.title || existingList.title,
      genero: data.genero || existingList.genero,
      description: data.description || existingList.description,
    };

    const updatedList = await prisma.list.update({
      where: { id: listId },
      data: updatedListData,
    });

    // Actualizar canciones si se proporcionan en la solicitud
    if (data.songs) {
      const updatedSongs = await prisma.song.createMany({
        data: data.songs.map((song) => ({
          name: song.name,
          artist: song.artist,
          genero: song.genero,
          intensidad: song.intensidad,
          listId: listId,
        })),
      
      });

      updatedList.songs = updatedSongs;
    }

    // Usar directamente la función `headers` en el objeto de respuesta
    updatedList.headers = {
      'Access-Control-Allow-Origin': `http://localhost:3000`,
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Access-Control-Allow-Credentials': 'true',
    };

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