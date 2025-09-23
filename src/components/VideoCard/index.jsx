import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import Avatar from '../Avatar';
import { AccessTime, DoNotDisturb, DoNotDisturbOn, Feedback, MoreVert, OutlinedFlag, PlaylistPlay, Replay, TurnedInNot } from '@mui/icons-material';

const VideoCard = ({miniature, titre, description, auteur, durée, vues, date, ...props}) => {
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }
  
    const handleClose = () => {
      setAnchorEl(null)
    }


  return (
    <Grid size={{xs:12, sm:6, md:4, lg:3}} {...props}>
      <CardMedia
        sx={{ width: "100%", aspectRatio: '16/9', borderRadius: "20px", cursor: 'pointer' }}
        image={miniature}
        title="miniature"
      />
      <CardContent sx={{ p: 0, pt: 2, overflow: "visible" }}>
        <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
          <Avatar src={auteur.photo} alt="profile" />
          <Box>
            <Typography variant="body1" fontWeight={550} mb={0.5}>{titre} </Typography>
            <Typography variant="body2" color="text.secondary">{auteur.nom} </Typography>
            <Typography variant="body2" color="text.secondary">{vues} vues • il y a {date}</Typography>
          </Box>
          <IconButton onClick={handleClick} sx={{height: 40, width: 40, mr: '-10px', mt: '-10px'}}>
            <MoreVert />
          </IconButton>
          <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}  
            >
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <PlaylistPlay />
                <Typography variant="body2" >Ajouter à la file d'attente</Typography>
              </MenuItem >
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <AccessTime />
                <Typography variant="body2" >Enregistrer dans "A regarder plus tard" </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <TurnedInNot />
                <Typography variant="body2" >Enregistrer dans une playlist</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <Replay />
                <Typography variant="body2" >Partager</Typography>
              </MenuItem >
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <DoNotDisturb />
                <Typography variant="body2" >Pas intéressé(e)</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <DoNotDisturbOn />
                <Typography variant="body2" >Ne pas recommander la chaine</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <OutlinedFlag />
                <Typography variant="body2" >Signaler</Typography>
              </MenuItem>
              
            </Menu>
        </Box>
      </CardContent>
    </Grid>
  );
}

export default VideoCard;