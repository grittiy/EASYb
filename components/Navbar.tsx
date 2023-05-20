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
  ListItemText,
  Button,
  Stack,
  Tooltip,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material'
import React, { use, useState } from 'react'
import Image from 'next/image'
import { Box } from '@mui/system';
import WidgetsIcon from '@mui/icons-material/Widgets';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function Navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDrawer, setopenDrawer] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState('calendar');
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };





  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <div>
      <AppBar position="static" sx={{ background: "#fcfafa" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
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
              <div>
                <Image
                  src="/easyb1.png"
                  alt="EASYb"
                  width={278}
                  height={50}
                />
              </div>

            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}>
              <IconButton
                onClick={() => setopenDrawer(!openDrawer)}>

                <WidgetsIcon sx={{ color: "#311b92" }} />
              </IconButton>
              <React.Fragment>
                <Drawer

                  open={openDrawer}
                  onClose={() => setopenDrawer(false)}>

                  <List onClick={() => setopenDrawer(false)}>
                    <ListItemButton href="/">
                      <ListItemIcon>
                        <ListItemText primary="หน้าหลัก" />
                      </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton href="#">
                      <ListItemIcon>
                        <ListItemText primary="ปฏิทิน" />
                      </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton href="#">
                      <ListItemIcon>
                        <ListItemText primary="บริการต่างๆ" />
                      </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton href="#">
                      <ListItemIcon>
                        <ListItemText primary="คู่มือLINE OA" />
                      </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton href="#">
                      <ListItemIcon>
                        <ListItemText primary="เข้าสู่ระบบ" />
                      </ListItemIcon>
                    </ListItemButton>
                  </List>

                </Drawer>
              </React.Fragment>

            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <div>
                <Image
                  src="/easyb1.png"
                  alt="EASYb"
                  width={230}
                  height={38}
                />

              </div>

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}   }}>
              <Stack onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft:'30%' }}
              >

                <Button href="#">ปฏิทิน</Button>
                <Button href="#">บริการต่างๆ</Button>
                <Button href="#">คู่มือLINE OA</Button>
              </Stack>
            </Box>
            <Box  sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              </Tooltip>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>

            {/*
          


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
                <Tab href='/login' value="login" label="เข้าสู่ระบบ" sx={{fontSize:"16px"}}/>
              </Tabs>
            </Box>
          </Container>*/}

          </Toolbar>
        </Container>
      </AppBar>
    </div >
  )
}

