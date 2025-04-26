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

<script setup>
import { ref } from 'vue'
import MainHeader from '../shared/MainHeader.vue'
import MainSidebar from '../shared/MainSidebar.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style scoped>
header {
  background: lightgreen;
}
</style>