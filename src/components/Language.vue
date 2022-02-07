<template lang="pug">
  section.language
      button(v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click="changeLanguage(lang)" :class="{'active': $i18n.locale == lang}")
        img(:src="require(`@/assets/flags/${lang}.svg`)")
        | {{ lang }}
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
      langs: ['pt-BR', 'en-US', 'es-ES', 'fr-FR', 'ru-RU', 'zh-CN'],
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('language', lang);
    }
  }
}
</script>

<style lang="stylus">
  .language
    img
      width 20px
      pointer-events none
    button
      margin 0.5rem
      cursor pointer
      border 0
      background #eee
      padding 0.5rem
      border-radius 5px
      box-shadow 0 1px 0 rgba(255, 255, 255, 1), 0 2px 5px rgba(0, 0, 0, 0.2)
      font-size 0
      &.active
        color #fff
        background #2c3e50
</style>
