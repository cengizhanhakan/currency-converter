import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import { useCurrencyContext } from "/context/useCurrency";
import { useState } from "react";
import { colors, currencies } from "/constants";
import { Currency } from "/context/CurrencyContext";
import { Chevron } from "/icons";

export const CurrencyAccordion = () => {
  const { activeCurrency, handleCurrencyChange } = useCurrencyContext();

  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      disableGutters
      elevation={0}
      onChange={() => setExpanded(!expanded)}
      expanded={expanded}
      square
      sx={{
        boxShadow: "none",
        padding: 0,
        background: colors.blue100,
        "&.MuiAccordion-root:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{
          padding: 0,
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
        expandIcon={<Chevron />}
      >
        <ListItem
          sx={{
            height: "40px",
            padding: 0,
          }}
          button
        >
          <img
            src={activeCurrency.img}
            style={{ width: 16, height: 16, marginRight: 8 }}
            alt={activeCurrency.label}
          />
          <ListItemText
            sx={{ color: "#FFF", fontSize: 16, lineHeight: "24px" }}
            primary={activeCurrency.label}
          />
        </ListItem>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <List sx={{ padding: 0 }}>
          {currencies.map((currency: Currency, index: number) => (
            <ListItem
              onClick={() => handleCurrencyChange(index)}
              sx={{
                height: "40px",
                padding: 0,
                "::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  left: "-16px",
                  borderLeft:
                    activeCurrency.label === currency.label
                      ? `2px solid ${colors.yellow100}`
                      : "2px solid transparent",
                },
              }}
              button
            >
              <img
                src={currency.img}
                style={{ width: 16, height: 16, marginRight: 8 }}
                alt={currency.label}
              />
              <ListItemText
                sx={{ color: "#FFF", fontSize: 16, lineHeight: "24px" }}
                primary={currency.label}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
