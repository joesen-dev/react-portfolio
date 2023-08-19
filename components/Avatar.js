// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/avatar.png'}
        width={538}
        height={824}
        alt='avatar'
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
