<template>
    <div class="min-h-screen bg-base-200">
        <div class="navbar bg-base-100 shadow-sm"></div>
        <ul class="menu w-72 p-4">
            <li>
                <details open>
                    <summary>框架範例</summary>
                    <ul>
                        <li><router-link to="/home">網站首頁</router-link></li>
                        <li><router-link to="/style">樣式設定</router-link></li>
                        <li><router-link to="/router">路由設定</router-link></li>
                        <li><router-link to="/layout">排版設定</router-link></li>
                    </ul>
                </details>
            </li>
            <li>
                <details open>
                    <summary>模組範例</summary>
                    <ul>
                        <li><router-link to="/modules/fbl-ovp-configuration">fbl-ovp-configuration</router-link></li>
                        <li><router-link to="/modules/fbl-ovp-network-http">fbl-ovp-network-http</router-link></li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</template>
