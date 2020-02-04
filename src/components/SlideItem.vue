<template lang="pug">
  article(class="slide-item")
    a(:href="url" :target="target")
      h1(v-if="title") {{ title }}
      img(:src="img" :alt="title")
</template>

<script>
export default {
  name: 'SlideContent',
  props: {
    title: String,
    img: String,
    url: String,
    target: String
  }
}
</script>

<style scoped lang="stylus">
.slide-item
  opacity 0
  transition .3s
  height 100vh
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  display flex
  align-items center
  justify-content center
  &.actived
     opacity 1
     z-index 1
     h1
       animation 3s opacityDelay
  a
    text-decoration none
    color #000
  img, a
    min-width 100%
  h1
    position absolute
    left 50%
    top 1em
    transform translateX(-50%)
    background rgba(#fff, .7)
    padding .5em
    font-size 2em
    width 100%
    text-align center
    z-index 1
@keyframes opacityDelay
  0%
    opacity 0
  100%
    opacity 1
</style>
