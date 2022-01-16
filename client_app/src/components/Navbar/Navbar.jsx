import  {  useState } from 'react';
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <AppBar style={{ height: '100%',  backgroundColor:"#0A1929",justifyContent: 'flex-start' }} position="static">
      <Toolbar style={{ height: '70%', display:"flex", justifyContent:"space-between" }}>
        <Typography variant="h6">{`Jo'rayev Mansur`}</Typography>
        <div>
          <IconButton
            onClick={handleMenu}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem
              style={{ color: 'red' }}
              onClick={() => {
                console.log('Logout');
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
