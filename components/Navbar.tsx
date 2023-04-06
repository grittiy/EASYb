'use client'

import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  IconButton,
  ListItemText
} from '@mui/material'
import Head from 'next/head'
import React, { use, useState } from 'react'
import Image from 'next/image'
import { Box } from '@mui/system';
import WidgetsIcon from '@mui/icons-material/Widgets';

export default function Navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDrawer, setopenDrawer] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState('calendar');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" sx={{ background: "#fcfafa" }}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar >
          <Typography variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/easyb1.png"
              alt="EASYb"
              width={278}
              height={50}
            />

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Box sx={{ marginLeft:'auto' }}>           
           <Drawer open={openDrawer}
              onClose={() => setopenDrawer(false)}>
              <List onClick={() => setopenDrawer(false)}>
                <ListItemButton >
                  <ListItemIcon> 
                    <ListItemText primary="ปฏิทิน" />
                  </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon> 
                    <ListItemText primary="บริการต่างๆ" />
                  </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon> 
                    <ListItemText primary="คู่มือLINE OA" />
                  </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon> 
                    <ListItemText primary="เข้าสู่ระบบ" />
                  </ListItemIcon>
                </ListItemButton>              
              </List>
            </Drawer>
            <IconButton sx={{marginLeft:"auto"}} onClick={() => setopenDrawer(!openDrawer)}>
              <WidgetsIcon sx={{ color: "#311b92" }} />
            </IconButton>
            </Box>
            <Box sx={{marginLeft:'auto'}}>
            <Image
              src="/easyb1.png"
              alt="EASYb"
              width={230}
              height={38}
            />
            </Box>
           
          </Box>
  


          <Container maxWidth="sm">
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                aria-label="secondary tabs"
                sx={{ color: "#000" , fontFamily: 'monospace',}}>
                <Tab value="calendar" label="ปฏิทิน" sx={{fontSize:"16px"}}/>
                <Tab value="services" label="บริการต่างๆ" sx={{fontSize:"16px"}}/>
                <Tab value="manual" label="คู่มือLINE OA" sx={{fontSize:"16px"}}/>
                <Tab value="login" label="เข้าสู่ระบบ" sx={{fontSize:"16px"}}/>
              </Tabs>
            </Box>
          </Container>

        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </div >
  )
}

