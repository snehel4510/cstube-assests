import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => ( <Stack direction = "row"
    alignItems = "center"
    p = { 2 }
    sx = {
        { position: "sticky", background: '#000000de', top: 0, justifyContent: "space-between" }
    } >
    <Link to = "/"
    style = {
        { display: "flex", alignItems: "center" }
    } >
    <img src = { logo }
    alt = "logo"
    height = { 45 }/> 
    </Link > 
    
    <SearchBar/>
    <AiOutlineUser size={"30px"} style={{color:"orange", marginLeft:0}}/>
    </Stack>
);

export default Navbar;
