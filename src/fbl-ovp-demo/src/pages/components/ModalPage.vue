<script setup lang="ts">

// define
definePage({
    path: '/components/modal',
    meta: {
        layout: 'DefaultLayout'
    }
})
</script>

<template>

    <!-- title -->
    <h3 class="text-2xl font-bold">Modal</h3>
    <hr /><br />

    <!-- modal -->
    <button class="btn" onclick="my_modal_1.showModal()">Open Modal (右下關閉按鈕)</button>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
            <form method="dialog">
                <button class="btn">Close</button>
            </form>
            </div>
        </div>
    </dialog>
    <br /><br />

    <button class="btn" onclick="my_modal_2.showModal()">Open Modal (右上關閉按鈕)</button>
    <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
    </dialog>
    <br /><br />

    <button class="btn" onclick="my_modal_3.showModal()">Open Modal (沒有關閉按鈕)</button>
    <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
    <br /><br />
</template>
