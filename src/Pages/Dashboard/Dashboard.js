import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ListGroup, Navbar } from "react-bootstrap";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, Outlet} from "react-router-dom";
import SegmentIcon from '@mui/icons-material/Segment';
import logo from './../../images/logo/fwfa-logo.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import useAuth from "../../hooks/useAuth";
import AddModeratorIcon from '@mui/icons-material/AddModerator';





const drawerWidth = 220;

const sideMenu = {
  textDecoration:"none",
  marginTop:"10px",
  fontSize:"16px",
  fontWeight: "700",
}
function Dashboard(props) {

  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const {admin, user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  
  const drawer = (

    
    <div>
      <div className="text-center py-1 my-3">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" className='logo'/>
        </Navbar.Brand>
      </div>

      <Divider style={{width:"100%", padding:"1px 0", borderRadius:"0"}}/>
      <div className="text-center my-3">
        <p className="text-decoration-underline mb-1 fw-bold">Welcome To Dashboard</p>
        <h5 className="fw-bold">{user.displayName}</h5>
        
      </div>
      <Divider style={{width:"100%", padding:"1px 0", borderRadius:"0"}}/>

      <ListGroup className="mt-1">
        <Link to="/dashboard" style={sideMenu}><ListGroup.Item > < DashboardIcon/> Dashboard</ListGroup.Item> </Link>

        { admin && 
          <Accordion>
        <AccordionSummary
          expandIcon={< AddIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding:"0", margin:"0 15px"}}
        >
          <Typography style={sideMenu} className="ms-3">Add Item</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0"}}>
          <Link to={`/dashboard/addarticles`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Article</ListGroup.Item> </Link>
          <Link to={`/dashboard/addevents`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Events</ListGroup.Item> </Link>
          <Link to={`/dashboard/addprogram`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Program</ListGroup.Item> </Link>
          <Link to={`/dashboard/addcareer`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Career</ListGroup.Item> </Link>
        </AccordionDetails>
      </Accordion>
        }

      <Accordion>
        <AccordionSummary
          expandIcon={< AddIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding:"0", margin:"0 15px"}}
        >
          <Typography style={sideMenu} className="ms-3">Manage Item</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0"}}>
          <Link to={`/dashboard/manageArticles`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Articles</ListGroup.Item> </Link>
          <Link to={`/dashboard/manageEvents`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Events</ListGroup.Item> </Link>
          <Link to={`/dashboard/managePrograms`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Program</ListGroup.Item> </Link>
          <Link to={`/dashboard/manageCareer`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Career</ListGroup.Item> </Link>
        </AccordionDetails>
      </Accordion>
      {
        admin &&
        <Accordion>
        <AccordionSummary
          expandIcon={< AddIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding:"0", margin:"0 15px"}}
        >
          <Typography style={sideMenu} className="ms-3">Media</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:"0"}}>
          <Link to={`/dashboard/manageArticles`} style={sideMenu}><ListGroup.Item> < ImageIcon/> Images </ListGroup.Item> </Link>
          <Link to={`/dashboard/manageEvents`} style={sideMenu}><ListGroup.Item> < VideoCameraBackIcon/> Videos</ListGroup.Item> </Link>
        </AccordionDetails>
      </Accordion>
      }

      { admin &&
        <Link to={`/dashboard/makeAdmin`} style={sideMenu}><ListGroup.Item> <AddModeratorIcon /> Make Admin</ListGroup.Item> </Link>
      }
        
        { admin &&
        <Link to={`/dashboard/donatonList`} style={sideMenu}><ListGroup.Item> < ListAltIcon/> Donation List</ListGroup.Item></Link>
        }

        <Link to={`/home`} style={sideMenu}><ListGroup.Item onClick={logout}> < LogoutIcon/> Logout</ListGroup.Item> </Link>
    </ListGroup>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
        <AppBar position="fixed"
        sx={{  width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { xs: "block", sm: "none" }, }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        
        <Outlet />
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;