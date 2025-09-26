import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import { Box, CssBaseline, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
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

    const isXs = useMediaQuery(theme.breakpoints.only('xs'))
    const isSm = useMediaQuery(theme.breakpoints.only('sm'))
    const isMd = useMediaQuery(theme.breakpoints.only('md'))
    const isLg = useMediaQuery(theme.breakpoints.only('lg'))
    const isXl = useMediaQuery(theme.breakpoints.only('xl'))

    let nbrElShot = 2
    let nbrElVideo = 0

    if (isXs) {
      nbrElShot = 2
      nbrElVideo = 0
    }
    if (isSm) {
      nbrElShot = 3
      nbrElVideo = 2
    }
    if (isMd) {
      nbrElShot = 5
      nbrElVideo = 3
    }
    if (isLg) {
      nbrElShot = 6
      nbrElVideo = 4
    }
    if (isXl) {
      nbrElShot = 6
      nbrElVideo = 4
    }


    const Videos = [
  {
    miniature: "https://i.ytimg.com/vi/GvxiIvq9kWQ/hqdefault.jpg",
    titre: "Detroit Lions vs Baltimore Ravens Game Highlights | 2025",
    description: "Temps forts du match Lions vs Ravens — résumé complet.",
    auteur: { nom: "NFL", photo: "https://i.ytimg.com/vi/GvxiIvq9kWQ/hqdefault.jpg" },
    durée: "11:02",
    vues: "345K",
    date: "aujourd'hui",
  },
  {
    miniature: "https://i.ytimg.com/vi/62peQdQv4uo/hqdefault.jpg",
    titre: "V 'FRI(END)S' Official MV",
    description: "Clip officiel — sortie et crédits.",
    auteur: { nom: "V Official", photo: "https://i.ytimg.com/vi/62peQdQv4uo/hqdefault.jpg" },
    durée: "3:50",
    vues: "1.1M",
    date: "1 an",
  },
  {
    miniature: "https://i.ytimg.com/vi/QUEHj-a1D-Q/hqdefault.jpg",
    titre: "VTech KidiZoom Smartwatch DX2: Review & Demo",
    description: "Revue complète et démo du KidiZoom DX2.",
    auteur: { nom: "Tech Reviewer", photo: "https://i.ytimg.com/vi/QUEHj-a1D-Q/hqdefault.jpg" },
    durée: "8:43",
    vues: "72K",
    date: "2 ans",
  },
  {
    miniature: "https://i.ytimg.com/vi/6WxofgjVpXg/hqdefault.jpg",
    titre: "Gen V Season 2 - Official Trailer | Prime Video",
    description: "Bande-annonce officielle de la Saison 2 de Gen V.",
    auteur: { nom: "Prime Video", photo: "https://i.ytimg.com/vi/6WxofgjVpXg/hqdefault.jpg" },
    durée: "2:16",
    vues: "3.2M",
    date: "1 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/3VVwHxAX86E/hqdefault.jpg",
    titre: "Maryland vs Wisconsin | COLLEGE FOOTBALL HIGHLIGHTS | 9/20/2025",
    description: "Les meilleurs moments du match Maryland - Wisconsin.",
    auteur: { nom: "NBC Sports", photo: "https://i.ytimg.com/vi/3VVwHxAX86E/hqdefault.jpg" },
    durée: "10:25",
    vues: "31K",
    date: "3 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/TRaZ4bZxDw0/hqdefault.jpg",
    titre: "Purdue vs. Notre Dame | COLLEGE FOOTBALL HIGHLIGHTS",
    description: "Résumé des actions marquantes du match.",
    auteur: { nom: "College Football", photo: "https://i.ytimg.com/vi/TRaZ4bZxDw0/hqdefault.jpg" },
    durée: "12:30",
    vues: "54K",
    date: "5 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/HAWYOuMGkK0/hqdefault.jpg",
    titre: "V 'Winter Ahead (with PARK HYO SHIN)' Official MV",
    description: "Clip officiel avec PARK HYO SHIN.",
    auteur: { nom: "V Official", photo: "https://i.ytimg.com/vi/HAWYOuMGkK0/hqdefault.jpg" },
    durée: "4:12",
    vues: "220K",
    date: "9 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/Nv9v15r2ih0/hqdefault.jpg",
    titre: "Gen V - Official Teaser Trailer",
    description: "Teaser de la série Gen V.",
    auteur: { nom: "The Boys", photo: "https://i.ytimg.com/vi/Nv9v15r2ih0/hqdefault.jpg" },
    durée: "0:46",
    vues: "1.8M",
    date: "2 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/xHr0JxLREWQ/hqdefault.jpg",
    titre: "Florida Gators vs. Miami Hurricanes | Full Game Highlights",
    description: "Temps forts et meilleures actions du match.",
    auteur: { nom: "College Highlights", photo: "https://i.ytimg.com/vi/xHr0JxLREWQ/hqdefault.jpg" },
    durée: "15:02",
    vues: "120K",
    date: "2 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/qgFNCy6u4UQ/hqdefault.jpg",
    titre: "Conan Gray - This Song (Official Music Video)",
    description: "Clip officiel de Conan Gray pour «This Song».",
    auteur: { nom: "Conan Gray", photo: "https://i.ytimg.com/vi/qgFNCy6u4UQ/hqdefault.jpg" },
    durée: "3:20",
    vues: "2.5M",
    date: "3 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/VQRLujxTm3c/hqdefault.jpg",
    titre: "Grand Theft Auto VI Trailer 2",
    description: "Deuxième trailer officiel de GTA VI.",
    auteur: { nom: "Rockstar Games", photo: "https://i.ytimg.com/vi/VQRLujxTm3c/hqdefault.jpg" },
    durée: "2:49",
    vues: "45M",
    date: "4 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/7nQuKeWbWSI/hqdefault.jpg",
    titre: "WEEK 4 HIGHLIGHTS from the 2025-26 college football season",
    description: "Les meilleurs moments de la semaine 4.",
    auteur: { nom: "ESPN", photo: "https://i.ytimg.com/vi/7nQuKeWbWSI/hqdefault.jpg" },
    durée: "9:40",
    vues: "210K",
    date: "6 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/3VVwHxAX86E/hqdefault.jpg",
    titre: "Maryland Terrapins vs. Wisconsin Badgers | Highlights",
    description: "Résumé condensé du match.",
    auteur: { nom: "NBC Sports", photo: "https://i.ytimg.com/vi/3VVwHxAX86E/hqdefault.jpg" },
    durée: "8:12",
    vues: "31K",
    date: "3 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/LEdNCS8luWE/hqdefault.jpg",
    titre: "UMI, V - wherever u r (ft. V of BTS) official lyric video",
    description: "Lyric video — UMI et V.",
    auteur: { nom: "UMI Official", photo: "https://i.ytimg.com/vi/LEdNCS8luWE/hqdefault.jpg" },
    durée: "3:05",
    vues: "890K",
    date: "1.7 ans",
  },
  {
    miniature: "https://i.ytimg.com/vi/pk7ESz6vtyA/hqdefault.jpg",
    titre: "Winter Bear by V",
    description: "Winter Bear — performance / clip.",
    auteur: { nom: "V", photo: "https://i.ytimg.com/vi/pk7ESz6vtyA/hqdefault.jpg" },
    durée: "4:02",
    vues: "5.3M",
    date: "6 ans",
  },
  {
    miniature: "https://i.ytimg.com/vi/MKaGSIm9juI/hqdefault.jpg",
    titre: "Europa Universalis V: Official Announcement Trailer",
    description: "Annonce officielle du nouveau jeu Europa Universalis V.",
    auteur: { nom: "Paradox Interactive", photo: "https://i.ytimg.com/vi/MKaGSIm9juI/hqdefault.jpg" },
    durée: "1:55",
    vues: "410K",
    date: "4 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/TLxoXqqX5CU/hqdefault.jpg",
    titre: "Best Smartwatch for Heart Rate: Scientific Review - 12 ...",
    description: "Comparatif scientifique des montres connectées pour fréquence cardiaque.",
    auteur: { nom: "Health Tech", photo: "https://i.ytimg.com/vi/TLxoXqqX5CU/hqdefault.jpg" },
    durée: "12:00",
    vues: "98K",
    date: "7 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/xg4QJjmILf4/hqdefault.jpg",
    titre: "Illinois vs Indiana | COLLEGE FOOTBALL HIGHLIGHTS",
    description: "Résumé du match Illini vs Hoosiers.",
    auteur: { nom: "Big Ten Network", photo: "https://i.ytimg.com/vi/xg4QJjmILf4/hqdefault.jpg" },
    durée: "10:40",
    vues: "28K",
    date: "4 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/aB_2ZRn9F_k/hqdefault.jpg",
    titre: "V Rising - Launch Trailer",
    description: "Trailer de lancement du jeu V Rising.",
    auteur: { nom: "Stunlock Studios", photo: "https://i.ytimg.com/vi/aB_2ZRn9F_k/hqdefault.jpg" },
    durée: "2:10",
    vues: "1.2M",
    date: "mai 8, 2025",
  },
  {
    miniature: "https://i.ytimg.com/vi/NOnHKBpnFkE/hqdefault.jpg",
    titre: "Florida vs #4 Miami Highlights | Week 4 | 2025",
    description: "Temps forts du match Florida contre Miami.",
    auteur: { nom: "College Highlights", photo: "https://i.ytimg.com/vi/NOnHKBpnFkE/hqdefault.jpg" },
    durée: "9:18",
    vues: "64K",
    date: "3 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/LEdNCS8luWE/hqdefault.jpg",
    titre: "UMI - wherever u r (official lyric video ft. V)",
    description: "Lyric video officielle.",
    auteur: { nom: "UMI Official", photo: "https://i.ytimg.com/vi/LEdNCS8luWE/hqdefault.jpg" },
    durée: "3:05",
    vues: "890K",
    date: "1.7 ans",
  },
  {
    miniature: "https://i.ytimg.com/vi/l8XxoeV5LRU/hqdefault.jpg",
    titre: "V/H/S/HALLOWEEN | Official Trailer | Shudder",
    description: "Bande-annonce officielle pour V/H/S/HALLOWEEN.",
    auteur: { nom: "Shudder", photo: "https://i.ytimg.com/vi/l8XxoeV5LRU/hqdefault.jpg" },
    durée: "1:50",
    vues: "260K",
    date: "8 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/obv2j5P2kys/hqdefault.jpg",
    titre: "Sneaker Wars: Adidas v Puma | Official Trailer | Hulu",
    description: "Trailer officiel sur la rivalité Adidas vs Puma.",
    auteur: { nom: "Hulu", photo: "https://i.ytimg.com/vi/obv2j5P2kys/hqdefault.jpg" },
    durée: "2:05",
    vues: "97K",
    date: "2 mois",
  },
  {
    miniature: "https://i.ytimg.com/vi/mDLqOjVy5mw/hqdefault.jpg",
    titre: "The Bride! - Official Teaser Trailer (2026)",
    description: "Teaser du film The Bride! avec Jessie Buckley.",
    auteur: { nom: "Official Trailers", photo: "https://i.ytimg.com/vi/mDLqOjVy5mw/hqdefault.jpg" },
    durée: "1:34",
    vues: "120K",
    date: "futur",
  },
  {
    miniature: "https://i.ytimg.com/vi/HyzyRHAHJl8/hqdefault.jpg",
    titre: "V 'Love Me Again' Official MV",
    description: "Clip officiel pour 'Love Me Again'.",
    auteur: { nom: "V Official", photo: "https://i.ytimg.com/vi/HYzyRHAHJl8/hqdefault.jpg" },
    durée: "3:46",
    vues: "420K",
    date: "2 ans",
  },
  {
    miniature: "https://i.ytimg.com/vi/uJaqnJ6-xfY/hqdefault.jpg",
    titre: "10 HOURS of Awesome NFL Highlights",
    description: "Compilation de 10 heures des meilleures actions NFL.",
    auteur: { nom: "NFL Compilations", photo: "https://i.ytimg.com/vi/uJaqnJ6-xfY/hqdefault.jpg" },
    durée: "10:00:00",
    vues: "2.1M",
    date: "7 mois",
  }
];


const Shorts = [
  {
    miniature: "https://i.ytimg.com/vi/U80rf731_DU/hqdefault.jpg",
    titre: "New Trending Song #shorts #trending #dance #viral",
    description: "Clip court sur la dernière musique virale, challenge danse.",
    auteur: { nom: "Sirra Guru Randhawa", photo: "https://i.ytimg.com/vi/U80rf731_DU/hqdefault.jpg" },
    durée: "0:15",
    vues: "1.5M",
    date: "hier",
  },
  {
    miniature: "https://i.ytimg.com/vi/p6amZP2ZdWI/hqdefault.jpg",
    titre: "Emoji Challenge! Guess the Song 🎵 #shorts",
    description: "Un créateur reproduit des instruments d'après des emojis, devinez la chanson.",
    auteur: { nom: "Landen Purifoy", photo: "https://i.ytimg.com/vi/p6amZP2ZdWI/hqdefault.jpg" },
    durée: "0:22",
    vues: "350K",
    date: "2 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/nIvkYzSDNVY/hqdefault.jpg",
    titre: "Speed Drawing – Portrait Rapide #shorts",
    description: "Dessin en accéléré d’un portrait réaliste.",
    auteur: { nom: "ArtFlow Studio", photo: "https://i.ytimg.com/vi/nIvkYzSDNVY/hqdefault.jpg" },
    durée: "0:30",
    vues: "500K",
    date: "3 jours",
  },
  // mock jusqu'à 10 entries si tu veux — je peux compléter
  {
    miniature: "https://i.ytimg.com/vi/p6amZP2ZdWI/hqdefault.jpg",
    titre: "Astuce cuisine rapide #shorts",
    description: "Réalisation d’une recette express en 30 secondes.",
    auteur: { nom: "ChefMinute", photo: "https://i.ytimg.com/vi/mockID1/hqdefault.jpg" },
    durée: "0:30",
    vues: "200K",
    date: "4 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/U80rf731_DU/hqdefault.jpg",
    titre: "Blague du jour 😂 #shorts",
    description: "Un moment drôle pour égayer ta journée.",
    auteur: { nom: "HumourMinute", photo: "https://i.ytimg.com/vi/mockID2/hqdefault.jpg" },
    durée: "0:12",
    vues: "750K",
    date: "hier",
  },
  {
    miniature: "https://i.ytimg.com/vi/nIvkYzSDNVY/hqdefault.jpg",
    titre: "Challenge fitness: 10 push-ups #shorts",
    description: "Motivation pour bouger un peu.",
    auteur: { nom: "FitFlash", photo: "https://i.ytimg.com/vi/mockID3/hqdefault.jpg" },
    durée: "0:20",
    vues: "400K",
    date: "2 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/mockID4/hqdefault.jpg",
    titre: "Tour rapide: déco bureau #shorts",
    description: "Transformation DIY de bureautique en 15 secondes.",
    auteur: { nom: "DecoExpress", photo: "https://i.ytimg.com/vi/mockID4/hqdefault.jpg" },
    durée: "0:18",
    vues: "150K",
    date: "5 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/mockID5/hqdefault.jpg",
    titre: "Animal trop mignon #shorts",
    description: "Une scène adorable avec un chaton.",
    auteur: { nom: "CuteAnimals", photo: "https://i.ytimg.com/vi/mockID5/hqdefault.jpg" },
    durée: "0:14",
    voies: "900K",
    date: "il y a 1 jour",
  },
  {
    miniature: "https://i.ytimg.com/vi/mockID6/hqdefault.jpg",
    titre: "Top astuces Photo #shorts",
    description: "3 astuces pour améliorer tes photos rapidement.",
    auteur: { nom: "PhotoHack", photo: "https://i.ytimg.com/vi/mockID6/hqdefault.jpg" },
    durée: "0:25",
    vues: "320K",
    date: "6 jours",
  },
  {
    miniature: "https://i.ytimg.com/vi/mockID7/hqdefault.jpg",
    titre: "Dance Off – défi express #shorts",
    description: "Un petit battle de danse en milieu urbain.",
    auteur: { nom: "StreetMoves", photo: "https://i.ytimg.com/vi/mockID7/hqdefault.jpg" },
    durée: "0:17",
    vues: "600K",
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
                  <Box sx={{width: {xs: `calc(100% - 48px)`, lg: `calc(100% - ${sideBarwidth}px - 48px)`}, position: 'fixed', top: '64px', backgroundColor: '#fffe', backdropFilter: 'blur(10px)'}} >
                    <TabFilter />
                  </Box>
                  
                  {/* First section video card */}
                  <Box sx={{ mt: {xs: '64px', sm: '0px'} }}></Box>
                  <Grid container spacing={2} sx={{ mt: '64px', flexWrap: 'nowrap', display: {xs: 'none', sm: 'flex'} }}>
                    {Videos.slice(0,nbrElVideo).map((video, index) => (
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

                  {/* ShotVideos : Second section shot card */}
                  <Box section='second-section' >
                    {/* Shot card section */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                      Shorts
                    </Typography>

                    <Grid container spacing={2} sx={{ flexWrap: 'nowrap'}}>
                      {Shorts.slice(0,nbrElShot).map((video, index) => (
                        <ShotCard 
                          key={index} 
                          miniature={video.miniature}
                          titre={video.titre}
                          description={video.description}
                          vues={video.vues}
                        
                        />
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