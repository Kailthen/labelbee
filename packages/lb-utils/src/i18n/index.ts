import i18n from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import resources from './resources.json'

/**
 * 根据是否有language判断为是否初始化
 */
if (!i18n.language) {
  i18n
    .use(LanguageDetector) // passes i18n down to react-i18next
    .init({
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
    })
}

i18n.addResourceBundle('en', 'translation', resources.en, true)
i18n.addResourceBundle('cn', 'translation', resources.cn, true)

export default i18n
export { i18n }
