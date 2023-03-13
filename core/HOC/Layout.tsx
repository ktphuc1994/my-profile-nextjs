import { useState } from 'react';
import Head from 'next/head';

// import local components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

// import local interface and types
import { InterfaceLayout } from '../interfaces/Layout/Layout.interface';

// import MUI components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';

// import local constants
import { commonConst } from '../constants/common.const';
import { theme } from '../theme';

function Layout({ children, title, description, icon }: InterfaceLayout) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!isMobileOpen);
  };

  const handleSidebarClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || '/favicon.ico'} />
      </Head>

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
    </>
  );
}

export default Layout;
