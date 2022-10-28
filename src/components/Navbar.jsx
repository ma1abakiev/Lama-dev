import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material'

import myPhoto from '../assets/img/myPhoto.jpeg'

const StyleToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: 20,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant="h6">
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }}></PetsIcon>
        <Search>
          <InputBase placeholder="searc"></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src={myPhoto}
            onClick={(e) => setOpen((prev) => !prev)}
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen((prev) => !prev)}>
          <Avatar
            sx={{ width: 30, height: 30,}}
            src={myPhoto}
          ></Avatar>
          <Typography variant="span">Ramzan</Typography>
        </UserBox>
      </StyleToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 4 }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
