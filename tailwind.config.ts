import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		maxWidth: {
  			'8xl': '1920px'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'primary-2': 'var(--primary-2)',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			'secondary-2': 'var(--secondary-2)',
  			hover: 'var(--hover)',
  			'hover-1': 'var(--hover-1)',
  			'hover-2': 'var(--hover-2)',
  			'accent-0': 'var(--accent-0)',
  			'accent-1': 'var(--accent-1)',
  			'accent-2': 'var(--accent-2)',
  			'accent-3': 'var(--accent-3)',
  			'accent-4': 'var(--accent-4)',
  			'accent-5': 'var(--accent-5)',
  			'accent-6': 'var(--accent-6)',
  			'accent-7': 'var(--accent-7)',
  			'accent-8': 'var(--accent-8)',
  			'accent-9': 'var(--accent-9)',
  			violet: 'var(--violet)',
  			'violet-light': 'var(--violet-light)',
  			'violet-dark': 'var(--violet-dark)',
  			pink: 'var(--pink)',
  			'pink-light': 'var(--pink-light)',
  			cyan: 'var(--cyan)',
  			blue: 'var(--blue)',
  			green: 'var(--green)',
  			red: 'var(--red)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		textColor: {
  			base: 'var(--text-base)',
  			primary: 'var(--text-primary)',
  			secondary: 'var(--text-secondary)'
  		},
  		boxShadow: {
  			'outline-normal': '0 0 0 2px var(--accent-2)',
  			magical: 'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px'
  		},
  		lineHeight: {
  			'extra-loose': '2.2'
  		},
  		scale: {
  			'120': '1.2'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
