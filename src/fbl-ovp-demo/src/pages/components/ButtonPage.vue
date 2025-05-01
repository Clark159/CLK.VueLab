<script setup lang="ts">

// define
definePage({
    path: '/components/button',
    meta: {
        layout: 'DefaultLayout'
    }
})
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">Button</h3>
    <hr /><br />

    <!-- button -->
    <div class="flex space-x-2">
        <button class="btn btn-neutral">Neutral</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
    </div>
    <br /><br />

    <div class="flex space-x-2">
        <button class="btn btn-outline">Default</button>
        <button class="btn btn-outline btn-primary">Primary</button>
        <button class="btn btn-outline btn-secondary">Secondary</button>
        <button class="btn btn-outline btn-accent">Accent</button>
        <button class="btn btn-outline btn-info">Info</button>
        <button class="btn btn-outline btn-success">Success</button>
        <button class="btn btn-outline btn-warning">Warning</button>
        <button class="btn btn-outline btn-error">Error</button>
    </div>
    <br /><br />

    <div class="flex space-x-2">
        <a role="button" class="btn">Link</a>
        <button type="submit" class="btn">Button</button>
        <input type="button" value="Input" class="btn" />
        <input type="submit" value="Submit" class="btn" />
        <input type="radio" aria-label="Radio" class="btn" />
        <input type="checkbox" aria-label="Checkbox" class="btn" />
        <input type="reset" value="Reset" class="btn" />
    </div>
    <br /><br />
</template>
