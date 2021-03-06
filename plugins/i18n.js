import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const defaultLocale = 'zh-cn'

export default ({ app, store, redirect, router, route }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: defaultLocale,
    messages: {
      // 'en': require('~/locales/en.json'),
      'zh-cn': require('~/locales/zh-cn.json'),
    },
    silentTranslationWarn: true//禁用导向默认locale的warning
  })

  // Path获取函数，所有router使用时需使用$i18n.path来获取uri
  app.i18n.path = uri => `/${store.state.i18n.locale}` + uri

  // 显示用函数
  app.i18n.label = () => {
    let label;
    store.state.i18n.locales.forEach(item => {
      if (item.name === store.state.i18n.locale) {
        label = item.label;
      }
    })
    return label;
  }

  app.i18n.jumpTo = (subpath) => {
    app.router.push(app.i18n.path(subpath))
  }
}
