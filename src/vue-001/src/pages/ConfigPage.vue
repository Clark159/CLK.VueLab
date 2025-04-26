<script setup lang="ts">

// define
definePage({
  path: '/config',
  meta: {
    layout: 'DefaultLayout'
  }
})

// imports
import { configuration } from '@/modules/fbl/ovp-configuration'

// types
interface Setting {
  baseUrl: string
}

// methods
async function run() {

  // bind
  const setting = await configuration.bind<Setting>('settings')
  
  // display
  alert(`Base URL: ${setting.baseUrl}`)
}
</script>

<template>

  <!-- title -->
  <h3>Config</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-red" @click="run">Run</button>
  <br />
</template>
