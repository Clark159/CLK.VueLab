<script setup lang="ts">

// import
import { ref } from 'vue'
import MainHeader from './MainHeader.vue'
import MainSidebar from './MainSidebar.vue'

// fields
const isSidebarOpen = ref<boolean>(true)

// methods
function toggleSidebar(): void {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
    <div class="flex h-screen">
        <MainSidebar v-if="isSidebarOpen" />
        <div class="flex-1 flex flex-col">
            <MainHeader title="Open Vue Platform" @toggle-sidebar="toggleSidebar" />
            <main class="flex-1 p-6 overflow-auto">
                <slot />
            </main>
        </div>
    </div>
</template>