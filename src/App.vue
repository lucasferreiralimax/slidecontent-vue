<template lang="pug">
  #app
    Language
    router-link(to="/").logo
      h1 {{ $t("title") }}
      img(alt="Vue logo" src="./assets/logo.png")
    router-view
    SlideFooter
</template>

<script>
import Language from './components/Language.vue'
import SlideFooter from './components/SlideFooter.vue'

export default {
  name: 'app',
  components: {
    Language,
    SlideFooter
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

body
  margin 0
  padding 0

#app
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  color #2c3e50
  font-family 'Avenir', Helvetica, Arial, sans-serif
  margin-top 60px
  text-align center
  .logo
    text-decoration none
    color #2c3e50
  h1
    font-size 3em
    +mobile()
      font-size 2em
</style>
