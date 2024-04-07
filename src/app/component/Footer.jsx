import React from "react";
import { mettaMuseData } from "../constant";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { quickLinks } from "../constant";
const Footer = () => {
  return (
    <footer className="  bottom-0  bg-[rgb(0,0,0)] text-[#FFFFFF] p-3 md:px-11 ">
      {/* company details */}
      <div className="md:flex justify-between">
        <div>
          <div>
            <h4 className="text-[16px] font-[700]">BE THE FIRST TO KNOW</h4>
            <p className="font-[400] text-[14px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
          </div>
          <div class=" flex mt-3 mb-4">
            <input
              type="text"
              placeholder="Enter your e-mail..."
              className=" w-[70%] p-2 "
            />
            <button
              type="button"
              class="ml-3 p-2 bg-[#000000] text-[12px] border border-[#2c2d2d] text-[#BFC8CD]  "
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        <hr className="md:hidden" />
        <div>
          <div className="mt-4 mb-4 ">
            <h4 className="text-[16px] font-[700]">CALL US</h4>
            <p className="text-[14px]">
              +44 221 133 5360 <span className="h-3 bg-white"></span>{" "}
              customercare@mettamuse.com
            </p>
          </div>
          <hr className="md:hidden" />
          <div>
            <h4 className="text-[16px] mt-3 font-[700] mb-2">CURRENCY</h4>
            <div className="flex">
              <img
                className="mr-2"
                src="/icons/United States of America (US).png"
              />
              <span>USD</span>
            </div>
            <p className="text-[12px] mt-2 hidden md:block">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <hr className="hidden md:block mt-5 mb-5" />
      <hr className=" md:hidden mt-5 mb-5" />
      {/* for small devices */}
      <div className="md:hidden">
        <div>
          <div className="flex justify-between">
            <p>Metta use</p>
            <KeyboardArrowDownIcon />
          </div>
          <hr className="md:hidden mt-3 mb-3" />

          <div className="flex justify-between">
            <p>QUICK LINKS</p>
            <KeyboardArrowDownIcon />
          </div>
          <hr className="md:hidden mt-3 mb-3 " />

          <div className="flex justify-between">
            <p>FOLLOW US</p>
            <KeyboardArrowDownIcon />
          </div>
          <hr className="md:hidden mt-3 mb-3" />
        </div>
        {/* metta miuse accept */}
        <div>
          <p className="mb-3">mettā muse ACCEPTS</p>
          <div className="flex gap-2">
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group 136187.png"
            />
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group 136189.png"
            />
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group 136191.png"
            />
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group.png"
            />
            <img
              className="w-11 h-8  p-2 rounded-lg bg-[#006FCF]"
              src="/images/Vector.png"
            />
            <img
              className="w-11 h-8  p-2 rounded-lg bg-[#5A31F4]"
              src="/images/Vector1.png"
            />
          </div>
        </div>
      </div>
      {/* for large devices */}
      <div className="  hidden md:block md:flex justify-between">
        <div>
          <p className="font-[700] text-[17px] mb-2">mettā muse</p>
          {mettaMuseData.map((item) => {
            return <p className="text-[14px] mb-1">{item}</p>;
          })}
        </div>
        <div>
          <p className="font-[700] text-[17px] mb-2">QUICK LINKS</p>
          {quickLinks.map((item) => {
            return <p className="text-[14px] mb-1">{item}</p>;
          })}
        </div>
        <div>
          <p className="font-[700] text-[17px] mb-2">FOLLOW US</p>
          <div className="flex gap-2">
            <img
              className="h-6 border p-1  rounded-sm"
              src="/images/Instagram.png"
            />

            <img
              className="h-6 border p-1  rounded-sm"
              src="/images/mdi_linkedin.png"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group 136187.png"
            />
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group 136189.png"
            />
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group 136191.png"
            />
            <img
              className="w-11 h-8 bg-white p-2 rounded-lg"
              src="/images/Group.png"
            />
            <img
              className="w-11 h-8  p-2 rounded-lg bg-[#006FCF]"
              src="/images/Vector.png"
            />
            <img
              className="w-11 h-8  p-2 rounded-lg bg-[#5A31F4]"
              src="/images/Vector1.png"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-[14px] mt-3 mb-3">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
