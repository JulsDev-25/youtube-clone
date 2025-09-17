import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton } from '@mui/material';
import Avatar from '../Avatar';
import { MoreVert } from '@mui/icons-material';

const VideoCard = ({miniature, titre, description, auteur, durée, vues, date, ...props}) => {
  return (
    <Grid size={{xs:12, sm:6, md:6, lg:4}} {...props}>
      <CardMedia
        sx={{ width: "100%", aspectRatio: '16/9', borderRadius: "20px" }}
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
          <IconButton sx={{height: 40, width: 40, mr: '-10px', mt: '-10px'}}>
            <MoreVert />
          </IconButton>
        </Box>
      </CardContent>
    </Grid>
  );
}

export default VideoCard;