'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {useState} from 'react'

const NewPage = () => {

  const router = useRouter()
  
  const [title, setTitle] = useState('')
  const [genero, setGenero] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
        await fetch(`/api/lists`, {
        method: "POST",
        body: JSON.stringify({ title, genero, description }),
        headers: {
          "Content-type": "application/json",
        },
      });
        router.refresh()
          router.push("/listas");
  }



  return (
    <div className=" max-w-screen-xl  border-2 border-dashed border-white m-4">
      <div className=" min-w-lg bg-gray-50 border-2 rounded-lg m-2">
        <h1 className="text-center text-xl font-medium  text-black sm:text-3xl p-6">
          Create a new list
        </h1>

        <form
          onSubmit={onSubmit}
          className="mb- mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8">
          <div>
            <div></div>

            <label htmlFor="title" className="text-black mt-4 mb-4">
              Titulo:
            </label>

            <div className="relative">
              <input
                type="title"
                className="w-full rounded-lg border-gray-200 p-3  text-sm shadow-xl text-black"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="text-black mt-4 mb-4">
              Gender:
            </label>
            <div className="relative">
              <input
                type="gender"
                className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-xl text-black"
                placeholder="Enter Gender"
                onChange={(e) => setGenero(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="text-black mt-4 mb-4">
              Description
            </label>
            <div className="relative">
              <input
                type="description"
                className="w-full  rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-xl text-black"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="group relative inline-block text-sm font-medium text-blackfocus:outline-none focus:ring active:text-blue-950 mt-4">
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

            <button className="relative block border border-black bg-white px-8 py-3 text-black"
            type='submit'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPage