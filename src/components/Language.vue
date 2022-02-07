<template lang="pug">
  section.language
      button(v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click="changeLanguage(lang)" :class="{'active': $i18n.locale == lang}")
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
    display flex
    align-items center
    justify-content center
    max-width 500px
    margin 0 auto
    button
      flex 1
      margin 0.5rem
      cursor pointer
      border 0
      background #eee
      padding 0.5rem
      border-radius 5px
      box-shadow 0 1px 0 rgba(255, 255, 255, 1), 0 2px 5px rgba(0, 0, 0, 0.2)
      &.active
        color #fff
        background #53b983
</style>
