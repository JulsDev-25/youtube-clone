import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import { Box, CssBaseline, Grid, useTheme } from "@mui/material";
import SideBar from "../../components/SideBar";
import TabFilter from "../../components/TabFilter";
import VideoCard from "../../components/VideoCard";
import miniature from '../../assets/img/hq720.webp';
import authPhoto from '../../assets/img/hq720.webp';

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
                  <Box sx={{width: `calc(100% - ${sideBarwidth}px - 48px)`, position: 'fixed', top: '64px', backgroundColor: '#fff'}} >
                    <TabFilter />
                  </Box>
                  
                  {/* First section video card */}
                  <Grid container spacing={2}>
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