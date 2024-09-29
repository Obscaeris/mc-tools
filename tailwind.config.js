/** @type {import('tailwindcss').Config} */
import {createThemes} from "tw-colors";
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            size: {
                '4xl': '3072px'
            },
        },
    },
    plugins: [
        createThemes({
            global_theme: {
                'background': '#212428',
                'primary': '#b99fff',
                'accent': '#1c2d9a',
                'focus': '#7E4EFD',
                'btn_bg': '#383838',
                'btn_bg_hover': '#5d5d5d',
                'txt_primary': '#ffffff',
                'txt_secondary': '#2e2e2e',
                'txt_disabled': '#b3b3b3'
            },
            light_mode: {
                'background': '#b99fff',
                'primary': '#212428',
                'accent': '#1c2d9a',
                'focus': '#b99fff',
                'btn_bg': '#383838',
                'btn_bg_hover': '#5d5d5d',
                'txt_primary': '#212428',
                'txt_secondary': '#2e2e2e',
                'txt_disabled': '#b3b3b3',
                'txt_hover': '#ffffff'
            }
        }, {
            defaultTheme: {
                light: 'light_mode',
                dark: 'global_theme'
            }
        })
    ],
};

