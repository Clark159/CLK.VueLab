<template>
  <div class="flex h-screen">
    <!-- 側邊選單 -->
    <aside
      v-if="isSidebarOpen"
      class="w-64 bg-base-100 shadow-md p-4"
    >
      <ul class="menu">
        <li>
          <router-link to="/home" class="font-semibold">🏠 首頁</router-link>
        </li>
        <li>
          <router-link to="/about">ℹ️ 關於</router-link>
        </li>
      </ul>
    </aside>

    <!-- 右側區域 -->
    <div class="flex-1 flex flex-col">
      <!-- 導覽列 -->
      <div class="navbar bg-base-100 shadow-md px-4">
        <div class="flex-none">
          <button class="btn btn-ghost btn-circle" @click="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div class="flex-1 px-4">
          <span class="text-xl font-bold">My Dashboard</span>
        </div>

        <!-- 登入人像 -->
        <div class="flex-none">
          <div class="avatar">
            <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.pravatar.cc/100?img=32" />
            </div>
          </div>
        </div>
      </div>

      <!-- slot 區域 -->
      <main class="flex-1 p-6 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>
