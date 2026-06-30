# 樂高® 航海王人格測驗 prototype

這是一個純前端互動網站，可直接部署到 Vercel、Netlify 或 Cloudflare Pages。

## 檔案

- `index.html`：網站結構
- `styles.css`：頁面視覺設計
- `script.js`：測驗邏輯、結果判定、下載結果圖
- `lego-logo.jpg`：LEGO® logo 圖檔

## 功能

- 首頁
- 活動規則頁
- 8 題人格測驗
- 每題選項隨機排序
- 6 種角色結果
- 結果頁直接顯示推薦盒組
- 下載 1080 × 1920 結果圖
- 回臉書貼文參加抽獎按鈕

## 修改臉書貼文網址

打開 `script.js`，修改第一行：

```js
const FACEBOOK_POST_URL = "https://www.facebook.com/";
```

替換成正式臉書活動貼文網址即可。
