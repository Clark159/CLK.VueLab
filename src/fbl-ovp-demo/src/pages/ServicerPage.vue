<script setup lang="ts">

// define
definePage({
    path: '/service',
    meta: {
        layout: 'DefaultLayout'
    }
})

// import
import numberService from '@/services/NumberService'

// methods
function sum(a: number, b: number): number {

    // return
    return a + b
}

function callFunction() {

    // function
    const result = sum(1, 2);

    // display
    alert(`Call Function: ${result}`)
}

function callService() {

    // service
    const result = numberService.multiply(3, 4);

    // display
    alert(`Call Service: ${result}`)
}
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">邏輯管理</h3>
    <hr /><br />

    <!-- run -->
    <button class="btn btn-primary" @click="callFunction">頁面方法</button>
    <br /><br />
    <button class="btn btn-primary" @click="callService">共用服務</button>
    <br /><br />
</template>
