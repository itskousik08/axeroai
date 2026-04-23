import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('axeroai-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('axeroai-cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('axeroai-cookie-consent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-8 md:bottom-8 md:max-w-md"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Preferences</h3>
            <p className="text-sm text-gray-600 mb-6">
              We use cookies to enhance your experience, analyze site traffic, and support our mission of building safe AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-black hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium rounded-lg transition-colors border border-gray-200"
              >
                Reject Non-essential
              </button>
            </div>
            <button className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline w-full text-center">
              Manage Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
