import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInput from "react-phone-input-2";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import "./css/caroselView.css";
import 'react-phone-input-2/lib/style.css'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [phone, setPhone] = React.useState("");

  return (
    <>
      <Button
        className="connect_expert"
        variant="contained"
        onClick={handleClickOpen}
      >
        Connect With an Expert
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            <div className="LeadForm_discountLabel">Save up to <span> 40% OFF </span></div>
            <div className="LeadForm_discountHelpText">We’ll be needing some of your basic details to help you better with your trip</div>
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
    
        <div className="alert-dialog-slide-description">
            <TextField size="small" label="Full Name" variant="outlined"/>
            <TextField size="small" label="Email" variant="outlined"/>
            <PhoneInput country={"in"} enableSearch={true} value={phone} onChange={(phone) => setPhone(phone)}/>
            <div className="react-travel">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker label="Travel Date" />
                </LocalizationProvider>
                <TextField label="Traveller Count" variant="outlined"/>
            </div>
            <textarea className="textAreaDialogue" name="postContent" placeholder="Message..." />
            <Button variant="contained" onClick={handleClose}>Connect With An Expert</Button>
        </div>
      </Dialog>
    </>
  );
}
