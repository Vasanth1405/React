import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import PhoneInput from "react-phone-input-2";

const SignUpPage = () => {
    const [phone, setPhone] = React.useState("");

    return (
        <div className="newLoginPage">
          <h2>Create Your Account</h2>
          <div className="inputFieldDiv">
            <TextField size="small" fullWidth={true} label="Full Name" variant="outlined" />
            <TextField size="small" fullWidth={true} label="Email" variant="outlined" />
            <PhoneInput country={"in"} enableSearch={true} value={phone} onChange={(phone) => setPhone(phone)}/>
            <TextField size="small" fullWidth={true} label="Password" variant="outlined" />
            <TextField size="small" fullWidth={true} label="Confirm Password" variant="outlined" />
            <div className="loginModal_auth_text">By joining, you agree to the Terms and Privacy Policy.</div>
          </div>    

          <Button variant="contained" fullWidth={true} size="normal" sx={{borderRadius: "5px", margin: "15px 0 0 0"}}>
            Sign Up
          </Button>
        
          <div class="loginModal_auth">
            <span>Already Have An Account</span>?  
            <b>  <span>Log In</span></b>
          </div>

        </div>
    )
}

export default SignUpPage;