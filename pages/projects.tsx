import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';

// import momentjs

// import local components
import Layout from '../core/HOC/Layout';
import { skillColor, projectList } from '../data/data';

// import local types
import type { NextPageWithLayout } from './_app';

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <h2 className="mb-5 text-center text-3xl font-bold">PROJECTS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
        {projectList.map((project, index) => (
          <Card
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            key={project.name + index}
          >
            <CardActionArea
              onClick={() => {
                window.open(project.demo[0]);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.name}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={700}
                >
                  {project.name}
                </Typography>
                <Stack direction="row" flexWrap="wrap" mb={'5px'}>
                  {project.framework.map((fw, i1) => {
                    const frameW = skillColor.find((item) => item.name === fw);
                    return (
                      <Chip
                        key={fw + i1}
                        label={fw}
                        variant={frameW ? frameW.variant : 'outlined'}
                        color={frameW ? frameW.color : 'primary'}
                        size="small"
                        sx={{ m: '2px' }}
                      />
                    );
                  })}
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-justify"
                >
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ flexWrap: 'wrap' }}>
              {project.demo.map((link, i2) => (
                <Button
                  key={project.name + 'demo' + i2}
                  href={link}
                  target="_blank"
                  size="small"
                  color="limeGreen"
                  variant="outlined"
                >
                  {project.demo.length === 1 ? 'DEMO' : `DEMO ${i2 + 1}`}
                </Button>
              ))}
              {project.git.map((link, i3) => (
                <Button
                  key={project.name + 'git' + i3}
                  href={link}
                  target="_blank"
                  size="small"
                  color="brightRed"
                  variant="outlined"
                >
                  {project.git.length === 1 ? 'GIT' : `GIT ${i3 + 1}`}
                </Button>
              ))}
              <div className="w-full mt-2">
                {project.youtube ? (
                  <Button
                    href={project.youtube}
                    target="_blank"
                    fullWidth
                    color="error"
                    variant="contained"
                  >
                    YOUTUBE
                  </Button>
                ) : null}
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

Projects.getLayout = (page: ReactElement) => (
  <Layout title="ProjectList" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default Projects;
