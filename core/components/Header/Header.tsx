import Link from 'next/link';

// import MUI components
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

// import local interface
import { InterfaceHeader } from '../../interfaces/Layout/Layout.interface';

function Header({ handleSidebarToggle }: InterfaceHeader) {
  return (
    <AppBar
    // position="fixed"
    // sx={{
    //   width: { sm: `calc(100% - ${drawerWidth}px)` },
    //   ml: { sm: `${drawerWidth}px` },
    // }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open sidebar"
          edge="start"
          onClick={handleSidebarToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <Link href="/">
            <span className="font-bold text-3xl">
              MY<span className="text-[#3898d8]">PROFILE</span>
            </span>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
