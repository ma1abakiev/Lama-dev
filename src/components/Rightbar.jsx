import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  Divider,
  ListItemAvatar,
  ListItemText,
  List,
  ListItem,
} from '@mui/material'
import img from '../assets/img/myPhoto.jpeg'
import img1 from '../assets/img/priroda.jpg'
import img2 from '../assets/img/nature.jpg'
import img3 from '../assets/img/priroda-gora.jpg'

const Rightbar = () => {
  return (
    <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'} width={240}>
        <Typography variant="h6" fontWeight={100} mt={1}>
          Friends Online
        </Typography>
        <AvatarGroup max={4}>
          <Avatar src={img} alt="" />
          <Avatar src={img} alt="" />
          <Avatar src={img} alt="" />
          <Avatar src={img} alt="" />
          <Avatar src={img} alt="" />
          <Avatar src={img} alt="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={img1} alt=""></img>
          </ImageListItem>
          <ImageListItem>
            <img src={img2} alt=""></img>
          </ImageListItem>
          <ImageListItem>
            <img src={img3} alt=""></img>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest conversetions
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={img2} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
