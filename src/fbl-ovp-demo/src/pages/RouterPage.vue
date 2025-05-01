<script setup lang="ts">

// define
definePage({
    path: '/router',
    meta: {
        layout: 'DefaultLayout'
    }
})
</script><template>

    <!-- title -->
    <h3 class="text-2xl font-bold">路由管理</h3>
    <hr /><br />

    <!-- run -->
    <router-link class="btn btn-primary" to="/">回到首頁</router-link>
    <br /><br />
    <router-link class="btn btn-primary" to="/dfdfdcx">找不到頁面</router-link>
    <br /><br />
</template>