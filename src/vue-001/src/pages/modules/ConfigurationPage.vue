<script setup lang="ts">

// define
definePage({
  path: '/modules/fbl-ovp-configuration',
  meta: {
    layout: 'DefaultLayout'
  }
})

// imports
import configuration from '@/modules/fbl/ovp-configuration'

// types
interface Setting {
  baseUrl: string
}

// methods
async function run() {

  // bind
  const setting = await configuration.bind<Setting>('fbl.module01.setting')
  
  // display
  alert(setting.baseUrl)
}
</script>

<template>

  <!-- title -->
  <h3 class="text-2xl font-bold">fbl-ovp-configuration</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-primary" @click="run">Run</button>
  <br />
</template>
