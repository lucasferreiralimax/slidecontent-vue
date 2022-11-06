<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const slideContainer = ref()
const props = defineProps({
  name: String,
  type: String,
  nav: Boolean,
  animation: Object,
  border: Boolean,
  squared: Boolean,
});

let slideAnimationInitial = null;
let slideAnimationOptions = null;

onMounted(() => {
  if(slideContainer.value.querySelectorAll('.slide-item')) {
    slideAnimation();
  }
});

onUnmounted(() => {
  clearInterval(slideAnimationInitial)
  clearInterval(slideAnimationOptions)
})

const slideAnimation = () => {
  slideAnimationInitial = setInterval(() => {
    nextHandler()
  }, 6000);

  slideAnimationInitial

  if(props.animation) {
    clearInterval(slideAnimationInitial)
    slideAnimationOptions = setInterval(() => {
      if(props.animation.direction == "prev") {
        prevHandler()
      } else {
        nextHandler()
      }
    }, props.animation.time);

    if(props.animation.disabled) {
      clearInterval(slideAnimationOptions)
    } else {
      slideAnimationOptions
    }
  }
};

function prevHandler () {
  let slides = slideContainer.value.querySelectorAll('.slide-item')

  for(let item of slides) {
    if(item.classList.contains("actived")) {
      if(item.previousElementSibling) {
        item.classList.remove("actived")
        item.previousElementSibling.classList.add("actived")
      } else {
        item.classList.remove("actived")
        slides[slides.length - 1].classList.add("actived")
      }
      break;
    }
  }
};

function nextHandler () {
  let slides = slideContainer.value.querySelectorAll('.slide-item')

  for(let item of slides) {
    if(item.classList.contains("actived")) {
      if(item.nextElementSibling) {
        item.classList.remove("actived")
        item.nextElementSibling.classList.add("actived")
        break;
      } else {
        item.classList.remove("actived")
        slides[0].classList.add("actived")
      }
    }
  }
};
</script>

<template lang="pug">
section.slide-content(ref="slideContainer" :class="[type, border ? 'border' : '', squared ? 'squared' : '']")
  div.slide-slots
    slot
  .slide-navigation(v-if="nav")
    button.btn.prev(type="button" name="button" @click="prevHandler")
      | {{ t("to_left") }}
    button.btn.next(type="button" name="button" @click="nextHandler")
      | {{ t("to_right") }}
</template>

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
  &.border
    box-shadow 0 0 0 2px #fff, 0 0 0 3px #222, 0 5px 20px rgba(0,0,0,.5)
  &.squared
    border-radius 0
    .slide-navigation .btn
      border-radius 0

.slide-navigation
  .btn
    background rgba(#fff, .3)
    border 1px solid rgba(#000, .3)
    border-radius 100%
    backdrop-filter blur(5px)
    box-shadow 0 0 1px 1px rgba(#fff, .5), 0 0 10px 2px rgba(#000, .2)
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
      background rgba(#000, .3)
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
    +mobile()
      height 30px
      width 30px
      &:before,
      &:after
        width 3px
        height 10px
  .prev
    left 10px
    &:active
      transform translateY(-50%) translateX(10px)
    &:before
      transform rotate(45deg) translate(17px, -10px)
    &:after
      transform rotate(-45deg) translate(18px, 10px)
    +mobile()
      &:active
        transform translateY(-50%) translateX(10px)
      &:before
        transform rotate(45deg) translate(5px, -3px)
      &:after
        transform rotate(-45deg) translate(6px, 2px)

  .next
    right 10px
    &:active
      transform translateY(-50%) translateX(-10px)
    &:before
      transform rotate(-45deg) translate(11px, 19px)
    &:after
      transform rotate(45deg) translate(11px, -19px)
    +mobile()
      &:active
        transform translateY(-50%) translateX(10px)
      &:before
        transform rotate(45deg) translate(11px, 1px)
      &:after
        transform rotate(-45deg) translate(10px, 0px)

</style>
