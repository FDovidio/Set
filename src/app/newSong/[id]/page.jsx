'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'




const NewSong = ({params}) => {
  const router = useRouter()

     const [name, setName] = useState("");
     const [artist, setArtist] = useState("");
     const [genero, setGenero] = useState("");
    const [intensidad, setIntensidad] = useState("");
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await fetch(`/api/lists/${params.id}`, {
          method: "PUT",
          body: JSON.stringify({ name, artist, genero, intensidad }),
          headers: {
            "Content-type": "application/json",
          },
        });
        router.refresh();
        router.push("/listas");
      };

  return (
    <div className="border-2 border-dashed border-white m-4">
      <form className=" m-2 mx-2 p-1  min-w-lg bg-slate-50  px-5 text-black"
      onSubmit={onSubmit}
      >
        <h1 className="text-center text-xl font-medium  text-black sm:text-3xl p-6">
          New Song
        </h1>
        <div className="mt-4 mb-4 ">
          <label for="nombre">Name:</label>
          <input
            type="text"
            id="nombre"
            className="w-full rounded p-3 shadow-xl border-gray-500"
            placeholder='Enter Name'
            onChange={(e) => setName(e.target.value)}
            required>
            
            </input>
        </div>
        <div className="mt-4 mb-4">
          <label for="artista">Artist:</label>
          <input
            type="text"
            id="artista"
            className="w-full rounded p-3 shadow-xl border-gray-500"
            placeholder='Enter Artist'
            onChange={(e) => setArtist(e.target.value)}
            required></input>
        </div>
        <div className="mt-4 mb-4">
          <label for="genero">Gender:</label>
          <input
            type="text"
            id="genero"
            className="w-full rounded p-3 shadow-xl border-gray-500"
            placeholder='Enter Gender'
            onChange={(e) => setGenero(e.target.value)}
            required></input>
        </div>
        <div className="mt-4 mb-4">
          <label for="genero">Intensity:</label>
          <input
            type="text"
            id="genero"
            className="w-full rounded p-3 shadow-xl border-gray-500"
            placeholder='Enter Intensity'
            onChange={(e)=> setIntensidad(e.target.value)}
            required></input>
        </div>
        <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-blue-950 mt-4 me-2 my-2">
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
          <button className="relative block border border-current bg-white px-8 py-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewSong