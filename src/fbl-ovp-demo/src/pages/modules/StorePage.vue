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
import counterLocalStore from '@/stores/CounterLocalStore'
import counterSessionStore from '@/stores/CounterSessionStore'
import counterMemoryStore from '@/stores/CounterMemoryStore'

// methods
function localStoreIncrement() {

    // counter
    let counter = counterLocalStore.find()
    if(!counter) {
        // add
        counter = new Counter();
        counterLocalStore.add(counter);
    }
    else{
        // update
        counter.increment();
        counterLocalStore.update(counter)
    }    

    // display
    alert(`LocalStore Count：${counter?.value}`)
}

function sessionStoreIncrement() {

    // counter
    let counter = counterSessionStore.find()
    if(!counter) {
        // add
        counter = new Counter();
        counterSessionStore.add(counter);
    }
    else{
        // update
        counter.increment();
        counterSessionStore.update(counter)
    }    

    // display
    alert(`SessionStore Count：${counter?.value}`)
}

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
    alert(`MemoryStore Count：${counter?.value}`)
}
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">fbl-ovp-store</h3>
    <hr /><br />

    <!-- run -->
    <button class="btn btn-primary" @click="localStoreIncrement">LocalStore: Count++</button>
    <br /><br />
    <button class="btn btn-primary" @click="sessionStoreIncrement">SessionStore: Count++</button>
    <br /><br />
    <button class="btn btn-primary" @click="memoryStoreIncrement">MemoryStore: Count++</button>
    <br /><br />
    
</template>
