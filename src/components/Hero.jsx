/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 22 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router';

// Internal Dependencies
import bannerLeft from '../assets/banner-left.avif';
import bannerRight from '../assets/banner-right.png';
import video from '../assets/banner-video.mp4';

const Hero = () => {
  return (
    <section className="pt-24 bg-black text-white md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
        {/* Subtitle */}
        <div className="mb-6">
          <span className="text-sm text-[#999999] tracking-[0.2em] font-medium uppercase">
            More than a website builder
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[-0.02em]">
          Your site should do <br className="hidden md:block" /> more than just
          look good
        </h1>

        {/* Description and buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Description */}
          <p className="text-[#999999] md:text-xl mb-8 md:mb-0 leading-relaxed">
            As the first-ever website experience platform, CodeTutor lets
            marketers, designers, and developers come together to build, manage,
            and optimize web experiences that get results.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap sm:flex-row gap-8 shrink-0">
            <Link
              to="/start-building"
              className="bg-[#4353FF] hover:bg-blue-700 text-white px-8 py-4 rounded text-lg font-medium transition-colors duration-200"
            >
              Start Building
            </Link>
            <Link
              to="/contact-sales"
              className="flex items-center text-white px-8 py-4 rounded group text-lg font-medium transition-colors duration-200 hover:text-white/50"
            >
              Contact Sales{' '}
              <HiArrowLongRight className="size-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Video Player */}
        <div className="w-full h-full mt-16 relative">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="hidden xl:block absolute top-1/2 xl:-left-20 md:-left-0 z-20">
            <img
              src={bannerLeft}
              alt=""
              className="h-20 md:h-24 lg:h-32 object-cover w-full"
            />
          </div>
          <div className="hidden xl:block absolute bottom-1/5 xl:-right-20 z-20">
            <img
              src={bannerRight}
              alt=""
              className="h-28 md:h-32 lg:h-44 object-cover w-full"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="hidden md:block absolute left-0 right-0 bottom-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
};

// Export
export default Hero;
