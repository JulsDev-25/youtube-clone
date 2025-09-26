import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '../Avatar';
import { Button } from '@mui/material';
import { Add, Mic} from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: 0,
  width: '100%',
  borderBlockWidth: '1px',
  borderBlockStyle: 'solid',
  borderBlockColor: 'rgba(0, 0, 0, 0.2)',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  width: '100%',
}));

const NavBar = ({setOpenDrawer, openDrawer}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, m: 0, p: 0, position: 'sticky', top: 0, zIndex: 100 }}>
      <AppBar position="relative" sx={{ height: '64px', boxSizing: 'border-box', backgroundColor: '#fffe', backdropFilter: 'blur(10px)', color: 'black', boxShadow: 'none', p: 0, m: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/*logo section */}
          <Box sx={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: "5px" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon sx={{fontSize: '27px'}} />
            </IconButton>
            <Typography
              variant="h6"
            >
              YouTube
            </Typography>
          </Box>

          {/*search section */}
          <Box sx={{ display: { xs: 'none', sm:'flex'}, alignItems: 'center', maxWidth: '700px', width: '100%' }}>
              <Search>
                <StyledInputBase
                  placeholder="Rechercher"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <IconButton 
                sx={{ 
                  backgroundColor: "#f2f2f2", 
                  borderTopLeftRadius: '0', 
                  borderBottomLeftRadius: '0', 
                  px: "15px",
                  borderBlockWidth: '1px',
                  borderBlockStyle: 'solid',
                  borderBlockColor: 'rgba(0, 0, 0, 0.2)',
                  borderTopRightRadius: '50px',
                  borderBottomRightRadius: '50px',
                  height: '100%',
                  "&:hover": { backgroundColor: "#e0e0e0"}
                }}
              >
                <SearchIcon />
              </IconButton>
            
            {/* voice search section */}
            <IconButton sx={{ backgroundColor: "#f2f2f2", marginLeft: "8px", "&:hover": { backgroundColor: "#e0e0e0"} }}>
              <Mic />
            </IconButton>
          </Box>

          {/*action section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', gap: "5px"}}>
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: "5px" }}>
                <IconButton sx={{display: {xs: 'flex', sm: 'none'}, alignItems: 'center', justifySelf: "right"}}>
                  <SearchIcon/>
                </IconButton>
                <IconButton sx={{display: {xs: 'flex', sm: 'none'}, alignItems: 'center', justifySelf: "right"}}>
                  <Mic />
                </IconButton>
            </Box>

            <Button variant="contained" startIcon={<Add/>} 
              sx={{ marginLeft: 2, textTransform: 'none', borderRadius: "15px", backgroundColor: "#f2f2f2", color: "black", boxShadow: "none", "&:hover": { backgroundColor: "#e0e0e0", boxShadow: "none" }  }}
            >
              Créer
            </Button>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{"&:hover": { backgroundColor: "#e0e0e0"}, p: "5px"}}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{"&:hover": { boxShadow: "none"}}}
              
            >
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar;