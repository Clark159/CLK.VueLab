<script setup lang="ts">

// import
import { useRoute } from 'vue-router'
import { ref, watchEffect, defineAsyncComponent } from 'vue'

// route
const route = useRoute()
const layoutComponent = ref()
watchEffect(() => {

  // layoutName
  let layoutName = route.meta.layout
  if(layoutName == '') layoutName = 'DefaultLayout'
  if(layoutName == null) layoutName = 'DefaultLayout'

  // layoutComponent
  layoutComponent.value = defineAsyncComponent(() =>
    import(`../layouts/${layoutName}.vue`)
  )
})
</script>

<template>
  <component :is="layoutComponent">
    <slot />
  </component>
</template>
