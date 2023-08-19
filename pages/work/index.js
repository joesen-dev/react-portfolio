import { useEffect } from 'react';

// react-ga
import ReactGA from 'react-ga';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  // Track page view for the work page
  useEffect(() => {
    ReactGA.pageview('/work');
  }, []);

  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4'>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'>
              My work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Here are some of the projects that highlight my skills,
              creativity, and passion for crafting functional and visually
              appealing websites.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
