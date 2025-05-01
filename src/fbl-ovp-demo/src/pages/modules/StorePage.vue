<script setup lang="ts">

// define
definePage({
    path: '/modules/fbl-ovp-store',
    meta: {
        layout: 'DefaultLayout'
    }
})

// import
import Counter from '@/stores/Counter'
import counterMemoryStore from '@/stores/CounterMemoryStore'

// methods
function memoryStoreIncrement() {

    // counter
    let counter = counterMemoryStore.find()
    if(!counter) {
        // add
        counter = new Counter();
        counterMemoryStore.add(counter);
    }
    else{
        // update
        counter.increment();
        counterMemoryStore.update(counter)
    }    

    // display
    alert(`目前 count：${counter?.value}`)
}
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">fbl-ovp-store</h3>
    <hr /><br />

    <!-- run -->
    <button class="btn btn-primary" @click="memoryStoreIncrement">MemoryStore: Count++</button>
    <br /><br />
</template>
