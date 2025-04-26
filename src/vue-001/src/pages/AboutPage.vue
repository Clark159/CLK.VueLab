<script setup lang="ts">

// define
definePage({
  path: '/about',
  meta: {
    layout: 'AdminLayout'
  }
})

// methods
function run() {
  alert('關於我們')
}
</script>

<template>

  <!-- title -->
  <h3 class="text-2xl font-bold">關於我們</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-primary" @click="run">Run</button>
  <br />
</template>
