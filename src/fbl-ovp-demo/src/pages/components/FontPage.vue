<script setup lang="ts">

// define
definePage({
    path: '/components/font',
    meta: {
        layout: 'DefaultLayout'
    }
})
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">Font</h3>
    <hr /><br />

    <!-- font -->
    <p class="text-sm">The quick brown fox jumps over the dog.</p>
    <p class="text-base">The quick brown fox jumps over the dog.</p>
    <p class="text-lg">The quick brown fox jumps over the dog.</p>
    <p class="text-xl">The quick brown fox jumps over the dog.</p>
    <p class="text-2xl">The quick brown fox jumps over the dog.</p>
    <br /><br />

    <p class="font-light">The quick brown fox jumps over the dog.</p>
    <p class="font-normal">The quick brown fox jumps over the dog.</p>
    <p class="font-medium">The quick brown fox jumps over the dog.</p>
    <p class="font-semibold">The quick brown fox jumps over the dog.</p>
    <p class="font-bold">The quick brown fox jumps over the dog.</p>
    <br /><br />    
</template>
