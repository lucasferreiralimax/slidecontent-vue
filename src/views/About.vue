<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template lang="pug">
section.page(style="padding: 2rem;")
  p {{ t("about") }}
</template>
