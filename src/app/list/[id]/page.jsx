'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const List = ({params}) => {
const [data, setData] = useState ([])
const [songs, setSongs] = useState ([])

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
    <>
      <header className=' border-2 border-dashed border-white m-2 p-1'>
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
            <button
              className="relative block border border-current bg-white px-8 py-3">
              New Song
            </button>
          </div>
          </Link>
        </div>
      </header>
      {songs.length > 0 ? (
        songs.map((song) => (
          <article
            className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 m-2"
            key={song.name}>
            <div className="flex items-start sm:gap-8">
              {song.name}
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

              <div>
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  Episode #101
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <a href="" className="hover:underline">
                    {" "}
                    Some Interesting Podcast Title{" "}
                  </a>
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut
                  necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
                </p>

                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>

                    <p className="text-xs font-medium">48:32 minutes</p>
                  </div>

                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Featuring{" "}
                    <a href="#" className="underline hover:text-gray-700">
                      Barry
                    </a>
                    ,
                    <a href="#" className="underline hover:text-gray-700">
                      Sandra
                    </a>{" "}
                    and
                    <a href="#" className="underline hover:text-gray-700">
                      August
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <h4 className="m-2">Agregue</h4>
      )}
    </>
  );
}

export default List