<template lang="pug">
  section.slide-content(:class="type")
    div.slide-slots
      slot
    .slide-navigation(v-if="nav")
      button.btn.prev(type="button" name="button" @click="prevHandler")
        | {{ $t("to_left") }}
      button.btn.next(type="button" name="button" @click="nextHandler")
        | {{ $t("to_right") }}
</template>

<script>
export default {
  name: 'SlideContent',
  props: {
    name: String,
    type: String,
    nav: Boolean,
    animation: Object
  },
  created() { this.slideAnimation() },
  methods: {
    slideAnimation() {
      let slideAnimationInitial = setInterval(() => {
        this.nextHandler()
      }, 6000);

      slideAnimationInitial

      if(this.animation) {
        clearInterval(slideAnimationInitial)
        let slideAnimationOptions = setInterval(() => {
          if(this.animation.direction == "prev") {
            this.prevHandler()
          } else {
            this.nextHandler()
          }
        }, this.animation.time);

        if(this.animation.disabled) {
          clearInterval(slideAnimationOptions)
        } else {
          slideAnimationOptions
        }
      }
    },
    prevHandler() {
      let slides = this.$slots.default

      for(let item of slides) {
        if(item.elm.classList.contains("actived")) {
          if(item.elm.previousElementSibling) {
            item.elm.classList.remove("actived")
            item.elm.previousElementSibling.classList.add("actived")
          } else {
            item.elm.classList.remove("actived")
            slides[slides.length - 1].elm.classList.add("actived")
          }
          break;
        }
      }
    },
    nextHandler() {
      let slides = this.$slots.default

      for(let item of slides) {
        if(item.elm.classList.contains("actived")) {
          if(item.elm.nextElementSibling) {
            item.elm.classList.remove("actived")
            item.elm.nextElementSibling.classList.add("actived")
            break;
          } else {
            item.elm.classList.remove("actived")
            slides[0].elm.classList.add("actived")
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.slide-content
  border-radius 15px
  box-sizing border-box
  color #000
  margin 0 auto
  max-height 100vh
  max-width 1000px
  min-height 300px
  overflow hidden
  position relative
  width calc(100% - 20px)

.slide-navigation
  .btn
    background #fff
    border 2px solid #000
    border-radius 100%
    box-shadow 0 0 0 2px rgba(#fff, .5), 0 0 10px 10px rgba(#000, .5)
    cursor pointer
    font-size 0
    font-weight bold
    height 60px
    outline none
    position absolute
    top 50%
    transform translateY(-50%)
    transition .3s all
    user-select none
    width 60px
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
      background #000
      border-radius 10px
      content ""
      display flex
      height 50%
      width 5px
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
