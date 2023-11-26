"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const List = ({ params }) => {
  const [data, setData] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`/api/lists/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from API:", data);
        setData(data);
        setSongs(data.songs || []);
        console.log("Songs from API:", data.songs);
        console.log("Songs from API:", songs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params.id]);

  return (
    <div>
      <header className=" border-2 border-dashed border-white m-2 p-1">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex justify-between border-dashed border-white bg-slate-50">
          <div className="sm:flex sm:items-center sm:justify-between ">
            <div className="text-center sm:text-left ">
              <h1 className="text-2xl font-bold text-gray sm:text-3xl text-black ">
                {data.title}
              </h1>
            </div>
          </div>
          <Link href={`/newSong/${params.id}`}>
            <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-blue-950 mt-4">
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
              <button className="relative block border border-current bg-white px-8 py-3">
                New Song
              </button>
            </div>
          </Link>
        </div>
      </header>
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-3 gap-3 mt-10 mx-4">
          {songs.length > 0 ? (
            songs.map((song) => (
              <article
                className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 m-2"
                key={song.name}>
                <div className="flex items-start sm:gap-8">
                  <div
                    className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                    aria-hidden="true">
                    <div className="flex items-center gap-1">
                      <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                      <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                      <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                      <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                      <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <h2 className="mt-1 text-lg font-medium sm:text-xl text-black">
                        {song.name}
                      </h2>
                      <h4 className="mt-1 text-lg font-medium sm:text-lg text-black">
                        {song.artist}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm text-gray-700">{song.genero}</p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1 text-black">
                        <p className="text-lg font-medium">{song.intensidad}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <h4 className="m-2">Agregue</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
