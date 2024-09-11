import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import "./css/searchBox.css"
import SearchFieldDialogue from "./searchBoxDialogue";

const SearchField = () => {
  const placeholders = ["Thailand", "Dubai", "India", "NewYork"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [placeholders.length]);

  return (
    <>
    <Box sx={{ flexGrow: 1, mx: 2 }}>
      <TextField
        onClick={handleClickOpen}
        variant="outlined"
        placeholder={`Search for ${placeholders[placeholderIndex]}`}
        size="small"
        sx={{ backgroundColor: "white", borderRadius: "40px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
    <SearchFieldDialogue open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} 
    placeholders={placeholders} placeholderIndex={placeholderIndex}></SearchFieldDialogue>
    </>
  );
};

export default SearchField;
