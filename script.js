const FACEBOOK_POST_URL = "https://www.facebook.com/";

const questions = [
  { q:"你登上偉大航道前，第一件事會做什麼？", a:[["luffy","先喊出夢想，氣勢不能輸"],["zoro","先檢查武器與訓練狀態"],["nami","先看地圖、天氣和物資"],["sanji","先準備一頓能讓大家振作的料理"],["usopp","先確認逃生路線，這叫謹慎"],["chopper","先檢查大家有沒有暈船或受傷"]]},
  { q:"夥伴遇到危機時，你最可能？", a:[["luffy","直接衝過去，邊跑邊喊他的名字"],["zoro","冷靜出手，事情交給我"],["nami","先判斷局勢，找出最有效的解法"],["sanji","優雅登場，順便說一句帥話"],["usopp","嘴上說完蛋了，但手已經開始想招"],["chopper","先救人，再把對方罵到知道錯"]]},
  { q:"你的冒險風格比較像？", a:[["luffy","看到有趣的島就上岸"],["zoro","目標明確，不浪費時間"],["nami","先規劃路線，少走冤枉路"],["sanji","每一站都要吃得好、活得帥"],["usopp","帶著故事和道具，把冒險變傳說"],["chopper","希望每個人都平安，也都能變強"]]},
  { q:"如果你是草帽海賊團成員，最想擔任什麼職務？", a:[["luffy","船長，因為我要成為最自由的人"],["zoro","戰鬥主力，擋在大家前面"],["nami","航海士，沒有我你們會迷路"],["sanji","廚師，餵飽大家也是戰力"],["usopp","狙擊手兼氣氛擔當"],["chopper","船醫，夥伴的健康我來守護"]]},
  { q:"面對強敵，你的第一反應是？", a:[["luffy","好像很好玩，開打吧"],["zoro","看起來值得一戰"],["nami","先分析弱點，不要硬衝"],["sanji","不能讓重要的人受傷"],["usopp","我們是不是可以先談談，或假裝不在"],["chopper","大家退後，我先看誰需要治療"]]},
  { q:"朋友最常怎麼形容你？", a:[["luffy","熱血到有點不可思議"],["zoro","安靜但很可靠"],["nami","聰明、現實，懂得掌控狀況"],["sanji","很會照顧人，也很有品味"],["usopp","很會講，腦洞也很多"],["chopper","很暖，被誇會害羞"]]},
  { q:"你最受不了哪種狀況？", a:[["luffy","夥伴被欺負"],["zoro","自己不夠強"],["nami","計畫失控又沒人處理"],["sanji","浪費食物或不尊重人"],["usopp","大家叫我第一個衝"],["chopper","重要的人受傷卻逞強"]]},
  { q:"抽到樂高®喬巴帽周邊商品時，你會？", a:[["luffy","戴上去大喊出航"],["zoro","看起來不錯，默默收好"],["nami","先拍照，再提醒大家留言參加"],["sanji","戴得很帥，拍一張最有氛圍的"],["usopp","說這是我偉大船員的證明"],["chopper","嘴上說才沒有開心，其實超開心"]]}
];
const results={
  luffy:{icon:"🍖",title:"魯夫型",subtitle:"夢想比海還大，肚子也差不多",keywords:["熱血","自由","直覺","夥伴優先"],description:"你是船上最像太陽的人。遇到困難不會先想退路，而是先問：可以開打了嗎？你相信夢想，也相信夥伴，只要是想守護的人，就算前方是偉大航道也照樣衝。",position:"你適合站在船頭，喊出大家不敢說出口的夢想。有你在，冒險就不只是目的地，而是一場讓人想跟上的旅程。",products:[["主推盒組","75647 橡膠果實","你的夢想不只是說說而已，是從吃下那顆果實的瞬間開始改變航線。"],["延伸推薦","75642 決戰斯摩格上校","想把冒險推進到熱血對決，就從羅格鎮開始。"]]},
  zoro:{icon:"⚔️",title:"索隆型",subtitle:"路可以走錯，信念不能偏航",keywords:["專注","可靠","冷靜","修練派"],description:"你不太愛說漂亮話，但答應的事一定做到。你習慣默默變強，也常常成為團隊最穩的後盾。缺點是偶爾會走錯路，不過沒關係，氣勢有到就好。",position:"你適合成為團隊裡最穩的戰力。話不用多，站出來的那一刻，大家就知道可以放心了。",products:[["主推盒組","75644 多利 vs. 布洛基－小花園的巨人","硬派對決與巨大戰場，最適合專注戰鬥與修練的你。"],["延伸推薦","75646 卡普的海軍戰艦","想把戰鬥格局拉到海上，就登上更大的戰場。"]]},
  nami:{icon:"🧭",title:"娜美型",subtitle:"偉大航道也要先看預算跟地圖",keywords:["聰明","務實","觀察力強","掌控全局"],description:"你不是衝第一個的人，但你永遠知道大家該往哪裡走。你精準判斷風向，也懂得把混亂整理成計畫。沒有你，這艘船大概三天就會迷路兼破產。",position:"你適合掌握航線與節奏。當大家熱血過頭時，你就是那個把冒險拉回正軌的人。",products:[["主推盒組","75646 卡普的海軍戰艦","大船、航線與全局判斷，最適合懂得掌握方向的你。"],["延伸推薦","75645 磁鼓城之戰","想挑戰更高難度的戰場，就把策略帶進雪山。"]]},
  sanji:{icon:"🔥",title:"香吉士型",subtitle:"帥氣不是人設，是基本禮貌",keywords:["浪漫","講究","體貼","帥氣救場"],description:"你是團隊裡最會照顧氣氛的人。外表可能瀟灑，內心其實很柔軟。你相信品味，也相信重要的人值得被好好對待。必要時，踢出去的不只是敵人，還有壞心情。",position:"你適合成為團隊裡的氣氛守護者。有你在，冒險不只熱血，還要有品味。",products:[["主推盒組","75642 決戰斯摩格上校","帥氣救場與正面對決，最適合講究登場時機的你。"],["延伸推薦","75645 磁鼓城之戰","想讓守護夥伴的氣勢升級，就前進磁鼓城。"]]},
  usopp:{icon:"🎯",title:"騙人布型",subtitle:"怕歸怕，關鍵時刻還是超可靠",keywords:["想像力","臨場反應","嘴砲力","關鍵救援"],description:"你可能會先緊張、先吐槽、先說事情不妙，但最後還是會站出來。你的腦袋永遠有奇招，嘴上說不要，身體卻很誠實地幫大家解危。",position:"你適合在大家以為沒辦法的時候，突然拿出一個超乎預期的解法。你的厲害，常常要到最後一刻才會被看見。",products:[["主推盒組","75644 多利 vs. 布洛基－小花園的巨人","巨人戰場加上奇招變化，最適合腦洞很多的你。"],["延伸推薦","75646 卡普的海軍戰艦","想把想像力搬到大船上，就從這艘戰艦開始。"]]},
  chopper:{icon:"💙",title:"喬巴型",subtitle:"嘴上說才不開心，帽子已經開心到飛起來",keywords:["療癒","善良","認真","守護夥伴"],description:"你是大家的補血站，也是船上最想保護別人的人。你在意夥伴的狀態，會默默記住每個人的需要。被稱讚時可能會嘴硬，但心裡早就開花。",position:"你適合成為大家最安心的存在。冒險路上有你在，就算受傷、跌倒或迷惘，也會有人願意好好接住。",products:[["主推盒組","75643 多尼多尼喬巴","最適合療癒又認真的你，把喬巴的可愛與守護力一起收藏。"],["延伸推薦","75641 Dr. 西爾爾克的藏身處","想收藏喬巴故事的起點，就走進那座雪山裡的溫暖藏身處。"]]}
};

const RESULT_ART = {
  luffy: './img/result-luffy-card.png',
  usopp: './img/result-usopp-card.png',
  nami: './img/result-nami-card.png',
  chopper: './img/result-chopper-card.png',
  sanji: './img/result-sanji-card.png',
  zoro: './img/result-zoro-card.png'
};

const RESULT_ART_IMAGES = {};
Object.entries(RESULT_ART).forEach(([key, src]) => {
  const img = new Image();
  img.src = src;
  RESULT_ART_IMAGES[key] = img;
});

const DOWNLOAD_RESULT_FILES = {
  luffy: { src: './img/result-luffy-final.jpg', filename: '樂高航海王人格測驗_魯夫型.jpg' },
  zoro: { src: './img/result-zoro-final.jpg', filename: '樂高航海王人格測驗_索隆型.jpg' },
  nami: { src: './img/result-nami-final.jpg', filename: '樂高航海王人格測驗_娜美型.jpg' },
  sanji: { src: './img/result-sanji-final.jpg', filename: '樂高航海王人格測驗_香吉士型.jpg' },
  usopp: { src: './img/result-usopp-final.jpg', filename: '樂高航海王人格測驗_騙人布型.jpg' },
  chopper: { src: './img/result-chopper-final.jpg', filename: '樂高航海王人格測驗_喬巴型.jpg' }
};

let current=0, answers=[], order=[];
const $=sel=>document.querySelector(sel);
const screens={home:$('#screen-home'),rules:$('#screen-rules'),quiz:$('#screen-quiz'),result:$('#screen-result')};
function show(name){Object.values(screens).forEach(s=>s.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0);if(name==='quiz')renderQuestion()}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function startQuiz(){current=0;answers=[];order=questions.map(q=>shuffle(q.a));show('quiz')}
function renderQuestion(){const q=questions[current];$('#question-count').textContent=`第 ${current+1} 題 / 共 8 題`;$('#question-kicker').textContent=`Question ${String(current+1).padStart(2,'0')}`;$('#question-title').textContent=q.q;$('#progress-fill').style.width=`${((current+1)/questions.length)*100}%`;$('#error-text').textContent='';const ans=$('#answers');ans.innerHTML='';order[current].forEach((item,i)=>{const b=document.createElement('button');b.className='answer-btn'+(answers[current]===item[0]?' selected':'');b.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${item[1]}</span>`;b.onclick=()=>{answers[current]=item[0];renderQuestion()};ans.appendChild(b)});$('#back-btn').style.visibility=current===0?'hidden':'visible';$('#next-btn').textContent=current===questions.length-1?'查看我的船員人格':'下一題'}
function computeResult(){const count={luffy:0,zoro:0,nami:0,sanji:0,usopp:0,chopper:0};answers.forEach(a=>count[a]++);const max=Math.max(...Object.values(count));const tied=Object.keys(count).filter(k=>count[k]===max);return tied.length===1?tied[0]:answers[answers.length-1]}
function renderResult(){
  const key=computeResult();
  const r=results[key];
  const artSrc = RESULT_ART[key];
  const avatar = $('#result-avatar');
  avatar.innerHTML = artSrc ? `<img src="${artSrc}" alt="${r.title}角色圖">` : '';
  $('#result-title').textContent=r.title;
  $('#result-subtitle').textContent=r.subtitle;
  $('#result-description').textContent=r.description;
  $('#result-position').textContent=r.position;
  $('#result-keywords').innerHTML=['<span class="keyword-label">人格關鍵字</span>',...r.keywords.map(k=>`<span>${k}</span>`)].join('');
  const shareNote = $('#result-share-note');
  if(shareNote){
    shareNote.textContent = `截圖你的${r.title}結果，回到粉絲專頁貼文留言上傳，就有機會獲得樂高®喬巴帽周邊商品`;
  }
  const downloadLink = $('#download-btn');
  if(downloadLink && DOWNLOAD_RESULT_FILES[key]){
    downloadLink.href = DOWNLOAD_RESULT_FILES[key].src;
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener';
  }
  show('result')
}


document.addEventListener('click', function(e){
  const navBtn = e.target.closest('[data-go]');
  if(!navBtn) return;
  e.preventDefault();
  const to = navBtn.dataset.go;
  if(to === 'quiz'){
    startQuiz();
  }else{
    show(to);
  }
});

$('#next-btn').onclick=()=>{if(!answers[current]){$('#error-text').textContent='請先選擇一個答案，再繼續出航！';return}if(current<questions.length-1){current++;renderQuestion()}else renderResult()};
$('#back-btn').onclick=()=>{if(current>0){current--;renderQuestion()}};
$('#facebook-btn').onclick=()=>window.open(FACEBOOK_POST_URL,'_blank');


function loadImage(src){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`圖片載入失敗: ${src}`));
    img.src = src;
  });
}

function drawTextLines(ctx, text, x, y, maxWidth, lineHeight, align='left'){
  const chars = Array.from(String(text || ''));
  const lines = [];
  let line = '';
  for(const ch of chars){
    const test = line + ch;
    if(ctx.measureText(test).width > maxWidth && line){
      lines.push(line);
      line = ch;
    }else{
      line = test;
    }
  }
  if(line) lines.push(line);
  ctx.textAlign = align;
  lines.forEach((ln, i) => ctx.fillText(ln, x, y + i * lineHeight));
  return { lines, bottom: y + Math.max(lines.length, 1) * lineHeight };
}

function measureTextBlock(ctx, text, maxWidth){
  const chars = Array.from(String(text || ''));
  const lines = [];
  let line = '';
  for(const ch of chars){
    const test = line + ch;
    if(ctx.measureText(test).width > maxWidth && line){
      lines.push(line);
      line = ch;
    }else{
      line = test;
    }
  }
  if(line) lines.push(line);
  return lines;
}

function drawRoundedBox(ctx, x, y, w, h, r, fill, stroke, lineWidth=2){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if(fill){
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if(stroke){
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function drawPill(ctx, x, y, text, opts={}){
  const padX = opts.padX ?? 20;
  const h = opts.height ?? 58;
  const radius = opts.radius ?? 28;
  ctx.font = opts.font ?? '900 26px sans-serif';
  const textW = ctx.measureText(text).width;
  const w = textW + padX * 2;
  drawRoundedBox(ctx, x, y, w, h, radius, opts.fill ?? '#fff', opts.stroke ?? '#d0deef', opts.lineWidth ?? 3);
  ctx.fillStyle = opts.color ?? '#092447';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + w / 2, y + h / 2 + (opts.textOffsetY ?? 1));
  ctx.textBaseline = 'alphabetic';
  return w;
}

function drawResultArt(ctx, img, centerX, topY, maxWidth, maxHeight){
  const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
  const w = img.width * ratio;
  const h = img.height * ratio;
  const x = centerX - w / 2;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, x, topY, w, h);
  return { x, y: topY, w, h, bottom: topY + h };
}

function downloadResult(){
  const key = computeResult();
  const file = DOWNLOAD_RESULT_FILES[key];
  if(!file) return;
  window.location.href = file.src;
}



