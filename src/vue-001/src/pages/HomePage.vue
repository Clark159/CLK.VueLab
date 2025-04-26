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
  alert('Home')
}
</script>

<template>

  <!-- title -->
  <h3>Home</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-red" @click="run">Run</button>
  <br />
</template>
