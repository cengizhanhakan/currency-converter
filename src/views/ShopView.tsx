import { useState } from "react";

import { Box, TextField } from "@mui/material";
import { Header } from "/components/Header";
import { useCurrencyContext } from "/context/useCurrency";

const itemPrice = 0.03;

const ShopView = () => {
  const [amount, setAmount] = useState(500);

  const { activeCurrency } = useCurrencyContext();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  return (
    <>
      <Header />
      <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <Box
          display="flex"
          flexDirection={{
            md: "row",
            xs: "column",
          }}
          justifyContent="center"
          alignItems="center"
          gap="8px"
        >
          <TextField
            onChange={handleAmountChange}
            value={amount}
            label="Amount"
            variant="outlined"
          />
          <TextField
            value={`${activeCurrency.label} : ${Number(
              itemPrice * activeCurrency.value * amount
            ).toFixed(2)}`}
            disabled
            label="Price"
            variant="outlined"
          />
        </Box>
      </Box>
    </>
  );
};

export default ShopView;
