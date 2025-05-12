import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link, MenuItem } from '@mui/material';
import React from 'react';
import { NavItem } from '../../../types/reservation';

const navItems: readonly NavItem[] = [
  { name: 'Qui sommes-nous ?', anchor: 'about-section' },
  { name: 'Nos valeurs', anchor: 'values-section' },
  { name: 'Réservez !', anchor: 'reservation-section', highlight: true },
] as const;

function NavBar() {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  return (
    <AppBar
      position="relative"
      color="transparent"
      elevation={0}
      sx={{ boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {/* Logo section */}
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
            <Box
              component="img"
              src="/images/logo.svg"
              alt="Café Neko Logo"
              sx={{ height: '90px', display: { xs: 'none', md: 'block' } }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map(item => (
              <Link
                key={item.name}
                href={`#${item.anchor}`}
                underline="none"
                sx={{
                  mx: 1.6,
                  color: item.highlight ? '#71A894' : '#303031',
                  fontFamily: 'ProximaNova-Medium, sans-serif',
                  fontWeight: 500,
                  fontSize: '1.2rem',
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="menu de navigation"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              {navItems.map(item => (
                <MenuItem
                  key={item.name}
                  onClick={handleMenuClose}
                  component={Link}
                  href={`#${item.anchor}`}
                  sx={{
                    color: item.highlight ? '#71A894' : '#303031',
                    fontFamily: 'ProximaNova-medium, sans-serif',
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
