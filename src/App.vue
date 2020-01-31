<template>
  <div id="app">
    <h1>SlideContent com Vue.js</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Exemplo slide infinite -->
    <h2 class="slide-title">Exemplo slide infinite</h2>
    <SlideContent name="Exemplo 1" type="infinite" :nav="true">
      <SlideItem title="Ermelino Matarazzo" :img="require(`@/assets/ermelino.jpg`)" url="teste" />
      <SlideItem class="favela actived" title="Fé em Deus" :img="require(`@/assets/faveladascriancas.jpg`)" url="teste" />
    </SlideContent>
    <!-- Exemplo slide simple -->
    <h2 class="slide-title">Exemplo slide simple</h2>
    <SlideContent name="Exemplo 2" type="simple" :nav="false">
      <SlideItem class="actived" title="Ermelino Matarazzo" :img="require(`@/assets/ermelino.jpg`)" url="teste" />
      <SlideItem title="Fé em Deus" :img="require(`@/assets/faveladascriancas.jpg`)" url="teste" />
    </SlideContent>
    <!-- Exemplo slide simple -->
    <h2 class="slide-title">Exemplo slide simple</h2>
    <SlideContent name="Exemplo 2" type="simple" :nav="true">
      <SlideItem class="actived" title="Ermelino Matarazzo" :img="require(`@/assets/ermelino.jpg`)" url="teste" />
      <SlideItem title="Fé em Deus" :img="require(`@/assets/faveladascriancas.jpg`)" url="teste" />
    </SlideContent>
    <SlideFooter />
  </div>
</template>

<script>
import SlideContent from './components/SlideContent.vue'
import SlideItem from './components/SlideItem.vue'
import SlideFooter from './components/SlideFooter.vue'

export default {
  name: 'app',
  components: {
    SlideContent,
    SlideItem,
    SlideFooter
  }
}
</script>

<style lang="stylus">
@font-face
  font-family "Deus"
  src url(https://rimafavela.web.app/fonts/deus.0ea8c3f0.ttf),url(https://rimafavela.web.app/fonts/deus.87fcee5b.woff2),url(https://rimafavela.web.app/fonts/deus.94931b27.woff)

body
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  h1
    font-size 3em
.slide-title
  font-size 2em
  margin 2em 0
  border-top 3px dashed #ccc
  padding-top 2em
  color #53b983
.favela
  h1
    font-family "Deus"
  img
    filter saturate(2) brightness(1.2)

</style>
