"use client";
import React from "react";
// import { useState } from "react";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const Header = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <header className="flex justify-between  py-1 items-center pb-4 border-b-[#BFC8CD]">
      <div className="flex gap-3">
        <button className="md:hidden">
          <img src="/icons/hamburger.png" className="h-[20px] " />
        </button>
        <img src="/icons/Vector.png" className="h-[20px] md:h-[35px]" />
      </div>
      <div>
        <h2 className="text-[20px] font-bold">LOGO</h2>
      </div>
      <div>
        <nav>
          <ul className="flex gap-2 ">
            <li>
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
                  src="/icons/magnifying-glass.png"
                />
              </Link>
            </li>

            <li>
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
                  src="/icons/love.png"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
                  src="/icons/handbag.png"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img
                  className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
                  src="/icons/user.png"
                />
              </Link>
            </li>

            <li>
              <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                // sx={{
                //   '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                //   '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                // }}
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
    </header>
  );
};

export default Header;
