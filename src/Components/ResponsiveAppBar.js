import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import Logo from '../Assets/Logo/Logo.png'; // Adjust the path to your logo file

const pages = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Services', path: '/services' },
  { id: 4, title: 'Contact Us', path: '/contactus' },
  { id: 5, title: 'Services1', path: '/services1' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const handlePageNavigation = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, height: 60, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HandyHand
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
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
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handlePageNavigation(page.path)}>
                  <Typography variant="body1" textAlign="center">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Box component="form" onSubmit={handleSearchSubmit} sx={{ display: 'flex' }}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search…"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    sx={{ backgroundColor: 'white', borderRadius: 1, mr: 1 }}
                  />
                  <Button type="submit" variant="contained" color="secondary">
                    Search
                  </Button>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ display: { xs: 'flex', md: 'none' }, height: 60, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HandyHand
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handlePageNavigation(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {!isMobile && (
            <Box component="form" onSubmit={handleSearchSubmit} sx={{ display: 'flex' }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search…"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ backgroundColor: 'white', borderRadius: 1, mr: 1 }}
              />
              <Button type="submit" variant="contained" color="secondary">
                Search
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
