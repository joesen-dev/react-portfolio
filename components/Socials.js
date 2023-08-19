// links
import Link from 'next/link';

// icons
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

// helpers
import { handleLinkClick } from '../utils/helpers';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link
        href='https://www.linkedin.com/in/josephsenyonga38/'
        className='hover:text-accent transition-all duration-300'
        target='_blank'
        rel='noopener noreferrer'
        onClick={e =>
          handleLinkClick(
            e,
            'External Link',
            'LinkedIn Click',
            'LinkedIn Profile'
          )
        }>
        <RiLinkedinLine />
      </Link>
      <Link
        href='https://github.com/joesen-dev'
        className='hover:text-accent transition-all duration-300'
        target='_blank'
        rel='noopener noreferrer'
        onClick={e =>
          handleLinkClick(e, 'External Link', 'Github Click', 'Github Profile')
        }>
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
