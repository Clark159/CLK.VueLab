<script setup lang="ts">

// import
import { useRoute } from 'vue-router'
import { shallowRef, watchEffect, defineAsyncComponent } from 'vue'

// route
const route = useRoute()
const layoutComponent = shallowRef()

watchEffect(() => {

    // layoutName
    let layoutName = route.meta.layout
    if (layoutName === '' || layoutName == null) layoutName = 'DefaultLayout'

    // layoutComponent
    layoutComponent.value = defineAsyncComponent(() =>
        import(`@/components/layout/${layoutName}.vue`)
    )
})
</script>

<template>
    <component :is="layoutComponent">
        <slot />
    </component>
</template>
