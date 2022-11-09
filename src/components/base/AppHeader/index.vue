<script setup>
import AppLogo from '@/components/base/AppLogo/index.vue';
import AppNavigation from '@/components/base/AppNavigation/index.vue';
import AppLanguage from '@/components/base/AppLanguage/index.vue';
</script>

<template lang="pug">
header.header
  AppLanguage
  AppLogo
  AppNavigation
</template>
