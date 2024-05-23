import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                slideup: 'slideup 15s linear infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                },
                slideup: {
                    '0%': {transform: 'translateY(calc(100vh + 100px))'},
                    '100%': {transform: 'translateY(calc(0vh - 100px))'},
                },
            }
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            layout: {
                disabledOpacity: "0.3",
                radius: {
                    small: "3px",
                    medium: "5px",
                    large: "7px",
                },
                borderWidth: {
                    small: "1px",
                    medium: "1px",
                    large: "2px",
                },
            },
            themes: {
                light: {},
                dark: {}
            }
        }),
        plugin(({matchUtilities, theme}) => {
            matchUtilities(
                {
                    "animation-delay": (value) => {
                        return {
                            "animation-delay": value,
                        };
                    },
                },
                {
                    values: theme("transitionDelay"),
                }
            );
        }),
    ]
};
export default config;
