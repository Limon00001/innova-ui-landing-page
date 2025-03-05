/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 23 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { useEffect, useRef, useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiArrowLongRight } from 'react-icons/hi2';

// Internal Dependencies
import { tabsData } from '../assets/data';
import Button from './Button';

const DesignSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const progressInterval = useRef(null);

  useEffect(() => {
    startProgressTimer();

    return () => clearInterval(progressInterval.current);
  }, [activeTab]);

  const startProgressTimer = () => {
    setProgress(0);
    clearInterval(progressInterval.current);

    progressInterval.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          const currentIndex = tabsData.findIndex(
            (tab) => tab.id === activeTab,
          );
          const nextIndex = (currentIndex + 1) % tabsData.length;
          setActiveTab(tabsData[nextIndex].id);
          return 0;
        }
        return prevProgress + (100 / 10000) * 100;
      });
    }, 100);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsPlaying(true);
    setProgress(0);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    const video = document.querySelector(`video[data-tab="${activeTab}"]`);
    if (video) {
      if (isPlaying) {
        video.pause();
        clearInterval(progressInterval.current);
      } else {
        video.play();
        startProgressTimer();
      }
    }
  };

  return (
    <section className="overflow-hidden py-10 bg-light text-primary dark:bg-primary dark:text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Title */}
        <div className="max-w-[50rem] mb-12 lg:mb-24">
          <h2 className="text-[min(10vw,48px)] font-bold mb-8">
            Launch pixel-perfect designs
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div className="flex flex-col justify-between gap-16">
            {/* Subtitle */}
            <div>
              <p className="text-2xl text-gray-500 dark:text-gray-300">
                Rethink the web dev cycle with Innova UI. Give your design and
                marketing teams the power to launch sophisticated sites quickly
                - so your dev team can focus on more complex work, not
                pixel-perfect revisions.
              </p>
              <Button
                to="/"
                className="btn-inline group px-6 py-3 text-white bg-blue-600 font-semibold tracking-wider rounded-md hover:bg-blue-700 mt-8"
              >
                Get Started{' '}
                <HiArrowLongRight className="ml-3 size-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Accrodions */}
            <div className="space-y-2">
              {tabsData.map((tab) => (
                <div
                  onClick={() => handleTabClick(tab.id)}
                  className="relative pl-4 cursor-pointer"
                  key={tab.id}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800">
                    {tab.id === activeTab && (
                      <div
                        className={`absolute left-0 top-0 w-full bg-blue-600 transition-all duration-100`}
                        style={{ height: `${progress}%` }}
                      ></div>
                    )}
                  </div>

                  {/* Tab Title */}
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      tab.id === activeTab
                        ? 'text-primary dark:text-white'
                        : 'text-black/30 dark:text-gray-400'
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.title}
                  </h3>

                  {/* Tab Description */}
                  <p
                    className={`text-gray-700 dark:text-gray-600 transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'h-auto opacity-100'
                        : 'h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    {tab.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative">
            <div className="max-w-[50rem] mx-auto">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-opacity duration-500 ${
                    tab.id === activeTab ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  <video
                    src={tab.video}
                    data-tab={tab.id}
                    poster={tab.poster}
                    className={`w-full rounded-lg`}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Pointer */}
                  <div className="flex items-center justify-between mt-4">
                    <Button to="/" className="btn-inline duration-100">
                      {tab.cta.text} <HiArrowLongRight className="ml-2" />
                    </Button>

                    {/* Play/Pause Button */}
                    <Button
                      onClick={handlePlayPause}
                      className="p-2 text-primary dark:text-light hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                    >
                      {isPlaying ? (
                        <BsPauseFill className="size-6" />
                      ) : (
                        <BsPlayFill className="size-6" />
                      )}
                    </Button>
                  </div>
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
export default DesignSection;
