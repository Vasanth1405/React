import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import SearchField from "./searchBox";

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
        <div>
          
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarView;
