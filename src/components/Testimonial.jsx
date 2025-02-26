/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 26 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { useRef, useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

// Internal Dependencies
import { testimonials } from '../assets/data';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const sliderRef = useRef(null);

  //   Control Previous Slide
  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  //   Control Next Slide
  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  //   Custom play and pause
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);

    const video = document.querySelector(
      `video[data-testimonial="${testimonials[currentSlide].id}"]`,
    );
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  return (
    <section className="overflow-hidden py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="max-w-[34rem]">
            <h2 className="text-4xl md:text-5xl font-bold">
              The best startup companies build on here
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={handlePrevSlide}
              className="p-4 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <HiArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-4 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <HiArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 relative"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <video
                    data-testimonial={testimonial.id}
                    src={testimonial.video}
                    poster={testimonial.poster}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <img
                      src={testimonial.logo}
                      alt=""
                      className="h-12 w-auto mb-auto"
                    />

                    <div className="sm:grid grid-cols-2 hidden items-end   gap-8 text-white">
                      <div>
                        <div className="text-6xl font-bold mb-2">
                          {testimonial.stat}
                        </div>
                        <div className="text-lg">{testimonial.statDesc}</div>
                      </div>
                      <div>
                        <p className="text-xl mb-4">{testimonial.quote}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-lg">{testimonial.author}</div>
                          <button
                            onClick={handlePlayPause}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                          >
                            {isPlaying ? (
                              <BsPauseFill size={24} />
                            ) : (
                              <BsPlayFill size={24} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export
export default Testimonial;
