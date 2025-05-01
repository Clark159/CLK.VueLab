<script setup lang="ts">

// define
definePage({
    path: '/notFound',
    meta: {
        layout: 'DefaultLayout'
    }
})
</script>

<template>
    <div class="h-screen flex items-start justify-center">
        <div class="text-4xl font-bold text-error">Page Not Found</div>
    </div>
</template>