import { useEffect, useState } from 'react';

// react-ga
import ReactGA from 'react-ga';

// icons
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiCanva, SiNextdotjs } from 'react-icons/si';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// helpers
import { handlePageInteraction } from '../../utils/helpers';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key='00-FaHtml5' />,
          <FaCss3 key='00-FaCss3' />,
          <FaJs key='00-FaJs' />,
          <FaReact key='00-FaReact' />,
          <SiNextdotjs key='00-SiNextdotjs' />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key='01-FaFigma' />, <SiCanva key='01-SiCanva' />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Team Coordinator - Raise',
        stage: '2020 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Full Stack Web Development - Carleton University',
        stage: '2022',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  // Track page view for the about page
  useEffect(() => {
    ReactGA.pageview('/about');
  }, []);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[77px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'>
            Weaving <span className='text-accent'>digital magic</span> through
            code.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px2 xl:px-0'>
            Hi there, I&apos;m Joseph – a web developer with a medical
            background dedicated to enhancing user experiences. With a
            mobile-first mindset, I&apos;m passionate about crafting
            applications that create seamless and delightful interactions.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience  */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients  */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects  */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                    handlePageInteraction(
                      // category
                      'Page Interaction',
                      // action
                      `${item.title.charAt(0).toUpperCase()}${item.title.slice(
                        1
                      )} clicked`,
                      // label
                      `${item.title.charAt(0).toUpperCase()}${item.title.slice(
                        1
                      )}`
                    );
                  }}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* titles */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className='text-2xl text-white' key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
