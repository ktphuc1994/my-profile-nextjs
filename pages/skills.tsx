import { ReactElement } from 'react';

// import MUI Components
import { Box, Chip } from '@mui/material';

// import local data
import { skillColor, skillList } from '../data/data';

// import local components
import Layout from '../core/HOC/Layout';

// import local types
import type { NextPageWithLayout } from './_app';
import CustomCollapse from '../core/components/common/CustomCollapse';

const Skills: NextPageWithLayout = () => {
  const renderTitle = (title: string) => (
    <span className="text-xl font-semibold">{title}</span>
  );

  return (
    <Box component="div">
      <h2 className="mb-3 text-center text-3xl font-bold">SKILLS</h2>
      <div className="flex flex-wrap">
        {skillList.map((item, index) => (
          <div
            key={item.skillName + index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
          >
            <CustomCollapse title={renderTitle(item.skillName)}>
              <div>
                {item.skills.map((skill, i1) => {
                  const thisSkill = skillColor.find(
                    (item) => item.name === skill
                  );
                  return (
                    <Chip
                      key={skill + i1}
                      label={skill}
                      variant={thisSkill ? thisSkill.variant : 'outlined'}
                      color={thisSkill ? thisSkill.color : 'primary'}
                      size="medium"
                      sx={{ mx: '2px', my: '4px' }}
                    />
                  );
                })}
              </div>
            </CustomCollapse>
          </div>
        ))}
      </div>
    </Box>
  );
};

Skills.getLayout = (page: ReactElement) => (
  <Layout title="Skills List" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default Skills;
