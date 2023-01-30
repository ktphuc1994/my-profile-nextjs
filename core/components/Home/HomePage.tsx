import { Email, GitHub, Home, PhoneAndroid } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const transformHeight = '50px';

const boxItemStyle = {
  width: { xs: '100%', lg: '33%' },
};

const HomePage = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        pt: { lg: transformHeight },
      }}
    >
      <Box
        component="div"
        className="contact-info"
        sx={{ ...boxItemStyle, mt: { xs: '2rem', lg: 0 } }}
      >
        <Typography
          component="h3"
          sx={{ color: 'primary.main', fontSize: '1.25rem', fontWeight: 600 }}
        >
          CONTACT
        </Typography>
        <List>
          <ListItem sx={{ pl: 0, pt: { xs: 0, lg: '8px' } }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <Email />
            </ListItemIcon>
            <ListItemText primary="khucthienphuc@gmail.com" />
          </ListItem>
          <ListItem sx={{ pl: 0, pt: { xs: 0, lg: '8px' } }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <PhoneAndroid />
            </ListItemIcon>
            <ListItemText primary="+84-98-121-7643" />
          </ListItem>
          <ListItem sx={{ pl: 0, pt: { xs: 0, lg: '8px' } }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary="ktphuc1994" />
          </ListItem>
          <ListItem sx={{ pl: 0, pt: { xs: 0, lg: '8px' } }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Ho Chi Minh City, Vietnam" />
          </ListItem>
        </List>
      </Box>
      <Box
        component="div"
        sx={{
          ...boxItemStyle,
          order: { xs: -1, lg: 0 },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transform: { lg: `translateY(-${transformHeight})` },
        }}
      >
        <Box
          component="div"
          sx={{
            width: { xs: '50%', sm: '33%', lg: '66%' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            className="w-full rounded-full"
            src="/Avatar.jpg"
            alt="My Avatar"
          />
        </Box>
        <p className="mt-3 font-bold text-2xl xl:text-3xl">Khuc Thien Phuc</p>
        <div className="text-base xl:text-lg">
          <p>Fresher</p>
          <p>Front-end / Back-end</p>
          <p>Developer</p>
        </div>
      </Box>
      <Box
        component="div"
        className="personal-sumary"
        sx={{ ...boxItemStyle, textAlign: { xs: 'justify', lg: 'right' } }}
      >
        <Typography
          component="h3"
          sx={{
            mb: '0.5rem',
            color: 'primary.main',
            fontSize: '1.25rem',
            fontWeight: 600,
          }}
        >
          PROFILE
        </Typography>
        <p className="leading-7">
          Motivated fresher front-end and back-end developer. Seeking to use my
          skills in HTML/CSS, ReactJS and NestJS / Prisma to meet business
          needs.
        </p>
      </Box>
    </Box>
  );
};

export default HomePage;
