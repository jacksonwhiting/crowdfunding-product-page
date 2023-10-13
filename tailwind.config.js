/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				skin: {
					"canvas-pri": "#fafafa", // Off white canvas
					"canvas-sec": "#979797", // Darker gray
					"canvas-inverted": "some color",
					"brand-pri": "#000000", // Black
					"brand-sec": "#B1B1B1", // Gray
					"brand-tert": "#FFFFFF", // White
					"brand-accent": "#3CB3AB", // Teal green
					"text-pri": "#7A7A7A", // Gray text
					"text-sec": "som",
					"text-inverted": "some color",
					"dim-brand-accent": "#2F2F2F", // Dim Gray
					"active-brand-accent": "#147A73", // Dark Green
				},
			},
			backgroundImage: {
				"gradient-pri":
					"linear-gradient(90deg, rgba(99,72,254,1) 0%, rgba(97,5,149,1) 100%)",
				"gradient-sec":
					"linear-gradient(180deg, rgba(99,72,254,1) 0%, rgba(97,5,149,1) 100%)",
			},
			fontFamily: {
				fontPri: ["Commissioner", "sans-serif"],
			},
			fontSize: {
				hdgXl: "2rem", // 32px
				hdgL: "1.75rem", // 28px
				hdgM: "1.25rem", // 20px
				hdgS: "1.125rem", // 18px
				bodyMobile: [".875rem", "1.5rem"], //Mobile text 14px
				bodyDesktop: ["1rem", "1.75rem"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
