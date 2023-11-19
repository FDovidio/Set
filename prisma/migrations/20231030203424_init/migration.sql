-- CreateTable
CREATE TABLE "List" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Song" (
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "intensidad" TEXT NOT NULL,
    "listId" INTEGER NOT NULL,
    CONSTRAINT "Song_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Song_listId_key" ON "Song"("listId");
