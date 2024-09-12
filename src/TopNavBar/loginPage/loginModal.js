import React, {useState} from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "./loginForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  

const LoginPage = () => {

    const [openLogin, setLoginPage] = useState(false);

    const handleOpen = () => {
        setLoginPage(true)
    }

    const handleClose = () => {
        setLoginPage(false)
    }

    return (
        <>
        <Button color="inherit" onClick={handleOpen}>Login</Button>

        <Dialog
        open={openLogin}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        TransitionComponent={Transition}
        maxWidth={"lg"}
        fullWidth={true} 
        sx={{
            '& .MuiDialog-paper': {
              width: '60%', 
              maxWidth: '1200px', 
              maxHeight: "calc(100% - 25px)"
            }
          }}
      >
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
        <LoginForm></LoginForm>
      </Dialog>
        </>
    )
}

export default LoginPage;