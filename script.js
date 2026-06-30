const FACEBOOK_POST_URL = "https://www.facebook.com/";

const questions = [
  { q: "你登上偉大航道前，第一件事會做什麼？", a: [
    ["luffy", "先喊出夢想，氣勢不能輸"], ["zoro", "先檢查武器與訓練狀態"], ["nami", "先看地圖、天氣和物資"], ["sanji", "先準備一頓能讓大家振作的料理"], ["usopp", "先確認逃生路線，這叫謹慎"], ["chopper", "先檢查大家有沒有暈船或受傷"] ] },
  { q: "夥伴遇到危機時，你最可能？", a: [
    ["luffy", "直接衝過去，邊跑邊喊他的名字"], ["zoro", "冷靜出手，事情交給我"], ["nami", "先判斷局勢，找出最有效的解法"], ["sanji", "優雅登場，順便說一句帥話"], ["usopp", "嘴上說完蛋了，但手已經開始想招"], ["chopper", "先救人，再把對方罵到知道錯"] ] },
  { q: "你的冒險風格比較像？", a: [
    ["luffy", "看到有趣的島就上岸"], ["zoro", "目標明確，不浪費時間"], ["nami", "先規劃路線，少走冤枉路"], ["sanji", "每一站都要吃得好、活得帥"], ["usopp", "帶著故事和道具，把冒險變傳說"], ["chopper", "希望每個人都平安，也都能變強"] ] },
  { q: "如果你是草帽海賊團成員，最想負責？", a: [
    ["luffy", "船長，因為我要成為最自由的人"], ["zoro", "戰鬥主力，擋在大家前面"], ["nami", "航海士，沒有我你們會迷路"], ["sanji", "廚師，餵飽大家也是戰力"], ["usopp", "狙擊手兼氣氛擔當"], ["chopper", "船醫，夥伴的健康我來守護"] ] },
  { q: "面對強敵，你的第一反應是？", a: [
    ["luffy", "好像很好玩，開打吧"], ["zoro", "看起來值得一戰"], ["nami", "先分析弱點，不要硬衝"], ["sanji", "不能讓重要的人受傷"], ["usopp", "我們是不是可以先談談，或假裝不在"], ["chopper", "大家退後，我先看誰需要治療"] ] },
  { q: "朋友最常怎麼形容你？", a: [
    ["luffy", "熱血到有點不可思議"], ["zoro", "安靜但很可靠"], ["nami", "聰明、現實，懂得掌控狀況"], ["sanji", "很會照顧人，也很有品味"], ["usopp", "很會講，腦洞也很多"], ["chopper", "很暖，被誇會害羞"] ] },
  { q: "你最受不了哪種狀況？", a: [
    ["luffy", "夥伴被欺負"], ["zoro", "自己不夠強"], ["nami", "計畫失控又沒人處理"], ["sanji", "浪費食物或不尊重人"], ["usopp", "大家叫我第一個衝"], ["chopper", "重要的人受傷卻逞強"] ] },
  { q: "抽到喬巴帽周邊商品時，你會？", a: [
    ["luffy", "戴上去大喊出航"], ["zoro", "看起來不錯，默默收好"], ["nami", "先拍照，再提醒大家留言參加"], ["sanji", "戴得很帥，拍一張最有氛圍的"], ["usopp", "說這是我偉大船員的證明"], ["chopper", "嘴上說才沒有開心，其實超開心"] ] }
];

const results = {
  luffy: { icon: "☀️", name: "魯夫型", title: "你是魯夫型船員", subtitle: "夢想比海還大，肚子也差不多。", keywords: ["熱血", "自由", "直覺", "夥伴優先"], description: "你是船上最像太陽的人。遇到困難不會先想退路，而是先問：「可以開打了嗎？」你相信夢想，也相信夥伴，只要是想守護的人，就算前方是偉大航道也照樣衝。", position: "你適合站在船頭，喊出大家不敢說出口的夢想。有你在，冒險就不只是目的地，而是一場讓人想跟上的旅程。", color: "#e02828" },
  zoro: { icon: "⚔️", name: "索隆型", title: "你是索隆型船員", subtitle: "路可以走錯，信念不能偏航。", keywords: ["專注", "可靠", "冷靜", "修練派"], description: "你不太愛說漂亮話，但答應的事一定做到。你習慣默默變強，也常常成為團隊最穩的後盾。缺點是偶爾會走錯路，不過沒關係，氣勢有到就好。", position: "你適合成為團隊裡最穩的戰力。話不用多，站出來的那一刻，大家就知道可以放心了。", color: "#2e9f5b" },
  nami: { icon: "🧭", name: "娜美型", title: "你是娜美型船員", subtitle: "偉大航道也要先看預算跟地圖。", keywords: ["聰明", "務實", "觀察力強", "掌控全局"], description: "你不是衝第一個的人，但你永遠知道大家該往哪裡走。你精準判斷風向，也懂得把混亂整理成計畫。沒有你，這艘船大概三天就會迷路兼破產。", position: "你適合掌握航線與節奏。當大家熱血過頭時，你就是那個把冒險拉回正軌的人。", color: "#f39c35" },
  sanji: { icon: "🔥", name: "香吉士型", title: "你是香吉士型船員", subtitle: "帥氣不是人設，是基本禮貌。", keywords: ["浪漫", "講究", "體貼", "帥氣救場"], description: "你是團隊裡最會照顧氣氛的人。外表可能瀟灑，內心其實很柔軟。你相信品味，也相信重要的人值得被好好對待。必要時，踢出去的不只是敵人，還有壞心情。", position: "你適合成為團隊裡的氣氛守護者。有你在，冒險不只熱血，還要有品味。", color: "#1f5fbf" },
  usopp: { icon: "🎯", name: "騙人布型", title: "你是騙人布型船員", subtitle: "怕歸怕，關鍵時刻還是超可靠。", keywords: ["想像力", "臨場反應", "嘴砲力", "關鍵救援"], description: "你可能會先緊張、先吐槽、先說事情不妙，但最後還是會站出來。你的腦袋永遠有奇招，嘴上說不要，身體卻很誠實地幫大家解危。你的想像力，就是團隊最意想不到的武器。", position: "你適合在大家以為沒辦法的時候，突然拿出一個超乎預期的解法。你的厲害，常常要到最後一刻才會被看見。", color: "#8a5a2b" },
  chopper: { icon: "💗", name: "喬巴型", title: "你是喬巴型船員", subtitle: "嘴上說才不開心，帽子已經開心到飛起來。", keywords: ["療癒", "善良", "認真", "守護夥伴"], description: "你是大家的補血站，也是船上最想保護別人的人。你在意夥伴的狀態，會默默記住每個人的需要。被稱讚時可能會嘴硬，但心裡早就開花。", position: "你適合成為大家最安心的存在。冒險路上有你在，就算受傷、跌倒或迷惘，也會有人願意好好接住。", color: "#e65aa0" }
};


const recommendedProducts = {
  luffy: {
    primary: {
      setNo: "75647",
      name: "橡膠果實",
      copy: "你的夢想不只是說說而已，是從吃下那顆果實的瞬間開始改變航線。這款樂高® 航海王盒組最適合夢想比海還大的你。",
      url: "https://www.lego.com/zh-tw/product/gum-gum-fruit-75647"
    },
    secondary: {
      setNo: "75642",
      name: "決戰斯摩格上校",
      copy: "想把冒險推進到熱血對決，就從羅格鎮開始。",
      url: "https://www.lego.com/zh-tw/product/showdown-with-captain-smoker-75642"
    }
  },
  zoro: {
    primary: {
      setNo: "75644",
      name: "多利 vs. 布洛基－小花園的巨人",
      copy: "你適合硬派對決與正面迎戰。這款樂高® 航海王盒組把巨人之戰的氣勢帶上桌，最適合信念不能偏航的你。",
      url: "https://www.lego.com/zh-tw/product/dorry-vs-brogy-giants-of-little-garden-75644"
    },
    secondary: {
      setNo: "75646",
      name: "卡普的海軍戰艦",
      copy: "想挑戰更大的戰場，就登上海軍戰艦迎接下一場修練。",
      url: "https://www.lego.com/zh-tw/product/garps-marine-battleship-75646"
    }
  },
  nami: {
    primary: {
      setNo: "75646",
      name: "卡普的海軍戰艦",
      copy: "你最懂掌握航線與全局判斷。這款樂高® 航海王盒組有大型戰艦感，適合把冒險節奏牢牢握在手中的你。",
      url: "https://www.lego.com/zh-tw/product/garps-marine-battleship-75646"
    },
    secondary: {
      setNo: "75645",
      name: "磁鼓城之戰",
      copy: "想讓冒險更有劇情張力，就把航線開往雪中的磁鼓城。",
      url: "https://www.lego.com/zh-tw/product/battle-at-drum-castle-75645"
    }
  },
  sanji: {
    primary: {
      setNo: "75642",
      name: "決戰斯摩格上校",
      copy: "你適合帥氣登場，也適合在關鍵時刻救場。這款樂高® 航海王盒組把羅格鎮的對決氣氛帶出來，剛好配上你的帥氣冒險人格。",
      url: "https://www.lego.com/zh-tw/product/showdown-with-captain-smoker-75642"
    },
    secondary: {
      setNo: "75645",
      name: "磁鼓城之戰",
      copy: "想收藏更有故事感的大場面，磁鼓城就是你的下一站。",
      url: "https://www.lego.com/zh-tw/product/battle-at-drum-castle-75645"
    }
  },
  usopp: {
    primary: {
      setNo: "75644",
      name: "多利 vs. 布洛基－小花園的巨人",
      copy: "你的想像力與臨場反應，最適合充滿變數的巨人戰場。這款樂高® 航海王盒組讓每一次對決都像你的奇招一樣出乎意料。",
      url: "https://www.lego.com/zh-tw/product/dorry-vs-brogy-giants-of-little-garden-75644"
    },
    secondary: {
      setNo: "75646",
      name: "卡普的海軍戰艦",
      copy: "想把奇招搬到更大的舞台，就登上戰艦準備下一回合。",
      url: "https://www.lego.com/zh-tw/product/garps-marine-battleship-75646"
    }
  },
  chopper: {
    primary: {
      setNo: "75643",
      name: "多尼多尼喬巴",
      copy: "你的療癒力就是全船最安心的存在。這款樂高® 航海王盒組把喬巴放在主角位置，最適合被誇就害羞的喬巴型船員。",
      url: "https://www.lego.com/zh-tw/product/tony-tony-chopper-75643"
    },
    secondary: {
      setNo: "75641",
      name: "Dr. 西爾爾克的藏身處",
      copy: "想收藏喬巴故事的起點，就走進那座雪山裡的溫暖藏身處。",
      url: "https://www.lego.com/zh-tw/product/dr-hiriluks-hideout-75641"
    }
  }
};

let step = 0;
let answers = Array(questions.length).fill(null);
let shuffledQuestionAnswers = createShuffledQuestionAnswers();
let currentResultKey = null;

function shuffleArray(items) {
  const cloned = items.map(item => [...item]);
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[randomIndex]] = [cloned[randomIndex], cloned[i]];
  }
  return cloned;
}

function createShuffledQuestionAnswers() {
  return questions.map(question => shuffleArray(question.a));
}

const $ = (selector) => document.querySelector(selector);
const screens = { home: $("#screen-home"), rules: $("#screen-rules"), quiz: $("#screen-quiz"), result: $("#screen-result") };

function show(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => {
  const dest = btn.dataset.go;
  if (dest === "quiz") { step = 0; answers = Array(questions.length).fill(null); shuffledQuestionAnswers = createShuffledQuestionAnswers(); renderQuestion(); }
  show(dest);
}));

function renderQuestion() {
  const question = questions[step];
  const answerOptions = shuffledQuestionAnswers[step];
  $("#question-count").textContent = `第 ${step + 1} 題 / 共 8 題`;
  $("#question-kicker").textContent = `Question ${String(step + 1).padStart(2, "0")}`;
  $("#question-title").textContent = question.q;
  $("#progress-fill").style.width = `${((step + 1) / questions.length) * 100}%`;
  $("#next-btn").textContent = step === questions.length - 1 ? "查看我的船員人格" : "下一題";
  $("#back-btn").style.visibility = step === 0 ? "hidden" : "visible";
  $("#error-text").textContent = "";
  const letters = ["A", "B", "C", "D", "E", "F"];
  $("#answers").innerHTML = answerOptions.map((item, index) => {
    const selected = answers[step] === item[0] ? " selected" : "";
    return `<button class="answer-btn${selected}" data-type="${item[0]}" type="button"><span class="letter">${letters[index]}</span><span>${item[1]}</span></button>`;
  }).join("");
  document.querySelectorAll(".answer-btn").forEach(btn => btn.addEventListener("click", () => {
    answers[step] = btn.dataset.type;
    document.querySelectorAll(".answer-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    $("#error-text").textContent = "";
  }));
}

$("#back-btn").addEventListener("click", () => {
  if (step > 0) { step -= 1; renderQuestion(); }
});

$("#next-btn").addEventListener("click", () => {
  if (!answers[step]) { $("#error-text").textContent = "請先選擇一個答案，再繼續出航！"; return; }
  if (step < questions.length - 1) { step += 1; renderQuestion(); return; }
  showResult();
});

function getResultKey() {
  const score = { luffy: 0, zoro: 0, nami: 0, sanji: 0, usopp: 0, chopper: 0 };
  answers.forEach(key => { if (key) score[key] += 1; });
  const max = Math.max(...Object.values(score));
  const winners = Object.keys(score).filter(key => score[key] === max);
  if (winners.length === 1) return winners[0];
  const lastAnswer = answers[answers.length - 1];
  return winners.includes(lastAnswer) ? lastAnswer : winners[0];
}


function renderRecommendedProducts(resultKey) {
  const data = recommendedProducts[resultKey];
  if (!data) return;
  const cards = [
    ["primary-product", "主推盒組", data.primary],
    ["secondary-product", "延伸推薦", data.secondary]
  ];
  $("#product-grid").innerHTML = cards.map(([className, label, item]) => `
    <article class="product-card ${className}">
      <div class="product-no">${item.setNo}</div>
      <div>
        <span class="product-label">${label}</span>
        <h4 class="product-name">${item.name}</h4>
        <p class="product-copy">${item.copy}</p>
        <p class="product-url">${item.url}</p>
      </div>
    </article>
  `).join("");
}

function showResult() {
  currentResultKey = getResultKey();
  const data = results[currentResultKey];
  $("#result-avatar").textContent = data.icon;
  $("#result-avatar").style.background = data.color;
  $("#result-title").textContent = data.title;
  $("#result-subtitle").textContent = data.subtitle;
  $("#result-keywords").innerHTML = data.keywords.map(k => `<span>${k}</span>`).join("");
  $("#result-description").textContent = data.description;
  $("#result-position").textContent = data.position;
  renderRecommendedProducts(currentResultKey);
  show("result");
}

$("#facebook-btn").addEventListener("click", () => {
  alert("即將前往臉書活動貼文，請留言上傳你的結果截圖參加抽獎。");
  window.open(FACEBOOK_POST_URL, "_blank", "noopener,noreferrer");
});

$("#download-btn").addEventListener("click", downloadResultImage);

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 8) {
  let line = "";
  let lines = [];
  for (const char of text) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + Math.min(lines.length, maxLines) * lineHeight;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function downloadResultImage() {
  const data = results[currentResultKey || "chopper"];
  const productData = recommendedProducts[currentResultKey || "chopper"];
  const canvas = $("#download-canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
  gradient.addColorStop(0, "#0b4f83");
  gradient.addColorStop(.52, "#77c8e8");
  gradient.addColorStop(1, "#ffe1a6");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.ellipse(120 + i * 145, 1630 + (i % 2) * 52, 128, 30, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const cardX = 90;
  const cardY = 92;
  const cardW = 900;
  const cardH = 1680;
  roundRect(ctx, cardX, cardY, cardW, cardH, 46);
  ctx.fillStyle = "#fff8e6";
  ctx.fill();
  ctx.strokeStyle = "rgba(138,90,43,.35)";
  ctx.lineWidth = 8;
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";

  try {
    const logo = await loadImage("./lego-logo.jpg");
    ctx.drawImage(logo, 132, 128, 108, 108);
  } catch (error) {
    ctx.fillStyle = "#e02828";
    ctx.fillRect(132, 128, 108, 108);
    ctx.fillStyle = "#fff";
    ctx.font = "900 24px sans-serif";
    ctx.fillText("LEGO®", 146, 190);
  }

  ctx.fillStyle = "#e02828";
  ctx.font = "900 34px sans-serif";
  ctx.fillText("我的草帽船員人格是", 132, 292);

  ctx.fillStyle = data.color;
  ctx.beginPath();
  ctx.arc(540, 420, 92, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = "72px sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "#fff";
  ctx.fillText(data.icon, 540, 446);

  ctx.fillStyle = "#0b2545";
  ctx.font = "900 72px sans-serif";
  ctx.fillText(data.name, 540, 588);

  ctx.textAlign = "left";
  ctx.fillStyle = "#1267b1";
  ctx.font = "900 36px sans-serif";
  let y = wrapText(ctx, data.subtitle, 150, 668, 780, 48, 2);

  ctx.fillStyle = "#2f2a24";
  ctx.font = "700 30px sans-serif";
  y = wrapText(ctx, data.description, 150, y + 36, 780, 46, 5);

  y += 36;
  ctx.fillStyle = "#0b2545";
  ctx.font = "900 27px sans-serif";
  wrapText(ctx, data.keywords.join("  ・  "), 150, y, 780, 38, 2);

  y += 78;
  roundRect(ctx, 150, y, 780, 330, 26);
  ctx.fillStyle = "#fffdf6";
  ctx.fill();
  ctx.strokeStyle = "rgba(224,40,40,.32)";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#e02828";
  ctx.font = "900 28px sans-serif";
  ctx.fillText("小樂推薦你的冒險盒組", 186, y + 46);

  ctx.fillStyle = "#0b2545";
  ctx.font = "900 38px sans-serif";
  const primaryNameY = wrapText(ctx, `${productData.primary.setNo} ${productData.primary.name}`, 186, y + 98, 700, 46, 2);

  ctx.fillStyle = "#352d24";
  ctx.font = "700 24px sans-serif";
  wrapText(ctx, productData.primary.copy, 186, primaryNameY + 22, 700, 36, 4);

  ctx.fillStyle = "#0b2545";
  ctx.font = "900 24px sans-serif";
  ctx.fillText(`延伸推薦：${productData.secondary.setNo} ${productData.secondary.name}`, 186, y + 286);

  y += 370;
  roundRect(ctx, 150, y, 780, 158, 28);
  ctx.fillStyle = "#0b2545";
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "900 30px sans-serif";
  ctx.fillText("完成樂高® 航海王人格測驗", 188, y + 54);
  ctx.fillText("截圖回貼臉書活動貼文", 188, y + 96);
  ctx.fillText("抽喬巴帽周邊商品", 188, y + 138);

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(11,37,69,.68)";
  ctx.font = "900 26px sans-serif";
  ctx.fillText("樂高® 航海王人格測驗", 540, cardY + cardH - 38);

  const link = document.createElement("a");
  link.download = `樂高航海王人格測驗_${data.name}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  alert("結果圖已下載，記得回到臉書活動貼文留言上傳！");
}

renderQuestion();
