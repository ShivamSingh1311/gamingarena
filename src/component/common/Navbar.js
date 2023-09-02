import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[200px] bg-[#149BFC] text-white">
      <div>
        <img src="/assets/poketFulNavLogo.svg" alt="na" />
      </div>

      <div className="flex items-center gap-1">
        <SearchIcon />
        <TextField
          id="filled-basic"
          label="search for any game"
          variant="filled"
          InputProps={{
            style: {
              color: "#FFF",

              //   fontSize: "16px",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#FFF",
            },
          }}
        />
      </div>
      <ul className="flex justify-center gap-[32px]">
        <li>Home</li>
        <li>Category</li>
        <li>About</li>
        <li>Pricing</li>
      </ul>
      <div>
        <Button variant="contained">Buy Now</Button>
      </div>
    </div>
  );
};

export default Navbar;
