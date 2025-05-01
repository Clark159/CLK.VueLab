<script setup lang="ts">

// define
definePage({
    path: '/home',
    meta: {
        layout: 'DefaultLayout'
    }
})

// methods
function run() {
    alert('網站首頁')
}
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">網站首頁</h3>
    <hr /><br />

    <!-- run -->
    <button class="btn btn-primary" @click="run">Run</button>
    <br /><br />
</template>
