// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// work slider data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Drum Line',
          path: '/drumLine.jpg',
          link: 'https://drum-line-7de88c.netlify.app/profile',
        },
        {
          title: 'Capstone',
          path: '/capstone.jpg',
          link: 'https://github.com/leunggerry/personal-health-tracker',
        },
        {
          title: 'Team builder',
          path: '/team-builder.jpg',
          link: 'https://github.com/joesen-dev/team-builder',
        },
        {
          title: 'Staff tracker',
          path: '/staff-tracker.jpg',
          link: 'https://github.com/joesen-dev/staff-tracker',
        },
      ],
    },
    {
      images: [
        {
          title: 'Git Social',
          path: '/git-social.jpg',
          link: 'https://github.com/leunggerry/git-social',
        },
        {
          title: 'README Pro',
          path: '/README-Pro.jpg',
          link: 'https://github.com/joesen-dev/readme-pro',
        },
        {
          title: 'Note taker',
          path: '/notes-page.jpg',
          link: 'https://github.com/joesen-dev/note-taker',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px] SWIPER'>
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index} className='SWIPER-SLIDE'>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
                <div
                  key={index}
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                  <Link
                    href={image.link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt='project card'
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
