<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template lang="pug">
section.page
  h1 {{ t("not_found") }}
</template>
