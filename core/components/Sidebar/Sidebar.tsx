import { useRouter } from 'next/router';
import Link from 'next/link';

// import MUI Components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

// import MUI icon
import LocalLibrary from '@mui/icons-material/LocalLibrary';
import Apps from '@mui/icons-material/Apps';
import ContactPage from '@mui/icons-material/ContactPage';
import Archive from '@mui/icons-material/Archive';
import AccountCircle from '@mui/icons-material/AccountCircle';

// import local interface
import { InterfaceSidebar } from '../../interfaces/Layout/Layout.interface';

// import local constants
import { commonConst } from '../../constants/common.const';

const ItemOnList = ['Skills', 'Projects', 'Contact'];

const getListIcon = (text: string) => {
  switch (text) {
    case 'Skills':
      return <LocalLibrary />;
    case 'Projects':
      return <Apps />;
    case 'Contact':
      return <ContactPage />;
    default:
      return <Archive />;
  }
};

function Sidebar({ handleSidebarClose, isMobileOpen }: InterfaceSidebar) {
  const router = useRouter();

  const sidebar = (
    <div className="h-full">
      {/* <Toolbar /> */}
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{ my: '1rem', display: 'flex', justifyContent: 'center' }}
          >
            <AccountCircle color="primary" fontSize="large" />
          </ListSubheader>
        }
      >
        {ItemOnList.map((text, index) => {
          const pathName = text === 'Contact' ? '/' : '/' + text.toLowerCase();
          return (
            <Link
              href={pathName}
              passHref
              key={text + index}
              onClick={handleSidebarClose}
            >
              <ListItem disablePadding>
                <ListItemButton
                  selected={pathName === router.pathname}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                      },
                      transition: 'all 0.3s',
                    },
                    '&:hover': {
                      backgroundColor: 'primary.lighter',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '2.5rem', color: 'inherit' }}>
                    {getListIcon(text)}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        textTransform: 'uppercase',
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box
      component="div"
      sx={{
        width: { md: commonConst.sidebarWidth },
        flexShrink: { md: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            minHeight: '100vh',
            width: commonConst.sidebarWidth,
            position: 'relative',
          },
        }}
        open
      >
        {sidebar}
      </Drawer>
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={handleSidebarClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: commonConst.sidebarWidth,
          },
        }}
      >
        {sidebar}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
