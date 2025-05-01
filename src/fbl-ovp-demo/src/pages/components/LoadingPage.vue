<script setup lang="ts">

// define
definePage({
    path: '/components/loading',
    meta: {
        layout: 'DefaultLayout'
    }
})
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">Modal</h3>
    <hr /><br />

    <!-- loading -->     
    <div class="flex space-x-4">
        <span class="loading loading-spinner loading-xs"></span>
        <span class="loading loading-spinner loading-sm"></span>
        <span class="loading loading-spinner loading-md"></span>
        <span class="loading loading-spinner loading-lg"></span>
        <span class="loading loading-spinner loading-xl"></span>
    </div>
    <br /><br />

    <div class="flex space-x-4">
        <span class="loading loading-spinner text-primary"></span>
        <span class="loading loading-spinner text-secondary"></span>
        <span class="loading loading-spinner text-accent"></span>
        <span class="loading loading-spinner text-neutral"></span>
        <span class="loading loading-spinner text-info"></span>
        <span class="loading loading-spinner text-success"></span>
        <span class="loading loading-spinner text-warning"></span>
        <span class="loading loading-spinner text-error"></span>
    </div>
    <br /><br />

    <div class="flex space-x-4">
        <span class="loading loading-dots loading-xs"></span>
        <span class="loading loading-dots loading-sm"></span>
        <span class="loading loading-dots loading-md"></span>
        <span class="loading loading-dots loading-lg"></span>
        <span class="loading loading-dots loading-xl"></span>
    </div>
    <br /><br />

    <div class="flex space-x-4">
        <span class="loading loading-dots text-primary"></span>
        <span class="loading loading-dots text-secondary"></span>
        <span class="loading loading-dots text-accent"></span>
        <span class="loading loading-dots text-neutral"></span>
        <span class="loading loading-dots text-info"></span>
        <span class="loading loading-dots text-success"></span>
        <span class="loading loading-dots text-warning"></span>
        <span class="loading loading-dots text-error"></span>
    </div>
    <br /><br />
</template>
