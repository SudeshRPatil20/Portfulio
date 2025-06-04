import React from 'react';
import { Heart, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 dark:text-neutral-400 flex items-center mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sudesh Patil. Made with <Heart size={14} className="text-error-500 mx-1" /> in Pune
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-neutral-600 dark:text-neutral-400">AI/ML Developer</span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;