// import type
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// import local components
import Layout from '../core/HOC/Layout';
import HomePage from '../core/components/Home/HomePage';

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = (page: ReactElement) => (
  <Layout title="My Profile" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default Home;
