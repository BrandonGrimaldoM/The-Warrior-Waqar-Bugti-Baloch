import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
    <p className="text-3xl text-center hidden max-lg:block uppercase font-bold">This page is not designed for mobile devices.</p>
      <main className="xl:p-20 sm:p-0 overflow-x-hidden max-lg:hidden">
        <section className="bg-black w-full h-[1000px] bg-[url('/images/background.jpg')] bg-no-repeat bg-cover rounded-3xl flex relative">
          <img
            src="/images/warrior.png"
            alt="The Warrior"
            className="absolute bottom-0 -right-[100px] w-[900px] h-auto z-10"
          />

          <svg
            width="1226"
            height="1127"
            viewBox="0 0 1226 1127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 -right-[100px]"
          >
            <path
              d="M1225 1C1126.85 21.6869 914.29 138.142 849.239 438.466C784.188 738.791 256.642 1021.96 1 1126"
              stroke="white"
            />
          </svg>

          <nav className="w-40 h-full border-r border-[#8B7C71] flex flex-col items-center p-14 gap-[50%]">
            <svg
              width="52"
              height="45"
              viewBox="0 0 52 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M2 2H50M26 15.5H50M26 29H50M2 42.5H50"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 14.75L14 22.25L2 29.75V14.75Z"
                stroke="white"
                stroke-width="4"
                stroke-linejoin="round"
              />
            </svg>

            <ul className="transform -rotate-90 flex gap-12">
              <li className="text-white text-4xl cursor-pointer">Facebook</li>
              <div className="w-1 h-full border-r-2 border-[#FF0303]"></div>
              <li className="text-white text-4xl cursor-pointer">Twitter</li>
              <div className="w-1 h-full border-r-2 border-[#FF0303]"></div>
              <li className="text-white text-4xl cursor-pointer">Instagram</li>
            </ul>
          </nav>
          <article className="px-14 py-24 relative z-30 bg-black/40 w-full 2xl:bg-transparent">
            <h1 className="uppercase text-9xl text-white font-black">
              the <br /> warrior
            </h1>

            <div className="flex items-center gap-28">
              <h2 className="text-3xl text-white">
                The <br /> Story
              </h2>
              <div>
                <div className="flex gap-10 py-14">
                  <p className="text-white text-2xl">20 December 2022</p>
                  <div className="w-1 h-9 border-r-2 border-[#FF0303]"></div>
                  <p className="text-white text-2xl">Fantasy, Drama</p>
                </div>
                <p className="text-white text-2xl pb-10">
                  The Warrior Thomasin , a mutated monster <br /> hunter,
                  struggles to find his place in a world <br /> in which people
                  often prove more wicked <br /> than beasts.
                </p>

                <div className="flex gap-5 items-center cursor-pointer">
                  <p className="text-[#FF0303] text-2xl">Read more</p>{" "}
                  <ArrowRightIcon className="text-[#FF0303] w-6 h-6" />{" "}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-20">
              <h2 className="text-3xl text-white">Trailers</h2>
              <div>
                <div className="flex gap-5 pt-14">
                  <div className="relative">

                  <div className="w-48 h-30 overflow-hidden rounded-xl cursor-pointer ">
                    <img
                      src="/images/01.jpg"
                      alt="01"
                      className="scale-105 w-full h-full object-cover"
                    />
                
                  </div>
                  <p className="text-3xl text-white font-bold absolute right-2 -bottom-3">01</p>
                  </div>

                  <div className="relative">

                  <div className="w-48 h-30 overflow-hidden rounded-xl cursor-pointer ">
                    <img
                      src="/images/02.jpg"
                      alt="02"
                      className="scale-105 w-full h-full object-cover"
                    />
                
                  </div>
                  <p className="text-3xl text-white font-bold absolute right-2 -bottom-3">02</p>
                  </div>
                  <div className="relative">

                  <div className="w-48 h-30 overflow-hidden rounded-xl cursor-pointer ">
                    <img
                      src="/images/03.jpg"
                      alt="03"
                      className="scale-105 w-full h-full object-cover"
                    />
                
                  </div>
                  <p className="text-3xl text-white font-bold absolute right-2 -bottom-3">03</p>
                  </div>
                </div>
                <div className="flex gap-5 py-14">
                  <p className="text-white text-lg cursor-pointer">
                    Privacy Policy
                  </p>
                  <div className="w-1 h-7 border-r-2 border-[#FF0303]"></div>
                  <p className="text-white text-lg cursor-pointer">
                    Term of Use
                  </p>
                  <div className="w-1 h-7 border-r-2 border-[#FF0303]"></div>
                  <p className="text-white text-lg cursor-pointer">Setting</p>
                  <div className="w-1 h-7 border-r-2 border-[#FF0303]"></div>
                  <p className="text-white text-lg cursor-pointer">Credits</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
