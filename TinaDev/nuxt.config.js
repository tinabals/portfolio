export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Balogun Damilola - Front-End Developer from Ibadan, Nigeria',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'language', content: 'en' },
      { name: 'author', content: 'Damilola Balogun' },
      {
        hid: 'description',
        name: 'description',
        content: 'Front-End Developer from Ibadan. Nigeria',
      },
      {
        name: 'keywords',
        content:
          'dare, oluwadamilare, damilare, oluwa, adegoke, temi, tope, temitope, adegoke temi, adegoke tope, adegoke temitope, temitope adegoke, dare adegoke, dare tope, temitope damilare, adegoke damilare, adegoke temitope, oluwadamilare adegoke, adegoke temitope, temitope oluwadamilare, temitope, temi oluwadamilare, damilare temi, temi dare, xylia, devtemitope, temitope dev, dv, developer, front-end developer, front-end, designer, freelance, freelance developer, freelancer, front-end web developer, web developer, website developer, website designer, web designer, HTML5, HTML5 developer, CSS3, CSS, CSS3 developer, SASS, SASS developer, Javascript, Javascript developer, Angular, Angular JS, Vue JS, Vue, Angular Developer, Vue Developer, .NET,  .NET Developer,responsive, responsive dev, dev mobile, mobile, mobile developer, front-end mobile developer, front-end developer in Nigeria, Developer in Nigeria, React developer, Vue Developer, Dev Vue,  front-end developer in Nigeria, front-end developer in Akure - Nigeria, Geek, All developers, Good developers, react, next developer',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@temitope_dev' },
      { name: 'twitter:creator', content: '@temitope_dev' },
      {
        name: 'twitter:title',
        content: 'Balogun Damilola - Front-End Developer from Ibadan, Nigeria',
      },
      {
        name: 'twitter:description',
        content: 'Balogun Damilola - Front-End Developer from Ibadan, Nigeria',
      },
      {
        name: 'twitter:image:src',
        content: 'https://temitope.dev/images/me/temitope-adegoke.png',
      },
      { content: 'https://temitope.dev/', property: 'twitter:url' },

      { content: 'https://temitope.dev/', property: 'og:url' },
      {
        content: 'Balogun Damilola- Front-End Developer from Ibadan, Nigeria',
        property: 'og:title',
      },
      {
        content: 'Front-End Developer from Ibadan. Nigeria',
        property: 'og:description',
      },
      {
        content: 'https://temitope.dev/images/me/temitope-adegoke.png',
        property: 'og:image',
      },
      {
        property: 'og:image:alt',
        content: ' Balogun Damilola- Front-End Developer from Ibadan, Nigeria',
      },
      { property: 'og:site_name', content: 'Damilola Balogun' },
      { property: 'og:type', content: 'website' },

      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      {
        hid: 'gtm-script',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-ZRHQXVJCVV',
        async: true,
        defer: true,
      },
      {
        hid: 'gtm-script-2',
        src: '/js/gtag.js',
        defer: true,
      },
      {
        hid: 'microsoft-clarity-script',
        type: 'text/javascript',
        src: 'js/microsoftc.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css', '@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    [
      'nuxt-mail',
      {
        message: {
          to: 'balogundamilola.f@gmail.com',
        },
        smtp: {
          service: 'gmail',
          auth: {
            user: process.env.NUXT_APP_GOOGLE_MAIL,
            pass: process.env.NUXT_APP_GOOGLE_PASSWORD,
          },
        },
      },
    ],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://portfolio-seven-sand-60.vercel.app/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
