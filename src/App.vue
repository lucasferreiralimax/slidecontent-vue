
<script setup>
import pkg from '../package.json';
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Language from './components/Language/index.vue';
import SlideFooter from './components/SlideFooter/index.vue';
const { t } = useI18n();
const appVersion = pkg.version;
</script>

<template lang='pug'>
Language
RouterLink.logo(to='/')
  h1 {{ t('title') }}
  img(alt='Vue logo' src='./assets/logo.svg' width='80')
p.version {{ t('version') }} {{ appVersion }}
#nav
  RouterLink(to='/')
    svg(aria-hidden='true' viewBox='0 0 24 24' focusable='false' data-testid='HomeIcon' tabindex='-1' title='HomeIcon')
      path(d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z')
    | {{ t('nav.home') }}
  RouterLink(to='/about')
    svg(aria-hidden='true' viewBox='0 0 24 24' focusable='false'  data-testid='MenuBookIcon' tabindex='-1' title='MenuBook')
      path(d='M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z')
      path(d='M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z')
    | {{ t('nav.about') }}
RouterView
SlideFooter
</template>

<style lang='stylus'>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

body
  margin 0
  padding 0

#app
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  color #2c3e50
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  .logo
    text-decoration none
    color #2c3e50
  h1
    font-size 3em
    +mobile()
     font-size 1.2em
#nav
  display flex
  width 100%
  max-width 400px
  margin 0 auto
  justify-content center
  align-items center
  +mobile()
    flex-direction column
  a
    padding 1rem 1.5rem 1rem 1rem
    margin 0.5rem
    background #eee
    color #2c3e50
    border-radius 10px
    text-decoration none
    width 100%
    justify-content center
    align-items center
    display flex
    +mobile()
      width calc(100% - 60px)
    svg
      width 25px
      margin-right 0.5rem
      outline none
      fill #2c3e50
    &.RouterLink-exact-active
      background #008000
      color #fff
      svg
        fill #fff
</style>
