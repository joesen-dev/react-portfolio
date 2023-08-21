// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  const mobileStyles =
    'below-640:bg-gray-400 below-640:rounded-md below-640:bg-clip-padding below-640:backdrop-filter below-640:backdrop-blur-sm below-640:bg-opacity-0';

  return (
    <header
      className={`header absolute z-30 w-full flex items-center px-16 xl:px-0 h-[77px] xl:h-[90px] ${mobileStyles}`}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-2 sm:py-8 '>
          {/* logo */}
          <Link href='/'>
            <Image
              src='/logo.svg'
              width={220}
              height={48}
              alt='logo'
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
