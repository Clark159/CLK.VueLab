<template>
    <div class="min-h-screen bg-base-200">
        <div class="navbar bg-base-100 shadow-sm"></div>
        <ul class="menu w-72 p-4">
            <li>
                <details open>
                    <summary>框架範例</summary>
                    <ul>
                        <li><router-link to="/home">網站首頁</router-link></li>
                        <li><router-link to="/style">樣式管理</router-link></li>
                        <li><router-link to="/router">路由管理</router-link></li>
                        <li><router-link to="/service">邏輯管理</router-link></li>
                        <li><router-link to="/layout">排版管理</router-link></li>
                    </ul>
                </details>
            </li>
            <li>
                <details open>
                    <summary>元件範例</summary>
                    <ul>
                        <li><router-link to="/components/font">Font</router-link></li>
                        <li><router-link to="/components/button">Button</router-link></li>
                        <li><router-link to="/components/modal">Modal</router-link></li>
                        <li><router-link to="/components/loading">Loading</router-link></li>
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
