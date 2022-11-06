<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/base/AppHeader/index.vue';
import AppFooter from './components/base/AppFooter/index.vue';
</script>

<template lang='pug'>
AppHeader
main
  RouterView
AppFooter
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
  min-height 90vh
  display flex
  flex-direction column
</style>
