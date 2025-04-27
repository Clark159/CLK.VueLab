<script setup lang="ts">

// define
definePage({
  path: '/modules/fbl-ovp-network-http',
  meta: {
    layout: 'DefaultLayout'
  }
})

// import
import { ref } from 'vue'
import httpClient from '@/modules/fbl/ovp-network-http'

// fields
const result = ref<any>(null)

// methods
async function run() {
  try {
    const response = await httpClient.get('/users/1')
    result.value = response.data    
  } catch (error) {
    result.value = `發生錯誤：${error}`
  }
}

// class
interface Setting {
  baseUrl: string
}
</script>

<template>

  <!-- title -->
  <h3 class="text-2xl font-bold">fbl-ovp-network-http</h3>
  <hr /><br/>

  <!-- run -->
  <button class="btn btn-primary" @click="run">Run</button>
  <br /><br />
  <pre>{{ result }}</pre>
  <br /><br />
</template>
