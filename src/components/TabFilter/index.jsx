import React, { useEffect, useRef, useState } from 'react';
import { Box, Chip, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const TabFilter = () => {
    const filterTabs = ["Tout", "Musique", "Jeux", "Films", "Actualités", "En direct", "Apprendre", "Sport", "Podcasts","Tout", "Musique", "Jeux", "Films", "Actualités", "En direct", "Apprendre", "Sport", "Podcasts", "Tout", "Musique", "Jeux", "Films", "Actualités", "En direct", "Apprendre", "Sport", "Podcasts"];
    

    const filterRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)


    const checkScroll = () => {
      if (!filterRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = filterRef.current
      setShowLeft(scrollLeft > 0)
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1)
    }


    useEffect(() => {
      checkScroll()

      const el = filterRef.current
      if (el) el.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)

      return () => {
        el && el.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }, [])


    const scroll = (direction) => {
      if (!filterRef.current) return
      const scrollAmount = 200
      filterRef.current.scrollBy({
        left : direction === "left" ? -scrollAmount : scrollAmount,
        behavior : "smooth"        
      })
    }
    


    return (
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', pb: 2, pt: '2px',}}>
          {showLeft && <IconButton sx= {{ position : 'absolute', backgroundColor: 'white', left: 0, ml: -2, zIndex: 1, '&:hover' : {backgroundColor: '#ccc'} }}>
            <ChevronLeft fontSize='small' sx={{ color: 'black' }} onClick={() => scroll("left")} />
          </IconButton > }
        <Box sx={{ display: 'flex', gap: 1, width: '100%', overflowX: 'auto', alignItems: 'center', scrollBehavior: 'smooth', scrollbarWidth: 'none' }} ref={filterRef}>
          {
            filterTabs.map((filter, index) => (
              <Chip 
                key={index} 
                label={filter} 
                clickable 
                sx={{ backgroundColor: index === 0 ? 'black' : '#f1f1f1', color: index === 0 ? 'white':'black', fontWeight: '550' }}
              />
            ))
          }
        </Box>
          {showRight && <IconButton sx={{ position: 'absolute', backgroundColor: 'white', mr: -2, right: 0, zIndex: 1, '&:hover' : {backgroundColor: '#ccc'} }} >
              <ChevronRight fontSize='small' sx={{color: 'black'}} onClick={() => scroll("right")} />
            </IconButton >}
      </Box>
    );
}

export default TabFilter;