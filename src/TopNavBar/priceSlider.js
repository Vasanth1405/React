import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import React, { useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function RangeSlider() {
  const [value, setValue] = useState([0, 100000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="h6">
        {`${currencyFormatter.format(value[0])} - ${currencyFormatter.format(
          value[1])}`}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={100000}
        step={1000}
        valueLabelDisplay="auto"
        sx={{
          color: "blue",
        }}
        marks={[{ value: 0, label: '0 Rs' }, { value: 100000, label: '100000 Rs' }]}
      />
      
    </Box>
  );
}
