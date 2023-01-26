import { ReactElement } from 'react';

// import local components
import Layout from '../core/HOC/Layout';

// import local types
import type { NextPageWithLayout } from './_app';

function about() {
  return;
}

const About: NextPageWithLayout = () => {
  return <div>about</div>;
};

About.getLayout = (page: ReactElement) => (
  <Layout title="My Profile" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default About;
