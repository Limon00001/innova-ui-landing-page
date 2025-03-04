/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 22 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

import { features } from '../assets/data';

const Features = () => {
  return (
    <section className="bg-light text-primary dark:bg-primary dark:text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col text-white border-t border-black/10 pt-8"
            >
              <div className="mb-4">
                <feature.icon className="text-primary dark:text-light w-8 h-8" />
              </div>
              <h3 className="text-primary dark:text-light text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-4 flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export
export default Features;
