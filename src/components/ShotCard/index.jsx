import React, { useState } from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Menu, MenuItem, Typography } from '@mui/material';
import shotCardImgage from '../../assets/img/hq720.webp'
import { DoNotDisturb, Feedback, PlaylistPlay } from '@mui/icons-material';


const ShotCard = ({miniature, titre, description, vues}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }


  return (
    <Grid >
      <CardMedia
        component="img"
        image={miniature}
        alt="shot miniature"
        sx={{ aspectRatio: '10/16', borderRadius: "10px", cursor: 'pointer'}}
      />
      <CardHeader
        action={
          <>
            <IconButton onClick={handleClick} aria-label="settings" sx={{ mr: '-10px'}}>
              <MoreVertIcon />
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
                <DoNotDisturb />
                <Typography variant="body2" >Pas intéressé(e)</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ display: 'flex', alignItems: 'top', gap: '10px' }}>
                <Feedback />
                <Typography variant="body2" >Envoyez des commentaires</Typography>
              </MenuItem>
            </Menu>
          </>
        }
        title={<Typography variant="body1" fontWeight={550} mb={0.5}>{titre} </Typography>}
        subheader={vues}
      />
    </Grid>
  );
}

export default ShotCard;