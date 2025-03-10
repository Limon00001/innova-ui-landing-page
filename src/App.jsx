/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Dependencies
import About from './components/About';
import CompanyLogo from './components/CompanyLogo';
import DesignSection from './components/DesignSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
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
      <About />
      <Newsletter />
      <Footer />
    </>
  );
};

// Export
export default App;
