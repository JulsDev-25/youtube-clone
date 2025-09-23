import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Typography } from '@mui/material';
import { ChevronRight, HomeSharp, MailOutlineSharp } from '@mui/icons-material';

const drawerWidth = 200;

const openedMixin = () => ({
  overflowX: 'hidden',
});

const closedMixin = () => ({
  width: "68px",
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    paddingLeft: 4,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      position: 'relative',
      borderRight: 'none'
    },
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);


const SideBar = ({open, sideBarRef}) => {

  return (
    <Drawer variant="permanent" ref={sideBarRef} open={open} sx={{ display: {xs : open ? 'block': 'none', lg: 'block'}, position: {sm: 'absolute', lg: 'sticky'}, top: '64px', pt:0, height: 'calc(100vh - 64px)' }}>
      <List >
        {["Acceuil", "Shorts", "Abonnements", "Vous"].filter((item) => !(open && item === "Vous")).map(
          (text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: open ? 0 : 48,
                    px: 2.5,
                    borderRadius: 2,
                    py: 0.4
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                        mb: 2.5,
                      },
                ]}
              >
                <Box
                  sx={
                    !open && {
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: 0.5,
                      width: "100%",
                    }
                  }
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        mt: 0.5,
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {index % 2 === 0 ? <HomeSharp  sx={{color: "#444"}} /> : <MailOutlineSharp sx={{color: "#444"}} />}
                  </ListItemIcon>

                  <Typography
                    variant="body"
                    sx={[
                      { fontSize: "11.2px", letterSpacing: "-0.2px" },
                      open ? { display: "none" } : { display: "flex" },
                    ]}
                  >
                    {text}
                  </Typography>
                </Box>


                <ListItemText
                  primary={text}
                  slotProps={{ primary: { fontSize: 14 } }}
                  sx={[
                    open
                      ? {
                          display: "block",
                          opacity: 1,
                          m:0
                        }
                      : {
                          display: "none",
                          opacity: 0,
                        },
                  ]}
                />

              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      {open && (
        <>
          <Divider />
          <List sx={{ mt: 1 }}>
            <ListItemButton sx={{display: 'flex', gap: 1}}>
              <ListItemText primary="Vous" sx={{ pl: 1,}} slotProps={{ primary: { fontWeight: 'bold' } }} />
              <ChevronRight sx={{ color: "#444" }} />
            </ListItemButton>
            {["Historique", "Playlist", "Vous videos", "A regarde plus tard", "Video \"J'aime\""].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: open ? 0 : 48,
                      px: 2.5,
                      borderRadius: 2,
                      py: 0.65
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                        py: 0
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {index % 2 === 0 ? <InboxIcon sx={{color: "#444"}} /> : <MailIcon sx={{color: "#444"}}  />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    slotProps={{ primary: { fontSize: 14 } }}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </>
      )}
    </Drawer>
  );
}


export default SideBar;