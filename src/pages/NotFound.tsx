import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 0.8 
          }}
          className="text-9xl font-bold text-primary-600 dark:text-primary-400"
        >
          404
        </motion.div>
        
        <h1 className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">
          Page Not Found
        </h1>
        
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <Link 
          to="/"
          className="mt-8 inline-flex items-center btn btn-primary"
        >
          <HomeIcon size={18} className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;