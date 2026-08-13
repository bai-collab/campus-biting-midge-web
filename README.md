# 校園小黑蚊 Web 學習單

五年級「校園小黑蚊：AI 融入問題探索課程」12 節 Web 學習單 Prototype。

## 目前版本

- Prototype v0.7
- 班級：五年甲班、五年乙班
- 組別：第 1～6 組
- 12 節學習單皆已建立
- 各節具 completion rules，不是按按鈕即可完成
- 第 6、9、11 節含 Human Gate
- 第 9 節 Human Gate 位於 AI 輸入前
- 第 11 節 Human Gate 位於本節最後確認
- 目前使用 `localStorage`，資料僅存在使用者目前瀏覽器

## 檔案

- `index.html`：入口與頁面骨架
- `styles.css`：介面樣式
- `app-core.js`：資料模型、第 1～2 節、驗證與主程式
- `lessons-3-6.js`：第 3～6 節
- `lessons-7-10.js`：第 7～10 節
- `lessons-11-12.js`：第 11～12 節與互動入口

## 注意

目前為公開測試 Prototype，不應輸入真實學生個資。正式版預計改用 Google Apps Script + Google Sheets 儲存。