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
  alert('About')
}
</script>

<template>

  <!-- title -->
  <h3>About</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-primary" @click="run">Run</button>
  <br />
</template>
