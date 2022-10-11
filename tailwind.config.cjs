/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                HindReg: ['HindSiliguri-Regular'],
                HindLight: ['HindSiliguri-Light'],
                PopBold: ['Poppins-ExtraBold'],
                PopLight: ['Poppins-ExtraLight'],
                PopReg: ['Poppins-Regular'],
                RobLight: ['Roboto-Light'],
            },
        },
    },

    plugins: [],
}
