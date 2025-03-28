
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'sans': ['Poppins', 'system-ui', 'sans-serif'],
				'mono': ['Special Elite', 'Courier New', 'monospace'],
			},
			contrast: {
				'105': '1.05',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				sepia: {
					light: '#f5f0e5',
					DEFAULT: '#e8d7b4',
					dark: '#d4bc88'
				},
				neon: {
					blue: '#4361ee',
					purple: '#7209b7',
					pink: '#f72585',
					yellow: '#ffd60a'
				},
				vintage: {
					paper: '#f8f4e3',
					ink: '#2d2a24',
					gold: '#d4af37',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-soft': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.9',
						transform: 'scale(1.02)'
					}
				},
				'text-flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: '1',
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: '0.5',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
				'text-flicker': 'text-flicker 4s infinite'
			},
			backgroundImage: {
				'grain': "url('/grain.png')",
				'noise': "url('/noise.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
