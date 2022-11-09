
<script setup>
import pkg from '../../../../package.json';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');
</script>

<template lang='pug'>
p.version
  | {{ t('version') }} Vue
  b {{ vueVersion }}
p.version
  | {{ t('version') }} SlideContent
  b {{ appVersion }}
</template>

<style lang='stylus'>
.version
  margin 0
  line-height 2rem
  b
    margin-left .5rem
</style>
