import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { InterfaceCustomCollapse } from '../../interfaces/commons';

function CustomCollapse({
  className,
  titleClassName,
  title,
  children,
}: InterfaceCustomCollapse) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className={className}>
      <Box
        className={titleClassName}
        component="div"
        sx={{ width: '100%', position: 'relative', textAlign: 'left' }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>{title}</div>
        <div className="absolute top-1/2 right-0 -translate-x-full -translate-y-1/2">
          {isOpen ? <ExpandMore /> : <ExpandLess />}
        </div>
      </Box>
      <Collapse in={isOpen} timeout="auto">
        {children}
      </Collapse>
    </div>
  );
}

export default CustomCollapse;
