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
  .language button
    margin 0.5rem
    cursor pointer
    &.active
      color #fff
      background #53b983
      border 0
      padding 0.5rem
      border-radius 5px
</style>
