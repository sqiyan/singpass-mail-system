import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { Toolbar, Typography, AppBar, IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const StyledAppBar = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    // navigate to /
    navigate('/');
  };

    return(
        <AppBar position="static" elevation={0} sx={{ justifyContent: "space-between" }}>
          <Toolbar variant="regular" sx={{backgroundColor:"#203E96", height: "100%", justifyContent: "center"}}>
            <img style={{ height: 48, objectFit: "fill"}} src="/assets/singpost_logo.png" alt="logo" />
            <Typography fontSize={24} fontWeight={700} sx={{marginLeft:"31.5%"}}> 
              Smart Mail Interface
            </Typography>
            <IconButton color="inherit" sx={{marginLeft:"auto", fontWeight:"800"}} onClick={navigateHome}>
              <RestartAltIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
    )
}

export default StyledAppBar