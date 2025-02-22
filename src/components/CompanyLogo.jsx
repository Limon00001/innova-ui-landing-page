/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 22 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Dependencies
import { logos } from '../assets/data.js';

const CompanyLogo = () => {
  return (
    <section className="bg-black text-white py-8 md:py-16 overflow-hidden relative">
      {/* Logos */}
      <div className="flex items-center justify-center horizontal-scroll">
        {[logos, logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-around shrink-0 min-w-full px-4"
          >
            {logo.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="mx-8 object-contain shrink-0"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black to-transparent"></div>
    </section>
  );
};

// Export
export default CompanyLogo;
