<script setup lang="ts">

// define
definePage({
    path: '/layout',
    meta: {
        layout: 'BlankLayout'
    }
})

// methods
function run() {
    alert('排版設定')
}
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">排版設定</h3>
    <hr /><br />

    <!-- run -->
    <router-link class="btn btn-red" to="/home">回到首頁</router-link>
    <br /><br />
</template>

<style scoped>
@layer utilities {
    h3 {
        color: var(--color-error);
    }
}
</style>
