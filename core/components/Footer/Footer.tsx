import React from 'react';

// import MUI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box sx={{ flexShrink: 0, px: '1.5rem', my: '1rem' }}>
      <Typography component="p" sx={{ fontWeight: 700 }}>
        MY
        <Typography
          component="span"
          sx={{ fontWeight: 700, color: 'primary.main' }}
        >
          PROFILE
        </Typography>
        <Typography component="span" sx={{ fontWeight: 400 }}>
          . Designed and Coded by{' '}
        </Typography>
        Khuc Thien Phuc
      </Typography>
    </Box>
  );
}

export default Footer;
