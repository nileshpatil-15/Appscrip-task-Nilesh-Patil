"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { filterCategory } from "../constant";
import CheckIcon from "@mui/icons-material/Check";
import { filterData } from "../constant";

const Drawer = () => {
  const [expanded, setExpanded] = React.useState(Array(filterCategory.length).fill(false));

  const handleExpansion = (index) => {
    setExpanded(prevState =>
      prevState.map((value, idx) => idx === index ? !value : false)
    );
  };

  return (
    <ul  >
      {filterCategory.map((item, index) => (
        <Accordion
        sx={{height:'30px'}}
          key={item}
          elevation={0}
          expanded={expanded[index]}
          onChange={() => handleExpansion(index)}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded[index] ? "auto" : 0 },
            "& .MuiAccordionDetails-root": { display: expanded[index] ? "block" : "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontSize: "15px", fontWeight: 600,margin:'10px' }}>
              {item}
            </Typography>
           

          </AccordionSummary>
          <Typography className="h-10" sx={{ fontSize: "15px", fontWeight: 700,paddingLeft:'23px' }}>
              All
            </Typography> 
          <AccordionDetails sx={{ fontSize: 12 }}>
            <ul className="list-none">
              <button className="underline text-[#BFC8CD]">Unselect all</button>
              {filterData.map((item) => (
                <li key={item} className="py-2">
                  <input
                    id={item}
                    type="checkbox"
                    className="mr-2 p-10 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <label
                    className="cursor-pointer text-[16px] font-[400]"
                    htmlFor={item}
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </ul>
  );
};

export default Drawer;
