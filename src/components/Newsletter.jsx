/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Mar, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { HiArrowRight } from 'react-icons/hi';

// Internal Dependencies
import Button from './Button';

const Newsletter = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-8xl font-bold mb-8">
              Try it for
              <br />
              free
            </h1>
            <p className="text-xl mb-8 md:max-w-lg">
              Try InnovaUI for as long as you like with our free Starter plan.
              Purchase a paid Site plan to publish, host, and unlock additional
              features.
            </p>
            <Button
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white hover:text-gray-300 px-6 py-3 rounded-md"
            >
              Get started — it&apos;s free
            </Button>
          </div>

          <div className="md:w-2/5 space-y-12">
            <div>
              <h2 className="md:text-xl text-lg leading-relaxed font-medium mb-4">
                Try InnovaUI for as long as you like with our free Starter plan.
                Purchase a paid Site plan to publish, host, and unlock
                additional features.
              </h2>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact sales</h2>
              <p className="text-gray-300 mb-4">
                Interested in InnovaUI Enterprise? Get in touch with our sales
                team to receive a free personalized demo.
              </p>
              <Button
                to="/"
                className="btn-inline hover:underline hover:underline-offset-4"
              >
                Contact sales <HiArrowRight className="ml-2" />
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Hire a Certified Partner
              </h2>
              <p className="text-gray-300 mb-4">
                Extend the power of your team by hiring a Certified InnovaUI
                Partner — we&apos;ll match you with the best in the business.
              </p>
              <Button
                to="/"
                className="btn-inline hover:underline hover:underline-offset-4"
              >
                Browse Partners <HiArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export
export default Newsletter;
