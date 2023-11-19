'use client'
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'



const ListCard = ({list}) => {

  return (
    <div className="group relative block h-60 sm:h-50 lg:h-70 ">
      <span className="absolute inset-0 border-2 border-dashed border-white"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 text-blue-950">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/pastel-glyph/64/list.png"
            alt="list"
          />

          <h2 className="mt-4 text-xl font-medium sm:text-2xl ">
            {list.title}
          </h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{list.title}</h3>

          <p className="mt-4 text-sm sm:text-base">{list.description}</p>
          <Link href={`/list/${list.id}`}>
            <div className="group relative inline-block text-sm font-medium text-blackfocus:outline-none focus:ring active:text-blue-950 mt-4">
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

              <button className="relative block border border-current bg-white px-8 py-3">
                Edit
              </button>
            </div>
          </Link>

          <div className="group relative inline-block text-sm font-medium text-blackfocus:outline-none focus:ring active:text-blue-950 mt-4 ml-2">
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

            <button
              className="relative block border border-current bg-white px-8 py-3"
              onClick={async () => {
                console.log("delete list");
                console.log(list.id);
                await fetch(`lists/${list.id}`, {
                  method: "DELETE",
                });
                ;
              
              }}  
              >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard