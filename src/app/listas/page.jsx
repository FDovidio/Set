import { prisma } from "@/libs/prisma";
import ListCard from "@/app/componnents/ListCard";

async function loadLists() {
  return await prisma.list.findMany();
}

async function Listas() {
  const lists = await loadLists();


  return (
    <div className="container mx-auto max-w-screen-xl  ">
      <div className="grid grid-cols-3 gap-3 mt-10 mx-4">
        {lists.map((list) => (
          <ListCard list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
}

export default Listas;
