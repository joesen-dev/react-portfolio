// react-ga
import ReactGA from 'react-ga';

// next-image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

// helpers
import { handlePageInteraction } from '../utils/helpers';

const ProjectsBtn = () => {
  return (
    <div className='mb-5 mx-auto xl:mx-0 z-10'>
      <Link
        href={'/work'}
        className='relative w-[75px] h-[75px] sm:w-[185px] sm:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
        onClick={() =>
          handlePageInteraction(
            'Navigation',
            'My Projects Click',
            'Projects Navigation Button'
          )
        }>
        <Image
          src='/rounded-text.png'
          width={141}
          height={148}
          alt='projects-btn'
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
        />
        <HiArrowRight className='absolute text-xl sm:text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
