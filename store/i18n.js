import { find } from 'lodash'

export const state = () => ({
  locales: [
    { name: 'en', label: 'English', shortcut: 'en' },
    { name: 'zh', label: '简体中文', code: 'zh-cn', shortcut: 'cn' },
  ],
  locale: null,
  localeLabel: null,
  shortcut: null
})

export const getters = {
  locale: state => state.locale,
  localeLabel: state => state.localeLabel,
  shortcut: state => state.shortcut,
  locales: state => state.locales
}

export const mutations = {
  SET_LANG (state, locale) {
    const localeData = find(state.locales, { name: locale })
    if (!localeData) return
    state.locale = localeData.name
    state.localeLabel = localeData.label
    state.shortcut = localeData.shortcut
  },
}

export const actions = {

}
