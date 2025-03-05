/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 04 Mar, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { Link } from 'react-router';

// Internal Dependencies
import { footerLinks, socialLinks } from '../assets/data';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:gap-24 gap-16 mb-16">
          {/* Logo and description */}
          <div className="md:w-1/3">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-blue-500">Innova</span> UI
            </Link>
            <p className="text-gray-400 md:w-2/3">
              The first-ever website experience platform that lets you create,
              manage and optimize your digital presence.
            </p>
          </div>

          {/* Right side with links grid */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
              {Object.values(footerLinks).map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Button
                          to={link.href}
                          className="text-gray-400 hover:text-white"
                        >
                          {link.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-3.5 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <Button
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                {<social.icon />}
              </Button>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CodeTutor UI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export
export default Footer;
