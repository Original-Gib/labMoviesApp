import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoutIcon from '@mui/icons-material/Logout';
import supabase from "../../index";

//styles for the site header
const styles = {
    title: {
        flexGrow: 1,
    },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    //defining the menu options and paths within the header
    const menuOptions = [
        { label: "Home", path: "/" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Favorite Movies", path: "/movies/favourites" },
        { label: "Top Rated", path: "/movies/top_rated" },
        { label: "Tv Shows", path: "/tvShows" },
        { label: "Favourite Tv Shows", path: "/tvShows/favourites" },
        { label: "Actors", path: "/actors" },
        { label: "Favorite Actors", path: "/actors/favourites" },
        { label: "My Movie", path: "/myMovie" },
    ];

    //function to handle menu selection
    const handleMenuSelect = (pageURL) => {
        navigate(pageURL);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // function which uses the supabase client to log a user out and clear the session data
    const signOut = () => {
        supabase.auth.signOut()
    }

    //return statement to render the site header component
    return (
        <>
            <AppBar position="fixed" elevation={0} color="primary">
                <Toolbar>
                    <Typography variant="h4" sx={styles.title}>
                        TMDB Client
                    </Typography>
                    <Typography variant="h6" sx={styles.title}>
                        All you ever wanted to know about Movies!
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                size="large"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuOptions.map((opt) => (
                                    <MenuItem
                                        key={opt.label}
                                        onClick={() => handleMenuSelect(opt.path)}
                                    >
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <>
                            {menuOptions.map((opt) => (
                                <Button
                                    key={opt.label}
                                    color="inherit"
                                    onClick={() => handleMenuSelect(opt.path)}
                                >
                                    {opt.label}
                                </Button>
                            ))}
                            <IconButton onClick={signOut}  >
                                <LogoutIcon fontSize="large" />
                            </IconButton>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    );
};

export default SiteHeader;
