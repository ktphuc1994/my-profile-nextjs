import { Box } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{ flexShrink: 0 }}>
      <p>
        <span className="font-semibold">My Profile</span>. Designed and Coded by{' '}
        <span className="font-semibold">Khuc Thien Phuc</span>
      </p>
    </Box>
  );
}

export default Footer;
