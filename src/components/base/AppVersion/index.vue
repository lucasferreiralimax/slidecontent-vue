
<script setup>
import pkg from '../../../../package.json';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const appVersion = pkg.version;
</script>

<template lang='pug'>
p.version {{ t('version') }} {{ appVersion }}
</template>
