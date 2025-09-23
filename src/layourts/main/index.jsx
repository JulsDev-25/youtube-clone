import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import { Box, CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import SideBar from "../../components/SideBar";
import TabFilter from "../../components/TabFilter";
import VideoCard from "../../components/VideoCard";
import miniature from '../../assets/img/hq720.webp';
import authPhoto from '../../assets/img/hq720.webp';
import ShotCard from "../../components/ShotCard";

const Main = () => {
    const sideBarRef = useRef(null)
    const [openDrawer, setOpenDrawer] = useState(false);
    const [sideBarwidth, setSideBarWidth] = useState(68)

    useEffect(() => {
      if (sideBarRef.current) {
        console.log("Sidebar ref:", sideBarRef.current.offsetWidth);
        setSideBarWidth(sideBarRef.current.offsetWidth)
      }
    }, [openDrawer])
    

    const theme = useTheme();

    const Videos = [
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
      {
        miniature: miniature,
        titre: "The Day Amad Diallo SHOCKED Ruben Amorim & The World",
        description:
          "Amad Diallo scored a sensational solo goal to help Manchester United Under-23s to a 3-1 win over Sporting Lisbon in the UEFA Youth League.",
        auteur: {
          nom: "11Edit",
          photo: authPhoto,
        },
        durée: "12:34",
        vues: "1.2M",
        date: "3 jours",
      },
    ];

    return (
        <Box sx={{flex:1, position: "relative"}}>

            <CssBaseline />

            <NavBar setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />

            <Box sx={{ display: 'flex', }}>
                <SideBar open={openDrawer} sideBarRef={sideBarRef} />

                <Box component="main" sx={{ flexGrow: 1, px: 3, overflow: "hidden" }}>
                  <Box sx={{width: {sm: `calc(100% - 48px)`, lg: `calc(100% - ${sideBarwidth}px - 48px)`}, position: 'fixed', top: '64px', backgroundColor: '#fffc', backdropFilter: 'blur(10px)'}} >
                    <TabFilter />
                  </Box>
                  
                  {/* First section video card */}
                  <Box sx={{ mt: {xs: '64px', sm: '0px'} }}></Box>
                  <Grid container spacing={2} sx={{ mt: '64px', flexWrap: 'nowrap', display: {xs: 'none', sm: 'flex'} }}>
                    {Videos.slice(0,2).map((video, index) => (
                      <VideoCard 
                        key={index}
                        miniature={video.miniature}
                        titre={video.titre}
                        description={video.description}
                        auteur={video.auteur}
                        durée={video.durée}
                        vues={video.vues}
                        date={video.date}
                      />
                    ))}
                  </Grid>

                  {/* Second section shot card */}
                  <Box section='second-section' >
                    {/* Shot card section */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                      Shorts
                    </Typography>

                    <Grid container spacing={2} sx={{ flexWrap: 'nowrap'}}>
                      {Videos.slice(0,3).map((video, index) => (
                        <ShotCard key={index} />
                      ))}
                    </Grid>
                  </Box>

                  {/* thirdth section video card */}
                  <Grid container spacing={2} sx={{ mt: '50px'}}>
                    {Videos.map((video, index) => (
                      <VideoCard 
                        key={index}
                        miniature={video.miniature}
                        titre={video.titre}
                        description={video.description}
                        auteur={video.auteur}
                        durée={video.durée}
                        vues={video.vues}
                        date={video.date}
                      />
                    ))}
                  </Grid>

                  {/* Second section video card */}
                </Box>
            </Box>
        </Box>
    )
}

export default Main