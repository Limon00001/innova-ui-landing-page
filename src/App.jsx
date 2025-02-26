/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Dependencies
import CompanyLogo from './components/CompanyLogo';
import DesignSection from './components/DesignSection';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <Features />
      <DesignSection />
      <Testimonial />
    </>
  );
};

// Export
export default App;
