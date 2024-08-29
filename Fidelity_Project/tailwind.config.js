/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      Footer_bg:"#e8e8e8",
      Footer_links:"#cf142b",
      Footer_text:"#696969",
      text_primary:"#696969",
    },
    backgroundImage: {
        'Banner-Image': "url('./assets/Images/Home/Fidelity-UK-home.jpg')",
        'Banner-Image2': "url('./assets/Images/Programme/Artboard2.webp')",
        'Banner-Image3': "url('./assets/Images/Connectivity and data/Banner-connectivity.jpg')",
        'Banner-Image4': "url('./assets/Images/Cloud/Energy-Website-banner.png')",
        'Banner-Image5': "url('./assets/Images/Phone/Banner-phone.png')",
        'Banner-Image6': "url('./assets/Images/IoT/IoT-Banner.webp')",
        'Banner-Image7': "url('./assets/Images/Cloudpage/Cloud-Banner.jpg')",
        'Banner-Image8': "url('./assets/Images/Telephony/Telephony-Banner.webp')",
      },
    },
  },
  plugins: [],
}

