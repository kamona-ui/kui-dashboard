import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const opts = {
    colorVars: {
        //
        '--color-primary': 'var(--color-fuchsia)',
        '--color-primary-50': 'var(--color-fuchsia-50)',
        '--color-primary-100': 'var(--color-fuchsia-100)',
        '--color-primary-light': 'var(--color-fuchsia-light)',
        '--color-primary-lighter': 'var(--color-fuchsia-lighter)',
        '--color-primary-dark': 'var(--color-fuchsia-dark)',
        '--color-primary-darker': 'var(--color-fuchsia-darker)',

        //
        '--color-fuchsia-50': '#fdf4ff',
        '--color-fuchsia-100': '#fae8ff',
        '--color-fuchsia-lighter': '#f0abfc',
        '--color-fuchsia-light': '#e879f9',
        '--color-fuchsia': '#d946ef',
        '--color-fuchsia-dark': '#c026d3',
        '--color-fuchsia-darker': '#a21caf',

        //
        '--dark-eval-0': '#151823',
        '--dark-eval-1': '#222738',
        '--dark-eval-2': '#2A2F42',
        '--dark-eval-3': '#2C3142',
    },
    colors: {
        dark: {
            0: 'var(--dark-eval-0)',
            1: 'var(--dark-eval-1)',
            2: 'var(--dark-eval-2)',
            3: 'var(--dark-eval-3)',
        },
        primary: {
            50: 'var(--color-primary-50)',
            100: 'var(--color-primary-100)',
            lighter: 'var(--color-primary-lighter)',
            light: 'var(--color-primary-light)',
            DEFAULT: 'var(--color-primary)',
            dark: 'var(--color-primary-dark)',
            darker: 'var(--color-primary-darker)',
        },
        success: {
            50: colors.green[50],
            100: colors.green[100],
            lighter: colors.green[300],
            light: colors.green[400],
            DEFAULT: colors.green[500],
            dark: colors.green[600],
            darker: colors.green[700],
        },
        warning: {
            50: colors.orange[50],
            100: colors.orange[100],
            lighter: colors.orange[300],
            light: colors.orange[400],
            DEFAULT: colors.orange[500],
            dark: colors.orange[600],
            darker: colors.orange[700],
        },
        danger: {
            50: colors.red[50],
            100: colors.red[100],
            lighter: colors.red[300],
            light: colors.red[400],
            DEFAULT: colors.red[500],
            dark: colors.red[600],
            darker: colors.red[700],
        },
        info: {
            50: colors.cyan[50],
            100: colors.cyan[100],
            lighter: colors.cyan[300],
            light: colors.cyan[400],
            DEFAULT: colors.cyan[500],
            dark: colors.cyan[600],
            darker: colors.cyan[700],
        },
    },
    fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
    },
}

export const primaryColor = opts.colorVars['--color-primary']

export default plugin.withOptions(
    function (options = {}) {
        const { colorVars = opts.colorVars } = options

        return function ({ addBase }) {
            addBase({
                [[':root']]: colorVars,
            })
        }
    },

    function (options = {}) {
        const {
            primaryColors = opts.colors.primary,
            successColors = opts.colors.success,
            warningColors = opts.colors.warning,
            dangerColors = opts.colors.danger,
            infoColors = opts.colors.info,
            darkColor = opts.colors.dark,

            fontFamily = opts.fontFamily,
        } = options

        return {
            theme: {
                extend: {
                    fontFamily,

                    colors: {
                        dark: darkColor,
                        primary: primaryColors,
                        success: successColors,
                        warning: warningColors,
                        danger: dangerColors,
                        info: infoColors,
                    },

                    boxShadow: {
                        't-lg': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
                    },
                },
            },
        }
    },
)
