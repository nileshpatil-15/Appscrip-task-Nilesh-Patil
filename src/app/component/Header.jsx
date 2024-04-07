"use client";
import React, { useState } from "react";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { shopCategory } from "../constant";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <header className="flex justify-between py-4 items-center pb-4 border-b-[#BFC8CD] px-2 md:px-11">
      <div className="flex gap-3">
        <button className="md:hidden" onClick={handleDrawerOpen}>
          <img src="/icons/hamburger.png" className="h-[20px]" alt="hamburger" />
        </button>
        <img src="/icons/Vector.png" className="h-[20px] md:h-[35px]" alt="logo" />
      </div>
      <div>
        <h2 className="text-[20px] md:pl-40 font-[800]">LOGO</h2>
      </div>
      <div>
        <nav>
          <ul className="flex gap-2 ">
            <li>
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[18px] md:w-[18px]"
                  src="/icons/magnifying-glass.png"
                  alt="search"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img
                  className="h-[18px] w-[18px] md:h-[18px] md:w-[18px]"
                  src="/icons/love.png"
                  alt="heart"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[18px] md:w-[18px]"
                  src="/icons/handbag.png"
                  alt="handbag"
                />
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[18px] md:w-[18px]"
                  src="/icons/user.png"
                  alt="user"
                />
              </Link>
            </li>
            <li className="hidden md:block">
              <Accordion
                elevation={0}
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                  '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                  '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                }}
              >
                  <select>
                  <option>ENG</option>
                  <option>HND</option>
                  <option>MAR</option>
                </select>
              </Accordion>
            </li>
          </ul>
        </nav>
      </div>
 <Drawer
 anchor="left"
 open={drawerOpen}
 onClose={handleDrawerClose}
>
 <div className="p-4 bg-white w-60">
   <ul className="flex flex-col space-y-2">
     {shopCategory.map((item, index) => (
       <li key={index} className="hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
         {item}
       </li>
     ))}
   </ul>
 </div>
</Drawer>

    </header>
  );
};

export default Header;
