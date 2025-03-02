/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01 Mar, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { Link } from 'react-router';

const Button = ({ to, href, onClick, className = '', children, ...rest }) => {
  // Common styles
  const baseClasses = 'rounded transition-colors duration-200';
  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...rest}>
        {children}
      </a>
    );
  }

  // Default button
  return (
    <button onClick={onClick} className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

// Export
export default Button;
