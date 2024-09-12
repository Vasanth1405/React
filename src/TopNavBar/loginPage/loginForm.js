import { useState } from "react";
import "./css/login.css";
import login from "./images/traveling.jpg";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NewLogin from "./newLogin";
import SignUpPage from "./signUpPage";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
      </div>
    );
  }

const LoginForm = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newVal) => {
    setValue(newVal);
  };

  return (
    <div className="auth-content">
      <div className="LoginModal_leftSection">
        <div className="LoginModal_authBanner">
          <img alt="Login" src={login}></img>
          <div className="LoginModal_bannerTextWrap">
            <div className="LoginModal_bannerBoldText">
              Your Adventure Starts Here
            </div>
            <span>
              Experience 20,000+ Tours And Activities from 1,200+ Suppliers
            </span>
          </div>
        </div>
      </div>
      <div className="LoginModal_rightSection">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Login"  />
            <Tab label="Sign Up" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <NewLogin></NewLogin>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUpPage></SignUpPage>
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default LoginForm;
