import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import GoogleButton from 'react-google-button'
import Divider from '@mui/material/Divider';
import ReviewsByPlatform from "../../ReviewsByPlatform/reviewsByPlatform";

const NewLogin = () => {
    return (
        <div className="newLoginPage">
          <h2>Log into Your Account</h2>
          <div className="inputFieldDiv">
            <TextField size="normal" fullWidth={true} label="Email" variant="outlined" />
            <TextField size="normal" fullWidth={true} label="Password" variant="outlined" />
          </div>    
          <div class="LoginModal_authDescription">
            <b class="LoginModal_active">
                <span>Forgot Password</span>?
            </b>
          </div>
         
          <Button variant="contained" fullWidth={true} size="normal" sx={{borderRadius: "5px", margin: "15px 0 0 0"}}>
            <span style={{ marginRight: '5px' }}>Login</span> &amp; <span style={{ marginLeft: '5px' }}>Continue</span>
          </Button>

          {/* <div className="googleLogin">
            <GoogleButton type="light" className="googleLogin"/>
          </div> */}
        
          <div className="ratingDivider">
            <Divider sx={{ margin: "2rem 0 0 0" }}>Book With Confidence</Divider>
          </div>  

          <ReviewsByPlatform display={"grid"}></ReviewsByPlatform>
        </div>
    )
}

export default NewLogin;