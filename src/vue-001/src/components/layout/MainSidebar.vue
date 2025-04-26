<template>
  <div class="min-h-screen bg-base-200">
    <div class="navbar bg-base-100 shadow-sm"></div>
    <ul class="menu w-72 p-4">
      <li>
        <details open>
          <summary>頁面範例</summary>
          <ul>
            <li><router-link to="/home">網站首頁</router-link></li>
            <li><router-link to="/about">關於我們</router-link></li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>模組範例</summary>
          <ul>
            <li><router-link to="/modules/fbl-ovp-configuration">fbl-ovp-configuration</router-link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>
