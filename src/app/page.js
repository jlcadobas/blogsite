import Image from "next/image";
import Navigation from "./_components/navigation";

export default function Home() {
  return (
      // "bg-gradient-to-r from-[#330000] via-[#660000] to-[#cc0000]"
      <div>
        <Navigation />

        <div class="w-[80%] mx-auto my-10 flex flex-row max-w-[1300px] justify-between">
          <div class="w-[45%]">
            <a href="" class="flex flex-col gap-2">
              <img src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-[517px]"/>
              <div>
                <h1 class="text-[40px] capitalize leading-12 mb-2 hover:text-[#660000]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry </h1>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
            </a>
          </div>
          <div class="w-[45%] flex flex-col justify-between">
            <a href="" class="flex gap-6">
              <img src="https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-[185px]"/>
              <div>
                <h1 class="text-[24px] font-semibold capitalize leading-12 mb-2 hover:text-[#660000]"> Lorem Ipsum is simply dummy text of the printing </h1>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
              </div>
            </a>
            <a href="" class="flex gap-6">
              <img src="https://images.unsplash.com/photo-1635214964300-671aae5c7f39?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-[185px]"/>
              <div>
                <h1 class="text-[24px] font-semibold capitalize leading-12 mb-2 hover:text-[#660000]"> Lorem Ipsum is simply dummy text of the printing </h1>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
              </div>
            </a>
            <a href="" class="flex gap-6">
              <img src="https://images.unsplash.com/photo-1603516863860-7d5c93a83fe8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-[185px]"/>
              <div>
                <h1 class="text-[24px] font-semibold capitalize leading-12 mb-2 hover:text-[#660000]"> Lorem Ipsum is simply dummy text of the printing </h1>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}
