// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// icons
import {
  RxArrowTopRight,
  RxDesktop,
  RxPencil2,
  RxRocket,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// service data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description:
      'Crafting captivating and user-centric web designs that make lasting impressions. From concept to creation, I ensure seamless user experiences that reflect your brand identity.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description:
      'Transforming designs into interactive, responsive, and pixel-perfect websites. With a keen eye for detail and mastery of modern technologies, I build interfaces that engage and captivate your audience.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Elevating your online presence with strategic SEO techniques. I optimize your content and structure to improve visibility, ensuring your website reaches the right audience and achieves higher rankings.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] xs:h-[515px] md:h-[490px] lg:h-[370px] xl:h-[440px]'>
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* tittle & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
