/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#A29BFE',
                'primary-light': 'rgba(161, 154, 254,.4)',
                'secondary': '#3183FF',
            },
        },
    },
    plugins: [],
}