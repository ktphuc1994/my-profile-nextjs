import { useState } from 'react';
import Head from 'next/head';

// import local components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

// import local interface
import { InterfaceLayout } from '../interfaces/Layout/Layout.interface';
import { Box, CssBaseline } from '@mui/material';

const sidebarWidth = 240;

function Layout({ children, title, description, icon }: InterfaceLayout) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || '/favicon.ico'} />
      </Head>

      <div className="mx-auto container xl:max-w-screen-xl">
        {/* <div className="flex w-full">
          <Sidebar />
          <div>
            <Header handleSidebarToggle={handleSidebarToggle} />
            <main>{children}</main>
            <Footer />
          </div>
        </div> */}
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Sidebar
            handleSidebarToggle={handleSidebarToggle}
            isMobileOpen={isMobileOpen}
          />
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${sidebarWidth}px)` },
            }}
          >
            <Header handleSidebarToggle={handleSidebarToggle} />
            <Box component="main">{children}</Box>
            <Footer />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Layout;
