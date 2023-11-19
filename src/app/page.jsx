import Link from "next/link"




const Home = async () => {

  return (
    <div className="banner relative bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8  ">
        <div className="max-w-xl p-4 ">
          <h1 className="text-3xl font-extrabold sm:text-5xl  ">
            Organiza tus playlists para crear el mejor set
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <Link href="/listas">
            <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-blue-950 mt-4">
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
              <button className="relative block border border-current bg-white px-8 py-3">
                Crear
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home