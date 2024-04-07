"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { recommendedOption } from "../constant";
import CheckIcon from "@mui/icons-material/Check";

const RecommendedOption = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      elevation={expanded && 1}
      expanded={expanded}
      onChange={handleExpansion}
      slots={{ transition: Fade }}
      slotProps={{ transition: { timeout: 400 } }}
      sx={{
        "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
        "& .MuiAccordionDetails-root": { display: expanded ? "block" : "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
          {recommendedOption[selectedOption]}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ fontSize: 12 }}>
        {recommendedOption?.map((item, index) => (
          <React.Fragment key={index}>
            {selectedOption === index && <CheckIcon />}{" "}
            {/* Render CheckIcon if the option is selected */}
            <button
              onClick={() => setSelectedOption(index)}
              className="py-2 ml-4"
            >
              {item}
            </button>
            <br></br>
          </React.Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default RecommendedOption;
