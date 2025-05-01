<script setup lang="ts">

// define
definePage({
    path: '/modules/fbl-ovp-store',
    meta: {
        layout: 'DefaultLayout'
    }
})

// import
import defineStore from '@/modules/fbl/ovp-store'

// methods
function run() {

    // create
    const store = defineStore<Setting>('setting')
    
    // 嘗試找到 id 為 'default' 的設定
    let setting = store.find(o => true)
  if (!setting) {
    setting = {  count: 1 }
    store.add(setting)
  } else {
    const updatedSetting = { count: setting.count + 1 }
    store.update(updatedSetting, o => true)
    setting = updatedSetting
  }

  alert(`目前 count：${setting.count}`)
}

// class
interface Setting {
    count: number
}
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">fbl-ovp-store</h3>
    <hr /><br />

    <!-- run -->
    <button class="btn btn-primary" @click="run">Run</button>
    <br /><br />
</template>
