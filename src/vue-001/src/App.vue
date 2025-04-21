<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <RouterLink to="/home">Home</RouterLink><br/>
  <RouterLink to="/about">About</RouterLink><br/>
  <RouterView />
</template>