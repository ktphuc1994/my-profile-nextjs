import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  Typography,
} from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { useState } from 'react';
import { InterfaceCustomCollapse } from '../../interfaces/commons';

interface ExpandMoreProps extends BoxProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <Box {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const defaultTitleSx = {
  display: 'flex',
  justifyContent: 'space-between',
  p: '0.5rem',
  backgroundColor: 'primary.main',
  color: 'white',
};

function CustomCollapse({
  className,
  title,
  titleClassName,
  titleSx = defaultTitleSx,
  children,
}: InterfaceCustomCollapse) {
  const [expanded, setExpanded] = useState<boolean>(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '100%' }} className={className}>
      <CardActionArea className={titleClassName} onClick={handleExpandClick}>
        <CardContent sx={titleSx}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{children}</CardContent>
      </Collapse>
    </Card>
  );
}

export default CustomCollapse;
