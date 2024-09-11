import React, {useState} from "react";
import Slide from "@mui/material/Slide";
import "./css/searchBox.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { TextField, InputAdornment, Checkbox } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import RangeSlider from "./priceSlider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SearchFieldDialogue = (props) => {
  const { open, handleClose, placeholders, placeholderIndex } = props;
  const productType = ["Tour" ,"Activity"];
  const tripDuration = ["Upto 1 Day","2 to 3 days", "3 to 5 days", "5 to 7 days", "7+ days"];

  const productTypeDiv = productType.map((product, index) => (
    <Chip className="searchDivChip" key={index} label={product} />
  ));

  const tripDurationDiv = tripDuration.map((product, index) => (
    <Chip className="searchDivChip" key={index} label={product} />
  ));

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          margin: 0,
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          paddingBottom: "25px",
        },
      }}
    >
      <DialogTitle>
        <TextField
          variant="outlined"
          placeholder={`Search for ${placeholders[placeholderIndex]}`}
          size="small"
          sx={{ backgroundColor: "white", borderRadius: "40px", width: "100%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </DialogTitle>

      <div className="search-alert-dialog-slide">
        <h4 className="searchDialogHeader">Product Type</h4>
        <Stack direction="row" spacing={1}>
          {productTypeDiv}
        </Stack>
        <Divider sx={{ marginTop: "10px" }}></Divider>
        <h4>Trip Duration</h4>
        <Stack direction="row" spacing={1}>
          {tripDurationDiv}
        </Stack>
        <Divider sx={{ marginTop: "10px" }}></Divider>
        <h4>Price Range</h4>
        <RangeSlider></RangeSlider>
        <Divider sx={{ marginTop: "10px" }}></Divider>
        <div className="checkBoxDiv">
          <Checkbox {...label} />
          <p>I want Flights to be included</p>
        </div>
        <Divider sx={{ marginTop: "1px" }}></Divider>
        <div className="footerSearchDialogue">
          <p style={{textDecoration: "underline"}}>Clear All</p>  
          <Button variant="contained" size="small" sx={{borderRadius: "10px", margin: "15px 10px"}}>Search For Products</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchFieldDialogue;
