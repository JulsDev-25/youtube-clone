import { Label } from '@mui/icons-material';
import { Box, Button, Chip } from '@mui/material';
import React from 'react';

const TabFilter = () => {
    const filterTabs = ["Tout", "Musique", "Jeux", "Films", "Actualités", "En direct", "Apprendre", "Sport", "Podcasts","Tout", "Musique", "Jeux", "Films", "Actualités", "En direct", "Apprendre", "Sport", "Podcasts", "Tout", "Musique", "Jeux", "Films", "Actualités", "En direct", "Apprendre", "Sport", "Podcasts"];
    return (
      <Box sx={{ display: "flex", width: "max-content",  gap: 2, overflowX: "scroll", mb: 2, py: 1 }}>
        {filterTabs.map((tab, index) => (
          <Chip label={tab} key={index} onClick={()=>{}} sx={{
              fontWeight: 550,
              fontSize: 14,
              py: 1,
              wrap: "nowrap",
              borderRadius: 2,
              bgcolor: index === 0 ? "black" : "#f0f0f0",
              color: index === 0 ? "primary.contrastText" : "text.primary",
              "&:hover": {
                bgcolor: index === 0 ? "primary.dark" : "action.hover",
              },
              "& .MuiButton-paper": { boxShadow: "none"}
            }}/>
        ))}
      </Box>
    );
}

export default TabFilter;