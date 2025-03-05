/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 05 Mar, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { useContext } from 'react';

// Internal Dependencies
import { ThemeContext } from '../context/ThemeContext';

// Custom Hook
const useDarkMode = () => useContext(ThemeContext);

// Export
export default useDarkMode;
