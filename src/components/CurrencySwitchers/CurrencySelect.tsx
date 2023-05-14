import { CustomSelect } from "/components/Select";
import { useCurrencyContext } from "/context/useCurrency";
import { MenuItem } from "@mui/material";
import { colors, currencies } from "/constants";
import { Currency } from "/context/CurrencyContext";

export const CurrencySelect = () => {
  const { activeCurrency, handleCurrencyChange } = useCurrencyContext();

  return (
    <CustomSelect
      sx={{ marginRight: "28px", color: "white" }}
      inputProps={{
        MenuProps: {
          MenuListProps: {
            sx: {
              backgroundColor: colors.blue100,
              color: "white",
              borderRadius: "4px",
            },
          },
        },
      }}
      value={activeCurrency.value}
      defaultValue={activeCurrency.label}
    >
      {currencies.map((currency: Currency, index: number) => (
        <MenuItem
          onClick={() => handleCurrencyChange(index)}
          sx={{
            backgroundColor: colors.blue100,
            height: 32,
            fontSize: 14,
            color: "white",
            lineHeight: "21px",
            "&:hover": {
              borderRight: `2px solid ${colors.yellow100}`,
              backgroundColor: colors.blue120,
              color: colors.yellow100,
            },
          }}
          value={currency.value}
          key={currency.value}
        >
          <img
            src={currency.img}
            style={{ width: 16, height: 16, marginRight: 5 }}
            alt={currency.label}
          />
          {currency.label}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};
