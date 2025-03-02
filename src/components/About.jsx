/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01 Mar, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { useEffect, useRef, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

// Internal Dependencies
import { aboutFeatures } from '../assets/data';
import Button from './Button';

const About = () => {
  const [activeFeatures, setActiveFeatures] = useState(0);
  const featuresRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Configuration options for Intersection Observer
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px', // No margin around root
      threshold: 0.5, // Trigger when 50% of element is visible
    };

    // Intersection Observer instance
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If a feature element intersects the viewport
        if (entry.isIntersecting) {
          // Extract the ID from data attribute
          const id = entry.target.getAttribute('id');
          // Find the index of the feature in the data
          const index = aboutFeatures.findIndex((feature) => feature.id === id);

          // If the feature is found, update the active feature
          if (index !== -1) {
            setActiveFeatures(index);
            const video = document.querySelector(`video[data-feature="${id}"]`);
            if (video) video.play();
          }
        }
      });
    }, options);

    // Observe each feature element
    const featureElements = document.querySelectorAll('.feature-item');
    featureElements.forEach((feature) => observerRef.current.observe(feature));

    // Cleanup -> runs when component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32  gap-8">
          <div className="md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 max-w-[50rem]">
              AI at InnovaUI
            </h2>
          </div>
          <div className="mb-24">
            <p className="text-xl text-gray-300 mb-8 max-w-[35rem]">
              Write, edit, and update content — or generate it with the help of
              AI — directly in InnovaUI, then publish with a click.Easily create
              page layouts by adding the elements you want and pulling in
              content from the CMS. Plus create reusable templates for dynamic
              content — design the layout once and any new content will
              automatically follow it.
            </p>
            <Button href="#" className="btn-inline text-lg font-medium">
              Discover AI at InnovaUI
              <HiArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
          {/* Left Column - Video */}
          <div>
            <div className="sticky top-24">
              <div className="aspect-square rounded-lg overflow-hidden border border-white/20">
                <video
                  key={aboutFeatures[activeFeatures].id}
                  data-feature={aboutFeatures[activeFeatures].id}
                  src={aboutFeatures[activeFeatures].video}
                  poster={aboutFeatures[activeFeatures].poster}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            {/* Intro Text */}
            <div className="md:mb-28 mb-16 md:h-72 border-b border-white/10 pb-16">
              <div className="max-w-[35ch] mb-4">
                <h3 className="text-2xl font-semibold">
                  Generate styled content quickly
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-[35rem]">
                Innova&apos;s AI tools elevate your web projects through
                contextual design and writing help, machine-powered translation,
                and more.
              </p>
              <Button href="#" className="btn-inline text-lg font-medium">
                Discover AI at InnovaUI
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Features List */}
            <div ref={featuresRef} className="space-y-24">
              {aboutFeatures.map((feature) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="feature-item scroll-mt-24 md:h-72 border-b border-white/10 pb-16"
                >
                  <div className="max-w-[35ch] mb-4">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-[35rem]">
                    {feature.description}
                  </p>
                  <Button href="#" className="btn-inline text-lg font-medium">
                    Discover AI at InnovaUI
                    <HiArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export
export default About;
