import Stack from "@mui/material/Stack";  
import Divider from "@mui/material/Divider";
import RangeSlider from "./component/priceSlider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Checkbox } from "@mui/material";

const SearchBoxContent = () => {
    const productType = ["Tour" ,"Activity"];
    const tripDuration = ["Upto 1 Day","2 to 3 days", "3 to 5 days", "5 to 7 days", "7+ days"];

    const productTypeDiv = productType.map((product, index) => (
      <Chip className="searchDivChip" key={index} label={product} />
    ));
  
    const tripDurationDiv = tripDuration.map((product, index) => (
      <Chip className="searchDivChip" key={index} label={product} />
    ));

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
      <div className="search-alert-dialog-slide">
      <h4 className="searchDialogHeader">Product Type</h4>
      <Stack direction="row" spacing={1}>
        {productTypeDiv}
      </Stack>
      <Divider sx={{ marginTop: "10px" }}></Divider>
      <h4>Trip Duration</h4>
      <Stack direction="row" spacing={1}>
        {tripDurationDiv}
      </Stack>
      <Divider sx={{ marginTop: "10px" }}></Divider>
      <h4>Price Range</h4>
      <RangeSlider></RangeSlider>
      <Divider sx={{ marginTop: "10px" }}></Divider>
      <div className="checkBoxDiv">
        <Checkbox {...label} />
        <p>I want Flights to be included</p>
      </div>
      <Divider sx={{ marginTop: "1px" }}></Divider>
      <div className="footerSearchDialogue">
        <p style={{textDecoration: "underline"}}>Clear All</p>  
        <Button variant="contained" size="small" sx={{borderRadius: "10px", margin: "15px 10px"}}>Search For Products</Button>
      </div>
    </div>
    )
}

export default SearchBoxContent;