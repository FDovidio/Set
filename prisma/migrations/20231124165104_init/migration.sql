-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "intensidad" TEXT NOT NULL,
    "listId" INTEGER NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Song_listId_key" ON "Song"("listId");

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
