/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import HotelIcon from "@mui/icons-material/Hotel";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import BookIcon from "@mui/icons-material/Book";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Bookings from "./Components/Bookings/Bookings";
import Hotels from "./Components/Hotels/Hotels";
import Rooms from "./Components/Rooms/Rooms";
import Users from "./Components/Users/Users";
import LoginForm from "./Components/LoginForm/Login";
import Register from "./Components/LoginForm/Register";
import SingleHotel from "./Components/Hotels/SingleHotel.jsx";
// import './style.css';

function App() {
  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1, 0, 4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Define an array of objects for menu items
  const menuItems = [
    { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { title: "Hotels", icon: <NightShelterIcon />, path: "/hotels" },
    { title: "Rooms", icon: <HotelIcon />, path: "/rooms" },
    { title: "Bookings", icon: <BookIcon />, path: "/bookings" },
    { title: "Users", icon: <GroupIcon />, path: "/users" },
  ];

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            {/* Logo */}
            <Box
              sx={{
                ...(open && { display: "none" }),
                justifyContent: "space-around",
                alignItems: "center",
                minWidth: 100,
                width: 120,
                height: 50,
              }}
            >
              <img
                src="./src/assets/logo.png"
                alt="RINOR"
                style={{ maxWidth: "90%", height: "auto " }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {/* Add Link to LoginForm */}
            <Box>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="body1">Login</Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
          <Box
              sx={{
                minWidth: 100,
                width: 120,
                height: 50,
                marginRight: 2
              }}
            >
              <img
                src="./src/assets/rinor.png"
                alt="RINOR"
                style={{ maxWidth: "90%", height: "auto " }}
              />
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path='/hotel/:id' element={<SingleHotel />} />
          </Routes>
        </Main>
      </Box>
    </Router>
  );
}

export default App;
