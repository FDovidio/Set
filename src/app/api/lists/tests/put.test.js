// put.test.js
const {PUT} = require('src/app/api/lists/[id]/route');
const prisma = require('./src/libs/prisma'); 

jest.mock('./src/libs/prisma', () => ({
  list: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
}));

const NextResponse = {
  json: jest.fn(),
};

describe('PUT function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should update list successfully', async () => {
    const request = {
      json: jest.fn().mockResolvedValue({
        user: 'newUser',
        title: 'newTitle',
        genero: 'newGenero',
        description: 'newDescription',
        songs: [
          {
            name: 'newSong',
            artist: 'newArtist',
            genero: 'newGenero',
            intensidad: 'newIntensidad',
          },
        ],
      }),
    };

    const params = { id: 1 };

    const existingList = {
      id: 1,
      user: 'oldUser',
      title: 'oldTitle',
      genero: 'oldGenero',
      description: 'oldDescription',
      songs: [
        {
          name: 'oldSong',
          artist: 'oldArtist',
          genero: 'oldGenero',
          intensidad: 'oldIntensidad',
        },
      ],
    };

    prisma.list.findUnique.mockResolvedValue(existingList);
    prisma.list.update.mockResolvedValue(existingList);

    await PUT(request, { params });

    expect(prisma.list.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(prisma.list.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        user: 'newUser',
        title: 'newTitle',
        genero: 'newGenero',
        description: 'newDescription',
        songs: {
          updateMany: [
            {
              data: {
                name: 'newSong',
                artist: 'newArtist',
                genero: 'newGenero',
                intensidad: 'newIntensidad',
              },
            },
          ],
        },
      },
      include: { songs: true },
    });

    expect(NextResponse.json).toHaveBeenCalledWith(existingList);
  });

  test('should return 404 if list is not found', async () => {
    const request = {
      json: jest.fn().mockResolvedValue({
        user: 'newUser',
        title: 'newTitle',
        genero: 'newGenero',
        description: 'newDescription',
        songs: [
          {
            name: 'newSong',
            artist: 'newArtist',
            genero: 'newGenero',
            intensidad: 'newIntensidad',
          },
        ],
      }),
    };

    const params = { id: 1 };

    prisma.list.findUnique.mockResolvedValue(null);

    await PUT(request, { params });

    expect(prisma.list.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Lista no encontrada' },
      { status: 404 }
    );
  });

  // Agrega más tests según sea necesario para cubrir otros casos y errores posibles.
});
