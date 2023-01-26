import Head from 'next/head';

// import local components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

// import local interface
import { InterfaceLayout } from '../interfaces/Layout/Layout.interface';

function Layout({ children, title, description, icon }: InterfaceLayout) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || '/favicon.ico'} />
      </Head>

      <div className="mx-auto container xl:max-w-screen-xl">
        <div className="flex w-full">
          <Sidebar />
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
