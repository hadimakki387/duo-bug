import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "../icons/ExpandMore";
import { AccordionType } from "@/services/types";

type Props = {
  content: AccordionType[];
  containerClass?: string;
  isWhite?: boolean;
  grouped?: boolean;
  disableGutters?: boolean;
  elevation?: number;
  isText?: {
    title: boolean;
    content: boolean;
  };
};

function DBAccordion({
  content,
  containerClass = "",
  isWhite = false,
  grouped = true,
  disableGutters = true,
  elevation = 0,
  isText = {
    title: true,
    content: true,
  },
}: Props) {
  return (
    <div
      className={`w-full ${
        grouped && "shadow-sm rounded-md overflow-hidden"
      } ${containerClass}`}
    >
      {content.map((item) => (
        <Accordion
          key={item.id}
          disableGutters={disableGutters}
          elevation={elevation}
          sx={{
            boxShadow: grouped ? "none" : "0px 2px 8px 0px rgba(0, 0, 0, 0.15)",
            my: grouped ? "0px" : "8px",
            borderRadius: grouped ? "0px" : "8px !important",
            overflow: grouped ? "hidden" : "visible",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              backgroundColor: isWhite ? "white" : "var(--main-bg)",
              borderRadius: grouped ? "0px" : "8px !important",
            }}
          >
            {isText.title ? (
              <p className="text-md font-normal text-subtitleText">
                {item.title}
              </p>
            ) : (
              item.title
            )}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderBottomLeftRadius: grouped ? "0px" : "8px !important",
              borderBottomRightRadius: grouped ? "0px" : "8px !important",
            }}
          >
            {isText.content ? (
              <p className="text-subtitleText text-sm">{item.content}</p>
            ) : (
              item.content
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default DBAccordion;
