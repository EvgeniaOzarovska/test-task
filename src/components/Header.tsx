import React from "react";
import {Box, Button, Link, List} from "@mui/material";
import {useDispatch} from "react-redux";
import {setActiveLink} from "../redux/slices/navigationSlices";
import {clearUserData} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {CustomButton} from "../pages/LoginPage";

export const Header: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUserData());
        localStorage.removeItem("isAuthenticated");
        navigate("/");
    };

    return (
    <header style={{width: '100%', borderBottom:'2px solid #0000FF'}}>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
        >
        <List style={{display: 'flex', justifyContent: "space-between"}}>
            <Link style={{margin: 15}} onClick={() => dispatch(setActiveLink('home'))}>Home</Link>
            <Link style={{margin: 15}} onClick={() => dispatch(setActiveLink('activation'))}>Activation</Link>
            <Link style={{margin: 15}} onClick={() => dispatch(setActiveLink('account'))}>Account</Link>
        </List>
            <CustomButton onClick={handleLogout} color="secondary" variant="contained">Logout</CustomButton>
        </Box>
    </header>
  );
};
