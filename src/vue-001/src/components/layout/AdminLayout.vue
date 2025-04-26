<script setup>
import { ref } from 'vue'
import MainHeader from './MainHeader.vue'
import MainSidebar from './MainSidebar.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen">    
    <MainSidebar v-if="isSidebarOpen" />
    <div class="flex-1 flex flex-col">
      <MainHeader @toggle-sidebar="toggleSidebar" />
      <main class="flex-1 p-6 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
header {
  background: lightgreen;
}
</style>