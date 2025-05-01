# Open Vue Platform 使用說明

## 1. 專案簡介

**Open Vue Platform** 是一套輕量化、可模組化擴充的前端開發架構，旨在提升開發效率並強化前後端協作體驗。

- **專案目標**：支援快速開發與前後端專業分工  
- **技術架構**：Vue 3 + Vite、Tailwind CSS 4、DaisyUI、TypeScript  
- **適用角色**：
  - 具備基本網頁技能的後端工程師
  - 熟悉 Vue 框架的前端工程師

## 2. 環境準備

在開始專案之前，請先完成以下環境安裝與工具設定：

- 安裝 [Node.js](https://nodejs.org/)（建議版本：Node ≥ 18，npm ≥ 10.0.0）
- 安裝 [Visual Studio Code](https://code.visualstudio.com/) 並加入以下擴充套件：
  - Vue - Official（Vue 官方擴充套件）
  - Tailwind CSS IntelliSense（Tailwind 自動補全與檢查）

## 3. 初始化專案

1. 建立 Git 倉庫或從既有專案 Clone 至本機
2. 複製以下資料與設定檔至你的專案目錄：
   - `src/` 資料夾
   - `vite.config.ts`
   - `tsconfig.json`
   - 其他必要設定（如 `.eslintrc.cjs`, `postcss.config.js`）
3. 根據實際專案需求調整命名與目錄結構
4. 初次提交並推送至遠端 Git 倉庫（如 GitHub）

## 4. 安裝與啟動

開啟終端機並執行以下指令：

\`\`\`bash
npm install       # 安裝所有依賴套件
npm run dev       # 啟動開發伺服器
\`\`\`

啟動成功後，瀏覽器會自動開啟預設畫面（通常為 http://localhost:5173）。

## 5. 專案結構確認

請使用 VSCode 開啟整個專案資料夾，確認以下內容無誤：

- `src/` 資料夾存在且內含 `pages/`、`layouts/`、`router/` 等子目錄
- 根目錄下各設定檔（如 `vite.config.ts`、`tsconfig.json`）無語法錯誤或警告

## 6. 建立測試頁面

建立一個測試頁面以驗證專案運作：

1. 在 `src/pages` 資料夾中新增檔案 `hello.vue`
2. 撰寫以下簡易內容：

\`\`\`vue
<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Hello Vue Platform!</h1>
    <button class="btn btn-primary mt-4">點我</button>
  </div>
</template>
\`\`\`

## 7. 設定選單與路由

為了讓頁面能透過選單導航進入，請執行以下設定：

1. 編輯 `app.config.ts` 或側欄元件中的選單陣列，新增一筆頁面資訊：

\`\`\`ts
{
  path: '/hello',
  name: 'Hello',
  icon: '🌟',
  component: () => import('@/pages/hello.vue'),
}
\`\`\`

2. 儲存後，透過側邊選單或路由直接進入 `/hello` 頁面

## 8. 頁面驗證與互動測試

啟動後，請確認以下條件是否符合：

- 頁面是否能正確載入且無錯誤訊息
- 按鈕是否能正確顯示並有基本互動效果
- 切換頁面時，選單是否同步高亮或正確導向

## 9. 常見問題與排除

| 問題情境           | 處理建議                             |
|--------------------|--------------------------------------|
| 畫面未即時更新     | 重啟 VSCode 或執行 `npm run dev`     |
| 頁面無法預覽       | 確認路由是否正確註冊，瀏覽器是否為 Chrome |
| Class 無樣式效果    | 檢查 Tailwind 是否正確安裝與設定     |
| 匯入模組報錯       | 確認 `tsconfig.json` 中 alias 是否正確 |

## 10. 後續建議

- 若測試頁面正常，即代表專案初始化成功
- 建議參考團隊《開發規範》進行命名與結構優化
- 可將此測試頁面提交 PR 作為初始化驗收紀錄
- 專案已具備模組化架構，鼓勵每位開發者依頁面 / 模組負責拆分與開發
