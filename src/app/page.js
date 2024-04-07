"use client";
import React from "react";
import Image from "next/image";
import Header from "./component/Header";
import Category from "./component/ShopCategory";
import RecommendedOption from "./component/RecommendedOption";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Products from "./component/Products";
import Drawer from "./component/Drawer";
import Footer from "./component/Footer";
export default function Home() {
  const [appliedFilters, setAppliedFilters] = React.useState(false);
  return (
    <main className=" min-h-screen   ">
      <Header />
      <Category />
      <div className="flex justify-center flex-col items-center pt-10 ">
        <h1 className=" text-[24px] md:text-[30px] text-center font-[00]">
          DISCOVER OUR PRODUCTS
        </h1>
        <div className="max-w-[721px]">
          <p className="text-center text-[16px] md:text-[16px]m text-[#252020] ">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      {/* filter section */}
      <div className="flex justify-center md:justify-between md:gap-0 gap-[50%] items-start m-auto border-b border-t border-t-[#BFC8CD] border-b-[#BFC8CD] mt-10 mb-5 md:ml-[34px] md:mr-[34px]  md:px-11 ">
        <button className="mt-3 text-14px font-[600] md:hidden ">FILTER</button>
        <div className="  hidden md:block md:flex mt-2">
          <p className="text-[14px] font-[700] mr-7 ">3425 ITEMS</p>
          <button
            className="text-[14px] font-adobe-caslon-pro text-[#888792] underline"
            onClick={() => setAppliedFilters(!appliedFilters)}
          >
            {appliedFilters ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
            {appliedFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <RecommendedOption />
      </div>


<div className=" flex ">
{appliedFilters && (
        <div className="hidden md:block  w-[30%] lg:w-[20%] mr-3">
          {/* Drawer Content */}
          <Drawer/>
        </div>
      )}
      {/* products */}
     <Products/>

</div>
<Footer/>
    

    </main>
  )

}
