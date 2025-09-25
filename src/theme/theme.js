// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Создаем и экспортируем тему
export const theme = createTheme({
    // 1. ЦВЕТА
    palette: {
        primary: {
            main: '#1976d2',     // Синий (как в лого)
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#dc004e',     // Красный/розовый (акценты)
            light: '#ff5c8d',
            dark: '#9a0036',
            contrastText: '#ffffff'
        },
        background: {
            default: '#f5f5f5',  // Светло-серый фон
            paper: '#ffffff'     // Белый для карточек
        },
        text: {
            primary: '#212121',  // Темно-серый текст
            secondary: '#757575' // Серый второстепенный
        }
    },

    // 2. ШРИФТЫ
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.2
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.3
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.4
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5
        },
        button: {
            textTransform: 'none', // Убирает AUTOCAPITALIZE
            fontWeight: 500
        }
    },

    // 3. ФОРМЫ
    shape: {
        borderRadius: 8 // 8px скругление
    },

    // 4. ОТСТУПЫ
    spacing: 8, // 8px базовый unit

    // 5. КАСТОМНЫЕ КОМПОНЕНТЫ
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500
                },
            },
        }
    }
});

// Экспортируем по умолчанию для удобства
export default theme;