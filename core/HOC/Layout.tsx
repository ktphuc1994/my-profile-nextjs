'use client';
import { useState } from 'react';

// import local components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

// import local interface and types
import { InterfaceLayout } from '../interfaces/Layout/Layout.interface';

// import MUI components
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';

// import local constants
import { commonConst } from '../constants/common.const';
import { theme } from '../theme';

function Layout({ children }: InterfaceLayout) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!isMobileOpen);
  };

  const handleSidebarClose = () => {
    setMobileOpen(false);
  };

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <div className="mx-auto container xl:max-w-screen-xl">
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar
              handleSidebarClose={handleSidebarClose}
              isMobileOpen={isMobileOpen}
            />
            <Box
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                minHeight: '100vh',
                width: { md: `calc(100% - ${commonConst.sidebarWidth}px)` },
              }}
            >
              <Box
                component="div"
                sx={{
                  position: { xs: 'sticky', md: 'initial' },
                  top: 0,
                  backgroundColor: 'white',
                  zIndex: 2,
                }}
              >
                <Header handleSidebarToggle={handleSidebarToggle} />
                <Divider />
              </Box>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
              </Box>
              <Divider />
              <Footer />
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default Layout;
