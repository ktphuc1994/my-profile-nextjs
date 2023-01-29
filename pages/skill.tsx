import { ReactElement } from 'react';

// import MUI Components
import { CheckCircleOutline } from '@mui/icons-material';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// import local data
import { skillList } from '../data/data';

// import local components
import Layout from '../core/HOC/Layout';

// import local types
import type { NextPageWithLayout } from './_app';

const getListItemWidth = (index: number) => {
  if (index === 2) {
    return 'w-full';
  }
  return 'w-1/2';
};

const Skill: NextPageWithLayout = () => {
  return (
    <Box component="div">
      <h2 className="mb-3 text-center text-2xl font-bold">SKILLS</h2>
      <Box component="div" className="skill-list flex flex-wrap lg:flex-nowrap">
        {skillList.map((skillCatergory, index) => (
          <Box
            component="div"
            className={`skill__${skillCatergory.skillName} ${getListItemWidth(
              index
            )} lg:w-1/3 flex flex-col items-center`}
            key={skillCatergory.skillName + index}
          >
            <h3 className="text-xl font-semibold">
              {skillCatergory.skillName}
            </h3>
            <List>
              {skillCatergory.skills.map((skill, index) => (
                <ListItem key={skill + index} disablePadding>
                  <ListItemIcon sx={{ minWidth: '25px' }}>
                    <CheckCircleOutline fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Skill.getLayout = (page: ReactElement) => (
  <Layout title="Skills List" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default Skill;
