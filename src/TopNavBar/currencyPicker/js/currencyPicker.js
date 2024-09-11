import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import SearchIcon from "@mui/icons-material/Search";
import Slide from "@mui/material/Slide";
import { TextField, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import CurrencyDetails from "./currencyDetails";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CurencyPicker = () => {
  const [openCurrency, setCurrency] = useState(false);

  const handleOpen = () => {
    setCurrency(true);
  };

  const handleClose = () => {
    setCurrency(false);
  };

  return (
    <>
      <Button color="inherit" endIcon={<ExpandMoreIcon />} onClick={handleOpen}>
        🇮🇳 INR ₹
      </Button>

      <Dialog
        open={openCurrency}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        TransitionComponent={Transition}
        maxWidth={"lg"}
        fullWidth={true}
        sx={{
          '& .MuiDialog-paper': {
            width: '60%', 
            maxWidth: '1200px', 
          }
        }}
      >
        <DialogTitle>
          <h4 style={{ marginBlockStart: "1px", marginBlockEnd: "10px" }}>
            Currency Picker
          </h4>
          <Divider sx={{ marginBottom: "10px" }}></Divider>
          <TextField
            variant="outlined"
            placeholder={`Search currencies`}
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "40px",
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        <h4 style={{marginLeft:"10px", marginBlockStart: "1px", marginBlockEnd: "10px" }}>Available Currencies</h4>
        <CurrencyDetails></CurrencyDetails>
      </Dialog>
    </>
  );
};

export default CurencyPicker;
