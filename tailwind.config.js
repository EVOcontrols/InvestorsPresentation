module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      screens: {
        portrait: { raw: '(orientation: portrait)' },
        landscape: { raw: '(orientation: landscape)' },
        mob: {
          raw: 'only screen and (max-width: 639.9px)',
        },
        tt: {
          raw: 'only screen and (min-width: 640px)',
        },
        tth: {
          raw: 'only screen and (min-width: 640px) and (orientation: landscape)',
        },
        ttv: {
          raw: 'only screen and (min-width: 640px) and (orientation: portrait)',
        },
      },
    },
  },
  plugins: [],
};
