import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

// Main App component
const App = () => {
  // Array of cute emojis to choose from
  const cuteEmojis = [
    '😊', '😇', '🥰', '😍', '🤩', '🥳', '😎', '🐶', '🐱', '🐰',
    '🐻', '🐼', '🐨', '🐷', '🦊', '🐣', '🦋', '🌸', '🌼', '🌈',
    '🌟', '✨', '💖', '💕', '💞', '💓', '💗', '🍓', '🍦', '🍩',
    '🍭', '🍬', '🎁', '🎈', '🎉', '🎊', '🎀', '🧸', '💖'
  ];

  // Array of beautiful background gradients
  const backgroundGradients = [
    'from-f7f1e3 to-a4b0be', // Original soft gradient
    'from-purple-300 to-pink-300', // Light purple to pink
    'from-blue-200 to-green-200',  // Light blue to light green
    'from-yellow-100 to-orange-200', // Light yellow to soft orange
    'from-teal-100 to-blue-200',   // Light teal to blue
    'from-red-100 to-rose-200',   // Very light red to rose
    'from-indigo-200 to-purple-200', // Light indigo to light purple
    'from-green-100 to-lime-200',  // Light green to lime
  ];

  // State to hold the currently displayed emoji
  const [currentEmoji, setCurrentEmoji] = useState('');
  // State to hold the current background gradient class
  const [currentBackground, setCurrentBackground] = useState(backgroundGradients[0]);

  // Function to get a random emoji from the array
  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * cuteEmojis.length);
    return cuteEmojis[randomIndex];
  };

  // Function to get a random background gradient from the array
  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundGradients.length);
    return backgroundGradients[randomIndex];
  };

  // Event handler for button click
  const handleButtonClick = () => {
    setCurrentEmoji(getRandomEmoji());
    setCurrentBackground(getRandomBackground()); // Update background on click
  };

  return (
    // HTML structure with Tailwind CSS classes for styling
    
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${currentBackground} font-inter p-4 relative overflow-hidden transition-all duration-700 ease-in-out`}>
      {/* Background circles for aesthetic effect */}
      <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-white/30 rounded-full blur-3xl animate-blob1"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-white/30 rounded-full blur-3xl animate-blob2"></div>

      {/* Main container for the app content */}
      <div className="bg-white/90 p-8 sm:p-12 md:p-16 rounded-3xl shadow-xl text-center backdrop-blur-sm animate-fade-in max-w-sm sm:max-w-md lg:max-w-lg w-full transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-purple-700 drop-shadow-sm">
          Emoji for a CutieJi
        </h1>

        {/* Button to show emoji */}
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-red-400 to-pink-300 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 text-lg sm:text-xl"
        >
          Click me
        </button>

        {/* Display area for the emoji */}
        <div className="mt-8 min-h-[128px] flex items-center justify-center text-8xl sm:text-9xl overflow-visible">
          {currentEmoji && (
            <span className="inline-block animate-pop-in">
              {currentEmoji}
            </span>
          )}
        </div>
      </div>

      {/* Tailwind CSS CDN script for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts for 'Inter' (default font) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    </div>
  );
};

// Define Tailwind custom configuration for animations
// This configuration is directly embedded in the HTML for simplicity in a single file
const tailwindConfig = `
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
          keyframes: {
            'fade-in': {
              '0%': { opacity: '0', transform: 'translateY(-20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            'pop-in': {
              '0%': { transform: 'scale(0)', opacity: '0' },
              '50%': { transform: 'scale(1.2)', opacity: '1' },
              '100%': { transform: 'scale(1)', opacity: '1' },
            },
            blob1: {
              '0%, 100%': { transform: 'translate(0, 0)' },
              '50%': { transform: 'translate(100px, 150px)' },
            },
            blob2: {
              '0%, 100%': { transform: 'translate(0, 0)' },
              '50%': { transform: 'translate(-100px, -120px)' },
            },
          },
          animation: {
            'fade-in': 'fade-in 1s ease-out forwards',
            'pop-in': 'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
            blob1: 'blob1 15s infinite alternate ease-in-out',
            blob2: 'blob2 18s infinite alternate-reverse ease-in-out',
          },
          colors: { // Define custom colors for the gradients
            f7f1e3: '#f7f1e3',
            a4b0be: '#a4b0be',
            purple: {
              300: '#d8b4fe',
            },
            pink: {
              300: '#f9a8d4',
            },
            blue: {
              200: '#bfdbfe',
            },
            green: {
              200: '#a7f3d0',
            },
            yellow: {
              100: '#fef3c7',
            },
            orange: {
              200: '#fed7aa',
            },
            teal: {
              100: '#ccfbf1',
            },
            indigo: {
              200: '#c7d2fe',
            },
            rose: {
              200: '#fecdd3',
            },
            lime: {
              200: '#d9f99d',
            }
          }
        },
      },
    }
  </script>
`;

// Inject Tailwind config directly into the document head
document.head.insertAdjacentHTML('beforeend', tailwindConfig);
document.title = "CuteJi";

export default App;
