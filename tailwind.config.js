/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["className", '[data-theme="dark"]'],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            daisyui: {
                themes: ["light", "luxury"],
            },
        },
    },
    plugins: [require("daisyui")],
};
