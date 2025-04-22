安裝 Node.js
安裝 VSCode
安裝 VSCode: Vue-Official
安裝 VSCode: Tailwind CSS IntelliSense


執行 Command
cd C:\Users\clark\OneDrive\桌面\Lab
npm create vue@latest vue-001
cd vue-001
npm install
npm install unplugin-vue-router
npm install tailwindcss @tailwindcss/vite


修改 .vscode/settings.json
{
  "files.associations": {
    "*.css": "postcss"
  },
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "tsconfig.json": "tsconfig.*.json, env.d.ts",
    "vite.config.*": "jsconfig*, vitest.config.*, cypress.config.*, playwright.config.*",
    "package.json": "package-lock.json, pnpm*, .yarnrc*, yarn*, .eslint*, eslint*, .oxlint*, oxlint*, .prettier*, prettier*, .editorconfig"
  }
}

複製 .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "npm run dev",
      "type": "shell",
      "command": "npm run dev",
      "isBackground": true,
      "options": {
        "shell": {
          "executable": "cmd.exe",
          "args": ["/d", "/c"]
        }
      },
      "problemMatcher": {
        "base": "$tsc-watch",
        "background": {
          "activeOnStart": true,
          "beginsPattern": "vite v\\d+",
          "endsPattern": "ready in .*"
        }
      }
    }
  ]
}

複製 .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "npm run dev",
    "type": "pwa-chrome",
    "request": "launch",
    "url": "http://localhost:5173",
    "webRoot": "${workspaceFolder}",
    "preLaunchTask": "npm run dev"
  }]
}

修改 env.d.ts
/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

修改 vite.config.ts
import vueRouter from 'unplugin-vue-router/vite'
vueRouter({ dts: 'vite.routes.d.ts' })







Vue資料夾分類
├── layouts/       → 所有 Layout 元件
├── pages/         → 對應 route 的 Page 元件
├── views/         → Page 中的模組 View 區塊
├── blocks/        → 中階組合元件（由多個元素組成）
└── shared/        → 跨模組共用邏輯，如 composables、utils 等
   

title
name
path
layout
scrollToTop

