import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import "./css/searchBox.css"
import SearchFieldDialogue from "./searchBoxDialogue";

const SearchField = () => {
  const placeholders = ["Thailand", "Dubai", "India", "New York"];
  const [typedText, setTypedText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); 
  const [charIndex, setCharIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    let typingSpeed = 100;
    let timeout;

    if(isTyping){
      if(charIndex < currentPlaceholder.length){
        timeout = setTimeout(() => {
          setTypedText((prev) => prev + currentPlaceholder[charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        }, typingSpeed)
      } else{
        timeout = setTimeout(() => setIsTyping(false), 1000)
      }
    } else{
      if(charIndex > 0){
        timeout = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        }, typingSpeed)
      } else{
        setIsTyping(true);
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isTyping, placeholders, placeholderIndex])

  return (
    <>
    <Box sx={{ flexGrow: 1, mx: 2 }}>
      <TextField
        onClick={handleClickOpen}
        variant="outlined"
        placeholder={`Search for ${typedText}`}
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
    placeholders={placeholders} placeholderIndex={placeholderIndex} typedText={typedText}></SearchFieldDialogue>
    </>
  );
};

export default SearchField;
