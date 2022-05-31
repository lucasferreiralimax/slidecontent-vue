<template lang="pug">
article.slide-item
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
  align-items center
  bottom 0
  display flex
  height 100%
  justify-content center
  left 0
  opacity 0
  position absolute
  right 0
  top 0
  transition .3s
  &.actived
     opacity 1
     z-index 1
     h1
       animation 3s opacityDelay
  a
    color #000
    text-decoration none
  img, a
    min-width 100%
  h1
    background rgba(#fff, .7)
    font-size 2em
    left 50%
    padding .5em
    position absolute
    text-align center
    top 1em
    transform translateX(-50%)
    width 100%
    z-index 1
@keyframes opacityDelay
  0%
    opacity 0
  100%
    opacity 1
</style>
