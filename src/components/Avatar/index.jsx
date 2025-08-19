import { Box } from '@mui/material';
import React from 'react';

const Avatar = ({ src, alt, size = 40, fallback="L" }) => {   
  return (
  src ? ( <img
    src={src}
    alt={alt}
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover',
    }} 
  /> 
): (
    <Box 
        sx={{
            display: "flex", 
            width: "35px", 
            height: "35px", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "white", 
            borderRadius: 50, 
            backgroundColor: "gray",
            fontSize: "1.2rem",
        }}
    > 
        {fallback}
    </Box>
)
  );
}

export default Avatar;