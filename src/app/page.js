import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav class="w-[80%] mx-auto flex justify-between">
        <ul>
          <li class="my-6 hover:text-red-500 cursor-pointer"><a>Horror</a></li>
        </ul>
        <ul class="flex gap-10">
          <li class="my-6 hover:text-red-500 cursor-pointer"><a>Popular</a></li>
          <li class="my-6 hover:text-red-500 cursor-pointer"><a>Others</a></li>
          <li class="my-6 hover:text-red-500 cursor-pointer"><a>Submit A Story</a></li>
        </ul>
      </nav>
    </div>
  );
}
