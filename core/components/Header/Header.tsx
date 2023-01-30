import Link from 'next/link';

// import MUI components
import { Box, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

// import local interface
import { InterfaceHeader } from '../../interfaces/Layout/Layout.interface';

function Header({ handleSidebarToggle }: InterfaceHeader) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        px: '1.5rem',
        py: '0.5rem',
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open sidebar"
        edge="start"
        onClick={handleSidebarToggle}
        sx={{ mr: 1.5, display: { md: 'none' } }}
      >
        <Menu />
      </IconButton>
      <Link href="/" className="font-bold text-3xl">
        MY
        <Typography
          component="span"
          sx={{
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'primary.main',
          }}
        >
          PROFILE
        </Typography>
      </Link>
    </Box>
  );
}

export default Header;
