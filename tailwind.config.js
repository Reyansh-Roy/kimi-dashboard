/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5AAC',
        secondary: '#6B7280',
        background: '#F5F5F5',
        panel: '#FFFFFF',
        success: '#10B981',
        warning: '#F59E0B',
        alert: '#DC2626',
        adequate: '#93C5FD',
        depleted: '#E5E7EB',
        compatible: '#DBEAFE',
        cautionBg: '#FEF3C7',
      },
      fontSize: {
        'data': '10pt',
        'header': '12pt',
        'annotation': '8pt',
      },
    },
  },
  plugins: [],
}
