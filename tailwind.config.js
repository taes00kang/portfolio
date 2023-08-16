/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      backgroundImage: {
        avatar: "url('/src/assets/images/avatar.png')",
      },
      colors: {
        brand: {
          black: '#2D2E32',
          blue: '#147EFB',
        },
      },
      keyframes: {
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'],
//         mulish: ['Mulish', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };
