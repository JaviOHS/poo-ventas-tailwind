module.exports = {
    darkMode: 'class',
    content: [
        '../../templates/**/*.html',
        '../../static/**/*.js',
        '../**/*.py',
    ],
    theme: {
        extend: {
            maxWidth: {
                '3xl': '48rem',
                '4xl': '56rem',
        },
            colors: {
                primary: {
                    "50": "#eff6ff",
                    "100": "#dbeafe",
                    "200": "#bfdbfe",
                    "300": "#93c5fd",
                    "400": "#60a5fa",
                    "500": "#3b82f6",
                    "600": "#2563eb",
                    "700": "#1d4ed8",
                    "800": "#1e40af",
                    "900": "#1e3a8a",
                    "950": "#172554"
                },
                secondary: '#F5F5F5',
                title: '#42C2FF',
                titleHover: '#14DC99',
                title2: '#0A3D62',
                items: 'rgb(95, 95, 95)',
                
            },
            fontFamily: {
                'UbuntuMono-Regular': ['UbuntuMono-Regular', 'monospace'],
                Mukta: ['Mukta', 'sans-serif'],
                body: [
                    'Inter', 
                    'ui-sans-serif', 
                    'system-ui', 
                    '-apple-system', 
                    'system-ui', 
                    'Segoe UI', 
                    'Roboto', 
                    'Helvetica Neue', 
                    'Arial', 
                    'Noto Sans', 
                    'sans-serif', 
                    'Apple Color Emoji', 
                    'Segoe UI Emoji', 
                    'Segoe UI Symbol', 
                    'Noto Color Emoji'
                ],
                sans: [
                    'Inter', 
                    'ui-sans-serif', 
                    'system-ui', 
                    '-apple-system', 
                    'system-ui', 
                    'Segoe UI', 
                    'Roboto', 
                    'Helvetica Neue', 
                    'Arial', 
                    'Noto Sans', 
                    'sans-serif', 
                    'Apple Color Emoji', 
                    'Segoe UI Emoji', 
                    'Segoe UI Symbol', 
                    'Noto Color Emoji'
                ]
            },
            fontStyle: {
                normal: 'normal',
                italic: 'italic',
            },
            transitionProperty: {
                colors: 'background-color, border-color, color, fill, stroke',
                transform: 'transform',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        function ({ addComponents }) {
            addComponents({
                // BOTONES
                '.btn-red': {
                    backgroundColor: '#E3342F',
                    border: '1px solid #E3342F',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    margin: '0.5rem',
                    borderRadius: '1.5rem',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
                    textTransform: 'capitalize',
                    fontSize: '18px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        backgroundColor: '#CC1F1A',
                        borderColor: '#CC1F1A',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                    },
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                },
                '.btn-dark-blue': {
                    backgroundColor: 'rgb(10 61 98)',
                    border: '1px solid rgb(10 61 98)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '1.5rem',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
                    '&:hover': {
                        color: 'rgb(10 61 98)',
                        backgroundColor: '#42C2FF',
                        borderColor: '#42C2FF',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                    },
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                },
                // TARJETAS DE INFORMACION
                '.information-card, .characteristics-card': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'rgb(255 255 255)',
                    padding: '1.5rem',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#e5e7eb',
                    borderRadius: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    },
                },
                '.information-card-title': {
                    fontSize: '22px',
                    textTransform: 'uppercase',
                    fontWeight: '800',
                    color: '#0A3D62',
                    marginBottom: '0.5rem',
                },
                '.information-card-img': {
                    width: '70%',
                    height: 'auto',
                    borderRadius: '10%',
                },
                // TARJETAS DE CARACTERISTICAS
                '.characteristics-card': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '18px',
                },
                '.characteristics-card img': {
                    width: '100%',
                    borderRadius: '10%',
                },
                '.characteristics-card-title': {
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    fontWeight: '600',
                    color: '#0A3D62',
                    marginLeft: '20px',
                    textAlign: 'center',
                },
                // Tarjetas generales
                '.card-header': {
                    width: '50%',
                    margin: '10px',
                },
                '.card-body': {
                    backgroundColor: '#FAFAFA',
                    margin: '6px',
                    padding: '6px',
                    borderRadius: '20px'
                },
                '.card-footer': {
                    backgroundColor: '#FAFAFA',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '10px'
                },
                '.custom-transform': {
                    transform: 'scale(1)',
                    transitionProperty: 'transform',
                    transitionDuration: '300ms',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                },
                '.transition-padding': {
                    transitionProperty: 'padding',
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'ease-in-out',
                    '&:hover': {
                        padding: '12px',
                    },
                },
                // Estilos para el carrusel
                '#carousel-inner': {
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                },

                '@keyframes slideRight': {
                    from: {
                        transform: 'translateX(0)',
                    },
                    to: {
                        transform: 'translateX(-100%)',
                    },
                },

                '.animate-slide-right': {
                    animation: 'slideRight 0.5s ease-in-out',
                },
            });
        },
    ],
};
