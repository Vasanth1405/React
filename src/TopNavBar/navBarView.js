import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchField from "./searchBox/searchBox";
import React from "react";
import CurencyPicker from "./currencyPicker/js/currencyPicker";
import LoginPage from "./loginPage/loginModal";

const NavBarView = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          WANDERER.COM
        </Typography>
        <SearchField></SearchField>
        <div className="floatLeftNav">
          <CurencyPicker></CurencyPicker>
          <LoginPage></LoginPage>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarView;
