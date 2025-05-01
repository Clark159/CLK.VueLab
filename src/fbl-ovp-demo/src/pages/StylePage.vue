<script setup lang="ts">

// define
definePage({
    path: '/style',
    meta: {
        layout: 'DefaultLayout'
    }
})

// methods
function run() {
    alert('樣式管理')
}
</script><template>

    <!-- title -->
    <h3 class="text-2xl font-bold">樣式管理</h3>
    <hr /><br />

    <!-- run -->
    <button class="btn btn-red" @click="run">Run</button>
    <br /><br />
</template>


<style scoped>
@layer utilities {
    h3 {
        color: var(--color-error);
    }
}
</style>
