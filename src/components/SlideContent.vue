<template>
  <section class="slide-content" :class="type">
    <slot></slot>
    <button v-if="nav" class="btn prev" type="button" name="button" @click="prev">Ir para a esquerda</button>
    <button v-if="nav" class="btn next" type="button" name="button" @click="next">Ir para a direita</button>
  </section>
</template>

<script>
export default {
  name: 'SlideContent',
  props: {
    name: String,
    type: String,
    nav: Boolean
  },
  mounted() {
    console.log("Slide", this.name)
    console.log(this.$slots)
  },
  methods: {
    prev() {
      console.log("Slide", this.name)
      console.log("prev")

      let slides = this.$el.querySelectorAll(".slide-item")
      let slide = this.$el.querySelector(".slide-item.actived")

      console.log(slides)
      console.log(slide)

      if(slide.previousElementSibling && slide.previousElementSibling.classList.contains("slide")) {
        slide.classList.remove("actived")
        slide.previousElementSibling.classList.add("actived")
        console.log("IF")
      } else {
        console.log("ELSE")
        slide.classList.remove("actived")
        slides[slides.length - 1].classList.add("actived")
      }
    },
    next() {
      console.log("Slide", this.name)
      console.log("next")

      let slides = this.$el.querySelectorAll(".slide-item")
      let slide = this.$el.querySelector(".slide-item.actived")
      console.log(slides)
      console.log(slide)

      if(slide.nextElementSibling && slide.nextElementSibling.classList.contains("slide")) {
        slide.classList.remove("actived")
        slide.nextElementSibling.classList.add("actived")
        console.log("IF")

      } else {
        console.log("ELSE")
        slide.classList.remove("actived")
        slides[0].classList.add("actived")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.slide-content
  color #000
  width 100%
  max-height 100vh
  min-height 100vh
  overflow hidden
  position relative
  .btn
    background #fff
    border-radius 100%
    font-size 0
    font-weight bold
    height 60px
    width 60px
    border 2px solid #000
    position absolute
    top 50%
    transform translateY(-50%)
    transition .3s all
    cursor pointer
    box-shadow 0 0 0 2px rgba(#fff, .5), 0 0 10px 10px rgba(#000, .5)
    outline none
    user-select none
    z-index 1
    &:hover
      background #000
      box-shadow 0 0 10px 10px rgba(#fff, .5)
      color #fff
      &:before,
      &:after
        background #fff
    &:before,
    &:after
      content ""
      display flex
      width 5px
      height 50%
      background #000
      border-radius 10px
  .prev
    left 10px
    &:active
      transform translateY(-50%) translateX(10px)
    &:before
      transform rotate(45deg) translate(17px, -10px)
    &:after
      transform rotate(-45deg) translate(18px, 10px)
  .next
    right 10px
    &:active
      transform translateY(-50%) translateX(-10px)
    &:before
      transform rotate(-45deg) translate(11px, 19px)
    &:after
      transform rotate(45deg) translate(11px, -19px)

</style>
