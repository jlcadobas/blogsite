import Image from "next/image";
import { useState } from "react";

export default function Navigation() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalClick() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {/* Add animation to the modal when hamburger menu is clicked. */}
      <style jsx>{`
          .clip-path-hide {
            clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
            opacity: 0;
          }
          .clip-path-show {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            opacity: 1;
          }
        `}
      </style>

      <nav class="w-[80%] mx-auto flex justify-between max-w-[1300px]">
        <ul>
          <li class="my-6 hover:text-[#660000] cursor-pointer"><a>Horror</a></li>
        </ul>
        <ul class="flex gap-10">
          <li class="hidden md:block my-6 hover:text-[#660000] cursor-pointer"><a>Popular</a></li>
          <li class="hidden md:block my-6 hover:text-[#660000] cursor-pointer"><a>Others</a></li>
          <li class="hidden md:block my-6 hover:text-[#660000] cursor-pointer"><a>Submit A Story</a></li>
          <li class="hidden md:blockmy-6 hover:text-[#660000] cursor-pointer"><a></a></li>
          <button class="block md:hidden mt-[30px] mb-6 hover:text-[#660000] cursor-pointer" onClick={handleModalClick}>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M15 4H1V2h14zm0 5H1V7h14zM1 14h14v-2H1z"/></svg>
            </a>
          </button>
        </ul>
      </nav>

      <div class={`${isModalOpen ? "flex" : "hidden"} flex-col absolute z-10 w-full h-full top-0 inset-0 bg-black bg-opacity-50`}>
        <div class={`${isModalOpen ? "clip-path-show" : "clip-path-hide"} bg-[#660000] w-[55%] h-full pt-8 transition-transform duration-1000 ease-in-out`}>
            <li class="mx-6 pl-8 text-[20px] border-collapse py-8 hover:text-[#660000] list-none cursor-pointer"><a>Popular</a></li>
            <li class="mx-6 pl-8 text-[20px] border-collapse py-8 hover:text-[#660000] list-none cursor-pointer"><a>Others</a></li>
            <li class="mx-6 pl-8 text-[20px] border-collapse py-8 hover:text-[#660000] list-none cursor-pointer"><a>Submit A Story</a></li>
        </div>
      </div>
    </>
  );
}
