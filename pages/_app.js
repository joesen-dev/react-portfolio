import Head from 'next/head';
import { useEffect, useId } from 'react';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// react-ga
import ReactGA from 'react-ga';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// styles
import '../styles/globals.css';

// initialize Google Analytics
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const USER_ID = useId();

  // set user id
  useEffect(() => {
    // Set the user ID as soon as the user loads the site
    ReactGA.set({ userId: USER_ID });
  }, [USER_ID]);

  // log first time visitors
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (!hasVisitedBefore) {
      // Track the first visit
      ReactGA.event({
        category: 'User',
        action: 'First Visit',
      });

      // Set the flag in local storage
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
