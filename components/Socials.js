// links
import Link from 'next/link';

// icons
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link
        href='https://www.linkedin.com/in/josephsenyonga38/'
        className='hover:text-accent transition-all duration-300'
        target='_blank'
        rel='noopener noreferrer'>
        <RiLinkedinLine />
      </Link>
      <Link
        href='https://github.com/joesen-dev'
        className='hover:text-accent transition-all duration-300'
        target='_blank'
        rel='noopener noreferrer'>
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
