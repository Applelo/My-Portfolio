export default {
  title: 'Loïs Boubault',
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
  },
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],
  css: ['~/assets/scss/base.scss'],
  styleResources: {
    scss: [
      'breakpoint-sass/stylesheets/_breakpoint.scss',
      './assets/scss/mixins/*.scss',
      './assets/scss/vars/*.scss',
    ],
  },
  modules: [
    [
      '@nuxt/content',
      {
        markdown: {
          remarkPlugins: [
            'remark-squeeze-paragraphs',
            'remark-slug',
            'remark-autolink-headings',
            'remark-external-links',
            'remark-footnotes',
            'remark-breaks',
          ],
        },
      },
    ],
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.js' },
          { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
        ],
        defaultLocale: 'en',
        langDir: '~/i18n/',
      },
    ],
  ],
};
