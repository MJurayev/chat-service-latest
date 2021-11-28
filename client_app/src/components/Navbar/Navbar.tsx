import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: Event) => {
    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(anchorEl);
  };
  return (
    <AppBar style={{ height: '100%', justifyContent: 'flex-start' }} position="static">
      <Toolbar style={{ height: '70%' }}>
        <IconButton
          onClick={() => {
            console.log('Navbarni yaxshir');
          }}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {true ? 'Online' : 'Offline'}
        </Typography>
        <Typography variant="h6">{`Jo'rayev Mansur`}</Typography>

        {/*  onClick={(e:Event) => {handleMenu(e)}} */}
        <div>
          <IconButton
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
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem
              style={{ color: 'red' }}
              onClick={() => {
                console.log('Logout');
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
