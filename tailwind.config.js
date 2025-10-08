/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Color (Teal Blue)
                primary: {
                    50: '#f0f7fa',
                    100: '#d9edf4',
                    200: '#b3dbe9',
                    300: '#8cc9de',
                    400: '#5eb0d0',
                    500: '#327498',  // BASE
                    600: '#2c6483',
                    700: '#25536e',
                    800: '#1e4259',
                    900: '#17364a',
                    950: '#0f2433',
                },
                // Secondary Brand Color (Warm Orange)
                secondary: {
                    50: '#fef8f0',
                    100: '#fcefd9',
                    200: '#f9dfb3',
                    300: '#f5cf8c',
                    400: '#f2b968',
                    500: '#F0A243',  // BASE
                    600: '#d98e39',
                    700: '#b8762f',
                    800: '#975f26',
                    900: '#76481e',
                    950: '#5a3616',
                },
                // Semantic Colors
                success: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                error: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                },
                warning: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                info: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },
            // Custom spacing for consistent layout
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem',
            },
            // Border radius tokens
            borderRadius: {
                'sm': '0.25rem',    // 4px - small elements
                'DEFAULT': '0.5rem', // 8px - standard
                'md': '0.625rem',   // 10px - cards
                'lg': '0.75rem',    // 12px - modals
                'xl': '1rem',       // 16px - large cards
                '2xl': '1.5rem',    // 24px - hero sections
            },
            // Box shadow for depth
            boxShadow: {
                'soft': '0 2px 8px rgba(50, 116, 152, 0.08)',
                'card': '0 4px 12px rgba(50, 116, 152, 0.12)',
                'elevated': '0 8px 24px rgba(50, 116, 152, 0.16)',
                'float': '0 12px 32px rgba(50, 116, 152, 0.2)',
            },
            // Animation tokens
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}