
<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template lang='pug'>
RouterLink.logo(to='/')
  h1 {{ t('title') }}
  img(alt='Vue logo' src='@/assets/logo.svg' width='80')
</template>

<style lang='stylus'>
.logo
  text-decoration none
  color #2c3e50
  h1
    font-size 3em
    +mobile()
      font-size 1.2em
</style>
