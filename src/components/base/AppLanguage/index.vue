<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n';

const { locale } = useI18n({ useScope: 'global' });

watch(locale, (val) => {
  setI18nLanguage(val);
});

function changeLanguage (lang) {
  setI18nLanguage(lang);
  localStorage.setItem('language', lang);
};
</script>

<template lang="pug">
section.language
  button(
    v-for="(lang, i) in supportLocales"
    :data-testid="`test-${lang}`"
    :key="`Lang${i}`"
    :value="lang"
    @click="changeLanguage(lang)"
    :class="{'active': locale == lang}"
  )
    img(:src="`./assets/flags/${lang}.svg`" :alt="lang")
    | {{ lang }}
</template>

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
