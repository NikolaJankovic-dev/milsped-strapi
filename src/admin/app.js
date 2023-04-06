import favicon from './extensions/logo.png'

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Milšped Dashboard",
      "Auth.form.welcome.title": "Welcome to MilšpedCMS!",
      "Auth.form.welcome.subtitle": "Log in into your account"
    }
  },
  head: {
    favicon
  },
  auth: {
    logo: favicon
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
