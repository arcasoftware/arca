import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Barra() {
 // const navItems = ["/", "mapa", "menu", "sugerencias"];

 const navItems = [
  {
    id:0,
    label:"INICIO",
    url:"/"
  },
  {
    id:1,
    label:"MAPA",
    url:"mapa"
  },
  {
    id:2,
    label:"MENU",
    url:"menu"
  },
  {
    id:3,
    label:"SUGERENCIAS",
    url:"sugerencias"
  }
 ]

  const [lupa, setLupa] = useState(false);

  const handleVerSearch = () => {
    setLupa(true);
  };

  useEffect(() => {
    console.log("Lupa" + lupa);
  }, [lupa]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navItems.map((item) => (
        <MenuItem key={item.id} sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge>
              <Avatar src={`./${item}.svg`} sx={{ width: 30, height: 30 }} />
            </Badge>
          </IconButton>
          <Box>
            <Link to={item.url} textDecoration={"none"}>
              <Typography color={"blue"}> {item.label} </Typography>
            </Link>
          </Box>
        </MenuItem>
      ))}

      <MenuItem
        onClick={handleProfileMenuOpen}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Box>Profile</Box>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src={`./logo.jpg`} sx={{ width: 50, height: 50 }} />

          <Box
            sx={{
              width: "60%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!lupa ? (
              <Avatar
                src={`./lupaBlanca.gif`}
                sx={{ width: 35, height: 35, cursor: "pointer" }}
                onClick={handleVerSearch}
              />
            ) : (
              <Search>
                <SearchIconWrapper>
                  <Avatar
                    src={`./lupaBlanca.gif`}
                    sx={{ width: 25, height: 25 }}
                  />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar ..."
                  inputProps={{ "aria-label": "buscar" }}
                />
              </Search>
            )}
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item.id}>
                  <Link to={item.url} textDecoration={"none"}>
                    <Typography color={"white"}> {item.label} </Typography>
                  </Link>
                </Button>
              ))}
            </Box>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
