import React, {useState} from "react";
import Slide from "@mui/material/Slide";
import "./css/searchBox.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import SearchBoxContent from "./searchBoxContents";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SearchFieldDialogue = (props) => {
  const { open, handleClose, placeholders, placeholderIndex, typedText } = props;
  
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
          placeholder={`Search for ${typedText}`}
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
      <SearchBoxContent></SearchBoxContent>
    </Dialog>
  );
};

export default SearchFieldDialogue;
