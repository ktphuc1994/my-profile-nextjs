import { useRouter } from 'next/router';
import Link from 'next/link';

// import MUI Components
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { LocalLibrary, Apps, ContactPage, Archive } from '@mui/icons-material';

// import local interface
import { InterfaceSidebar } from '../../interfaces/Layout/Layout.interface';

// import local constants
import { commonConst } from '../../constants/common.const';

const ItemOnList = ['Skill', 'Projects', 'Contact'];

const getListIcon = (text: string) => {
  switch (text) {
    case 'Skill':
      return <LocalLibrary />;
    case 'Projects':
      return <Apps />;
    case 'Contact':
      return <ContactPage />;
    default:
      return <Archive />;
  }
};

function Sidebar({ handleSidebarToggle, isMobileOpen }: InterfaceSidebar) {
  const router = useRouter();

  const sidebar = (
    <div className="h-full">
      <Toolbar />
      <Divider />
      <List>
        {ItemOnList.map((text, index) => {
          const pathName = text === 'Contact' ? '/' : '/' + text.toLowerCase();
          return (
            <Link href={pathName} passHref key={text + index}>
              <ListItem disablePadding>
                <ListItemButton selected={pathName === router.pathname}>
                  <ListItemIcon>{getListIcon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
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
        minHeight: '100vh',
        height: '100%',
        width: { md: commonConst.sidebarWidth },
        flexShrink: { md: 0 },
      }}
      aria-label="mailbox folders"
      onClick={handleSidebarToggle}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={handleSidebarToggle}
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
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            height: '100%',
            width: commonConst.sidebarWidth,
            position: 'relative',
          },
        }}
        open
      >
        {sidebar}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
