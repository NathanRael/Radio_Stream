/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow : {
          '3D' : '0.5px 2px 0 1px rgba(153, 137, 194, 100) '
        }
      },
      colors: {},
      fontFamily:{
        sans : ['Roboto', 'sans-serif'],
        robotoMd : ['RobotoMd', 'sans-serif'],
        robotoBold : ['RobotoBold', 'sans-serif'],
        robotoThin : ['RobotoThin', 'sans-serif'],
      },
      fontSize : {
        'title-1' : ['64px'],
        'title-2' : ['48px'],
        'subtitle-1' : ['36px'],
        'subtitle-2' : ['28px'],
        'subtitle-3' : ['20'],
        'lead' : ['18px'],
        'base' : ['16px'],
        'small' : ['14px'],
        'icon' : ['24px']
      },
      colors:{
        'primary' : '#6F3DF4',
        'white' : '#D9D9D9',
        'black' : '#0E0A17',
        'gray' : '#8E8E8E',
        'light' : '#FFFFFF',
        'success' : '#07631C',
        'danger' : '#8C1717',
        'primary-60' : '#6f3df499',
        'primary-40' : '#6f3df466',
        'primary-10' : '#6f3df41a',
        'white-60' : '#d9d9d999',
        'white-40' : '#d9d9d966',
        'white-10' : '#d9d9d91a',
        'black-60' : '#0e0a1799',
        'black-40' : '#0e0a1766',
        'blavk-10' : '#0e0a171a',
        'pink' : '#E230E5',
        'pink-10' : '#9989C2',
      }
    },
    plugins: [],
  }