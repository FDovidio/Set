import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'




export async function GET (request, {params}){

    const list = await prisma.list.findMany({
        where:{
            id:Number(params.id),
        }
    })
    

    return NextResponse.json(list)
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const listId = parseInt(params.id);

  try {
    const existingList = await prisma.list.findUnique({
      where: { id: listId },
    });

    if (!existingList) {
      return NextResponse.json({ error: 'Lista no encontrada' }, { status: 404 });
    }
    const updatedList = await prisma.list.update({
      where: { id: listId },
      data: {
        user: data.user || existingList.user,
        title: data.title || existingList.title,
        genero: data.genero || existingList.genero,
        description: data.description || existingList.description,
        songs: {
          updateMany: data.songs.map((song) => ({
            data: {
              name: song.name,
              artist: song.artist,
              genero: song.genero,
              intensidad: song.intensidad,
            },
          })),
        },
      },
      include: { songs: true },
    });

    return NextResponse.json(updatedList);
  } catch (error) {
    console.error('Error al actualizar lista y canciones:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}






export async function DELETE (request, {params}){
    try {
          const listDeleted = await prisma.list.delete({
        where:{
            id: (params.id),
        }
    })
    
    return NextResponse.json(listDeleted)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}
