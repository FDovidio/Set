import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/Logo.png';

const NavBar = () => {
  return (
    <header className="bg-white ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
          <Image src={logo} alt="logo" width={75} height={75} />
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center  gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-950 transition hover:text-gray-500/75"
                    href="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-950 transition hover:text-gray-500/75"
                    href="/newList">
                    New List
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-950 transition hover:text-gray-500/75"
                    href="/">
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center mb-4 ">
              <Link href="">
                <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-blue-950 mt-4 me-2">
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
                  <button className="relative block border border-current bg-white px-8 py-3">
                    Sing in
                  </button>
                </div>
              </Link>
              <Link href="">
                <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-blue-950 mt-4">
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
                  <button className="relative block border border-current bg-white px-8 py-3">
                    Register
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar