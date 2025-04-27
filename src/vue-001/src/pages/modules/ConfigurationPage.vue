<script setup lang="ts">

// define
definePage({
  path: '/modules/fbl-ovp-configuration',
  meta: {
    layout: 'DefaultLayout'
  }
})

// import
import configuration from '@/modules/fbl/ovp-configuration'

// methods
function run() {

  // bind
  const setting = configuration.bind<Setting>('fbl.module01.setting')
  
  // display
  alert(setting.baseUrl)
}

// class
interface Setting {
  baseUrl: string
}
</script>

<template>

  <!-- title -->
  <h3 class="text-2xl font-bold">fbl-ovp-configuration</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-primary" @click="run">Run</button>
  <br /><br />
</template>
