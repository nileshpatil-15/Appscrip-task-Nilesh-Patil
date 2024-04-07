
import Image from "next/image";
import Header from "./component/Header";
import Category from "./component/Category";
export default function Home() {
  return (
    <main className=" min-h-screen px-2">
<Header/>
<Category/>
<div className="flex justify-center flex-col items-center pt-10 md:pr-40">
  <h1 className="text-[24px] md:text-[30px] text-center font-[400]">DISCOVER OUR PRODUCTS</h1>
  <div className="max-w-[721px]">
  <p className="text-center text-[16px] md:text-[16px] ">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>

  </div>
</div>

    </main>
  );
}
