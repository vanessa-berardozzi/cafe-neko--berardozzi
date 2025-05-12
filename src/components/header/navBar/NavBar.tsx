import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const pages = ['Qui sommes-nous ?', 'Nos valeurs', 'Réservez !'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="relative"
      color="transparent"
      elevation={0}
      sx={{
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Logos (mobile/desktop) à gauche */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/images/logo-mobile.svg"
              alt="Café Neko Logo"
              sx={{
                height: '60px',
                display: { xs: 'block', md: 'none' },
                mt: 1,
              }}
            />

            {/* Logo desktop (affiché à partir de md) */}
            <Box
              component="img"
              src="/images/logo.svg"
              alt="Café Neko Logo"
              sx={{
                height: '90px',
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Box>

          {/* Navigation à droite */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Liens de navigation sur desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Typography
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    marginX: 1.6,
                    color: page === 'Réservez !' ? '#71A894' : '#303031',
                    fontFamily: 'ProximaNova-Medium, sans-serif',
                    fontWeight: 500,
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    fontSize: { xs: '1.2rem', md: '1.2rem' },
                  }}
                >
                  {page}
                </Typography>
              ))}
            </Box>

            {/* Menu hamburger sur mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu de navigation"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: 'ProximaNova-medium, sans-serif',
                        color: page === 'Réservez !' ? '#71A894' : '#303031',
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
