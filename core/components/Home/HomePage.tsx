import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const transformHeight = '50px';

const boxItemStyle = {
  width: { xs: '100%', lg: '33%' },
};

const contactItems = [
  {
    name: 'email',
    text: 'khucthienphuc@gmail.com',
    href: 'mailto:khucthienphuc@gmail.com',
    icon: <EmailIcon />,
  },
  {
    name: 'phone',
    text: '+84-98-121-7643',
    href: 'tel:+84981217643',
    icon: <PhoneAndroidIcon />,
  },
  {
    name: 'git',
    text: 'ktphuc1994',
    href: 'https://github.com/ktphuc1994/',
    icon: <GitHubIcon />,
  },
  {
    name: 'address',
    text: 'Ho Chi Minh City, Vietnam',
    href: 'https://goo.gl/maps/hgHbe8Wsfs156S79A',
    icon: <HomeIcon />,
  },
];

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
          {contactItems.map((contact, index) => (
            <ListItem
              key={contact.name + index}
              disablePadding
              sx={{
                '&:hover': {
                  '.MuiListItemIcon-root': {
                    color: 'primary.main',
                    transform: 'scale(1.1)',
                  },
                },
                '.MuiListItemIcon-root': {
                  transformOrigin: 'left',
                  transition: 'all 0.4s',
                },
              }}
            >
              <ListItemButton
                href={contact.href}
                target={contact.name === 'phone' ? '_self' : '_blank'}
              >
                <ListItemIcon>{contact.icon}</ListItemIcon>
                <ListItemText primary={contact.text} />
              </ListItemButton>
            </ListItem>
          ))}
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
