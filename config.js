// ============================================================
//  Delta Force Streamer Ladder S2 — OBS Overlay 設定檔 / Settings
//  改完存檔即可，overlay 會在下一次更新時自動套用（不用重開 OBS）
//  Save the file and the overlay applies it on the next refresh (no OBS restart needed)
//  文字要用 "雙引號"，每行最後的逗號不要刪 / Keep "double quotes" and trailing commas
//  ⚠ 這個檔案會被當成程式執行，請只用自己改的版本，不要用別人傳來的 config.js
//  ⚠ This file runs as code. Only edit it yourself; never use a config.js someone sends you
// ============================================================
window.OVERLAY_CONFIG = {

  // 顯示語言 / Display language
  //   "auto"  跟著電腦 / OBS 的語言 / follow the computer / OBS language
  //   "zh-TW" 繁體中文   "zh-CN" 简体中文   "en" English     "ja" 日本語
  //   "ko"    한국어     "vi"    Tiếng Việt  "th" ไทย         "id" Bahasa Indonesia
  //   "ms"    Bahasa Melayu "es" Español   "pt" Português   "fr" Français
  //   "de"    Deutsch    "ru"    Русский    "tr" Türkçe      "ar" العربية
  language: "zh-TW",

  // 要追蹤的實況主：暱稱（大小寫不拘）或玩家 ID
  // Streamer to track: nickname (case-insensitive) or player ID
  player: "",

  // 幾秒更新一次（最少 30，官方每分鐘更新一次）
  // Refresh interval in seconds (minimum 30; the ladder updates every minute)
  interval: 300,

  // 卡片在來源框裡的位置 / Card position in the source box: "left" | "center" | "right"
  align: "center",

  // 整體縮放，例如 1.3 = 放大 30% / Overall size, e.g. 1.3 = 30% larger
  scale: 1,

  // true = 半透明深色底，false = 完全透明 / true = dark translucent card, false = fully transparent
  background: true,

  // 顯示頭像 / Show avatar
  showAvatar: true,

  // 顯示擊殺 / 場次 / 帶出價值 / Show kills / matches / extracted value
  showStats: true,

  // 顯示和前後名的分數差距 / Show point gap to the players above and below
  showGaps: true,

  // 顯示地區排名（沒有地區資料時自動隱藏）/ Show regional rank (hidden if the streamer has no region)
  showRegion: true,

  // 前三名特效：金 / 銀 / 銅漸層名次 + 獎牌，第 1 名有光澤動畫
  // Top-3 effects: gold / silver / bronze rank, medal, and a shine on #1
  topEffects: true,

  // 標題（空的 = 依語言顯示官網的活動名稱）/ Title (empty = official event name for the language)
  title: "",

  // 自訂某幾個字的說法（不寫就用內建翻譯）/ Override individual labels (optional)
  //   例 / e.g.  text: { value: "出貨", kills: "人頭" },
  //   可改 / keys: rating, regionRank, above, below, first, kills, matches, value
  //   （{r} 會換成名次、{region} 會換成地區 / {r} = rank, {region} = region name）
  text: {},

};
