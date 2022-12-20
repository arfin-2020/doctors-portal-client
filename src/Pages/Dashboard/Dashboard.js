import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
const drawerWidth = 240;

const Dashboard = props => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const LinkStyle = {
    color: "black",
    textDecoration: "none",
    marginLeft: "20px",
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GridViewOutlinedIcon />
              <Link style={LinkStyle} to="dashboard">
                Dashboard
              </Link>{" "}
              <br />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>

      {
        admin ? <div>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltOutlinedIcon />
                  <Link style={LinkStyle} to="dashboard/allusers">
                    All Users
                  </Link>{" "}
                  <br />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsOutlinedIcon />
                  <Box>
                    <Link style={LinkStyle} to="dashboard/admin">
                      Make Admin
                    </Link>{" "}
                    <br />
                  </Box>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleOutlineOutlinedIcon />
                  <Box>
                    <Link style={LinkStyle} to="admin/addDoctor">
                      Add Doctors
                    </Link>{" "}
                    <br />
                  </Box>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsOutlinedIcon />
                  <Box>
                    <Link style={LinkStyle} to="admin/manageDoctor">
                      Manage Doctors
                    </Link>{" "}
                    <br />
                  </Box>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </div>

          : (<></>

          )
      }
      <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BookmarkAddOutlinedIcon />
                    <Link style={LinkStyle} to="appointment">
                      Appointments
                    </Link>{" "}
                    <br />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArrowBackOutlinedIcon />
                    <Link style={LinkStyle} to="">
                      Back to Home
                    </Link>{" "}
                    <br />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </div>

    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
