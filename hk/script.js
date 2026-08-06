const FACEBOOK_POST_URL = "https://www.facebook.com/";

const questions = [
  { q:"登上偉大航道之前，你第一件事會做咩？", a:[["luffy","大聲講出自己嘅夢想，氣勢唔輸得"],["zoro","檢查武器同訓練狀態"],["nami","睇地圖、天氣同物資"],["sanji","準備豐盛嘅晚餐，幫大家打氣"],["usopp","確認定逃生路線，呢啲叫謹慎"],["chopper","睇吓大家有冇暈船浪或者受傷"]]},
  { q:"當隊友遇到危機，你最可能會點做？", a:[["luffy","即刻衝過去，邊跑邊嗌佢個名"],["zoro","冷靜出手，萬大事包喺我身上"],["nami","先判斷形勢，搵出最有效嘅解決方法"],["sanji","優雅登場，順便講句型爆對白"],["usopp","把口就話「死梗」，但雙手已經開始郁緊"],["chopper","先救人，再鬧到對方知錯"]]},
  { q:"你嘅冒險風格比較似邊種？", a:[["luffy","見到有趣嘅島就上岸探索"],["zoro","目標明確，唔會浪費時間"],["nami","先計劃好路線，唔使行冤枉路"],["sanji","每一站都要食得好，打卡able"],["usopp","帶住故事同道具，將冒險變成傳說"],["chopper","希望所有人都平安，亦變得愈嚟愈強"]]},
  { q:"如果你係草帽海賊團團員，最想做邊個崗位？", a:[["luffy","船長，因為我要成為最自由嘅人"],["zoro","戰鬥主力，企喺大家前面擋住一切"],["nami","航海士，冇咗我，你哋實會蕩失路"],["sanji","廚師，餵飽大家都係一種戰力"],["usopp","狙擊手兼氣氛擔當"],["chopper","船醫，隊友嘅健康由我守護"]]},
  { q:"面對勁敵，你嘅第一反應係？", a:[["luffy","好似好好玩咁，開戰啦！"],["zoro","睇落值得一戰"],["nami","先分析弱點，唔好盲衝"],["sanji","先保護好重要嘅人"],["usopp","先同對手談判一輪，或扮唔喺度"],["chopper","大家退後，等我睇下邊個需要治療"]]},
  { q:"朋友最常點樣形容你？", a:[["luffy","熱血到有啲難以置信"],["zoro","靜靜哋，但非常可靠"],["nami","聰明又實際，好識掌握形勢"],["sanji","好識照顧人，亦都好有品味"],["usopp","好識講嘢，諗法仲特別多"],["chopper","好Sweet，畀人讚仲會怕醜"]]},
  { q:"你最頂唔順邊種情況？", a:[["luffy","隊友畀人蝦"],["zoro","自己仲未夠強"],["nami","計劃失晒控，但又冇人處理"],["sanji","浪費食物，或者唔尊重人"],["usopp","個個都叫我第一個衝出去"],["chopper","重要嘅人受咗傷，仲要死撐"]]},
  { q:"拎到 LEGO® 喬巴帽嗰陣，你會？", a:[["luffy","戴起頂帽，大嗌：「開船啦！」"],["zoro","覺得睇落唔錯，默默收好頂帽"],["nami","打卡先，再提大家參加"],["sanji","戴到最有型，再影張最有氣氛嘅相"],["usopp","「呢個就係我作為偉大船員嘅證明！」"],["chopper","講就講話冇好開心，其實心入面勁開心"]]}
];
const results={
  luffy:{icon:"🍖",title:"路飛型",subtitle:"夢想比海大，肚腩都差唔多",keywords:["熱血","自由","直覺","隊友行先"],description:"你係船上最似太陽嘅人。遇到困難唔會先諗退路，而係先問：「係咪可以開戰？」你相信夢想，都相信隊友，只要係想守護嘅人，就算前面係偉大航道都照樣衝",position:"你適合企喺船頭，將大家唔敢講出口嘅夢想大聲嗌出嚟。有你喺到，冒險就唔再只係目的地，而係一場令人想跟上嘅旅程",cta:"保存你嘅路飛型結果，去LEGO® 認證專門店，將 LEGO® 喬巴帽帶返屋企啦！"},
  zoro:{icon:"⚔️",title:"索隆型",subtitle:"行錯路唔緊要，但一定要揸緊信念",keywords:["專注","可靠","冷靜","修練型"],description:"你唔係好識講啲冧人嘅說話，但應承過嘅事就一定會做到。你習慣靜靜地變強，亦都係團隊入面最硬淨嘅後盾。缺點係有時會蕩失路，唔驚！最緊要個氣場夠勁",position:"你適合做團隊入面最穩陣嘅戰力擔當。唔使講太多，你一企出嚟，大家就安心哂",cta:"保存你嘅索隆型結果，去LEGO® 認證專門店，將LEGO®喬巴帽帶返屋企啦！"},
  nami:{icon:"🧭",title:"娜美型",subtitle:"去偉大航道，都要先睇 Budget 同地圖",keywords:["醒目","務實","觀察力強","顧全大局"],description:"你唔係會第一個衝出去嘅人，但你永遠都知道大家應該點行。你睇風向好準，無論局勢有幾亂，你都會幫大家理順成個計劃。<br />冇咗你，呢隻船大概三日內就會迷路兼爆Budget",position:"你適合負責睇實航線同節奏。當大家熱血過火嗰陣，你就係嗰個會將成場冒險拉返正軌嘅人",cta:"Screencap 你嘅娜美型結果，去LEGO® 認證專門店，將LEGO®喬巴帽帶返屋企啦！"},
  sanji:{icon:"🔥",title:"山治型",subtitle:"型唔係人設，係基本禮貌",keywords:["浪漫","講究","體貼","型格救場"],description:"你係團隊入面最識照顧氣氛嘅人。外表可能好瀟灑，但內心其實好柔軟。你相信品味，亦都相信重要嘅人值得被好好對待。有需要嗰陣，你踢走嘅唔單止係敵人，仲有壞心情",position:"你適合成為團隊入面嘅氣氛擔當。有你喺度，冒險唔止要熱血，仲要有品味",cta:"Screencap 你嘅山治型結果，去LEGO® 認證專門店，將LEGO®喬巴帽帶返屋企啦！"},
  usopp:{icon:"🎯",title:"烏索普型",subtitle:"驚還驚，但去到關鍵時刻都係超可靠",keywords:["想像力","臨場反應","把口夠勁","關鍵救援"],description:"你可能會先緊張、忍唔住駁兩句嘴、話今次搞唔掂，但到最後都係會企出嚟。你嘅腦袋成日都有奇招，把口話唔制，但身體就好誠實咁幫大家解圍",position:"你適合喺大家都以為冇辦法嗰陣，突然拎出一個超乎預期嘅解決方案。你嘅厲害之處，成日都要去到最後一刻先會俾人睇到",cta:"Screencap 你嘅烏索普型結果，去LEGO® 認證專門店，將LEGO®喬巴帽帶返屋企啦！"},
  chopper:{icon:"💙",title:"喬巴型",subtitle:"把口就話自己唔開心，頂帽其實已經開心到飛起",keywords:["療癒","善良","認真","守護隊友"],description:"你係大家嘅補血站，亦都係船上最想保護別人嘅人。你好在意隊友嘅狀態，會默默記住每個人嘅需要。俾人讚嗰陣可能會嘴硬，但一早就心花怒放",position:"你適合成為大家最有安全感嘅存在。冒險路上有你喺度，就算受傷、跌低，或者迷失方向，你都會撐住大家",cta:"Screencap 你嘅喬巴型結果，去 LEGO® 認證專門店，將 LEGO®喬巴帽帶返屋企啦！"}
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
  luffy: { src: './img/result-luffy-final.jpg', filename: 'LEGO One Piece 人格測驗_路飛型.jpg' },
  zoro: { src: './img/result-zoro-final.jpg', filename: 'LEGO One Piece 人格測驗_索隆型.jpg' },
  nami: { src: './img/result-nami-final.jpg', filename: 'LEGO One Piece 人格測驗_娜美型.jpg' },
  sanji: { src: './img/result-sanji-final.jpg', filename: 'LEGO One Piece 人格測驗_山治型.jpg' },
  usopp: { src: './img/result-usopp-final.jpg', filename: 'LEGO One Piece 人格測驗_烏索普型.jpg' },
  chopper: { src: './img/result-chopper-final.jpg', filename: 'LEGO One Piece 人格測驗_喬巴型.jpg' }
};

let current=0, answers=[], order=[];
let quizStartedTracked = false;
let quizCompletedTracked = false;

function trackQuizEvent(name, data={}){
  if(typeof window.va !== 'function') return;
  window.va('event', {
    name,
    data: { locale: 'hk', ...data }
  });
}

function trackQuizStarted(){
  if(quizStartedTracked) return;
  quizStartedTracked = true;
  trackQuizEvent('quiz_started');
}

function trackQuizCompleted(result){
  if(quizCompletedTracked) return;
  quizCompletedTracked = true;
  trackQuizEvent('quiz_completed', { result });
}
const $=sel=>document.querySelector(sel);
const screens={home:$('#screen-home'),rules:$('#screen-rules'),quiz:$('#screen-quiz'),result:$('#screen-result')};
function show(name){Object.values(screens).forEach(s=>s.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0);if(name==='quiz')renderQuestion()}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function startQuiz(){current=0;answers=[];order=questions.map(q=>shuffle(q.a));quizStartedTracked=false;quizCompletedTracked=false;show('quiz')}
function renderQuestion(){const q=questions[current];$('#question-count').textContent=`第 ${current+1} 題 / 共 8 題`;$('#question-kicker').textContent=`Question ${String(current+1).padStart(2,'0')}`;$('#question-title').textContent=q.q;$('#progress-fill').style.width=`${((current+1)/questions.length)*100}%`;$('#error-text').textContent='';const ans=$('#answers');ans.innerHTML='';order[current].forEach((item,i)=>{const b=document.createElement('button');b.className='answer-btn'+(answers[current]===item[0]?' selected':'');b.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${item[1]}</span>`;b.onclick=()=>{if(current===0)trackQuizStarted();answers[current]=item[0];renderQuestion()};ans.appendChild(b)});$('#back-btn').style.visibility=current===0?'hidden':'visible';$('#next-btn').textContent=current===questions.length-1?'查看我嘅船員人格':'下一題'}
function computeResult(){const count={luffy:0,zoro:0,nami:0,sanji:0,usopp:0,chopper:0};answers.forEach(a=>count[a]++);const max=Math.max(...Object.values(count));const tied=Object.keys(count).filter(k=>count[k]===max);return tied.length===1?tied[0]:answers[answers.length-1]}
function renderResult(){
  const key=computeResult();
  const r=results[key];
  const artSrc = RESULT_ART[key];
  const avatar = $('#result-avatar');
  avatar.innerHTML = artSrc ? `<img src="${artSrc}" alt="${r.title}角色圖">` : '';
  $('#result-title').textContent=r.title;
  $('#result-subtitle').textContent=r.subtitle;
  $('#result-description').innerHTML=r.description;
  $('#result-position').innerHTML=r.position;
  $('#result-keywords').innerHTML=['<span class="keyword-label">人格關鍵字</span>',...r.keywords.map(k=>`<span>${k}</span>`)].join('');
  const shareNote = $('#result-share-note');
  if(shareNote){
    shareNote.textContent = r.cta || `保存你嘅${r.title}結果，去LEGO® 認證專門店，將LEGO®喬巴帽帶返屋企啦！`;
  }
  const downloadLink = $('#download-btn');
  if(downloadLink && DOWNLOAD_RESULT_FILES[key]){
    downloadLink.href = DOWNLOAD_RESULT_FILES[key].src;
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener';
  }
  trackQuizCompleted(key);
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

$('#next-btn').onclick=()=>{if(!answers[current]){$('#error-text').textContent='請先揀一個答案，再繼續啟航！';return}if(current<questions.length-1){current++;renderQuestion()}else renderResult()};
$('#back-btn').onclick=()=>{if(current>0){current--;renderQuestion()}};
const facebookBtn = $('#facebook-btn');
if(facebookBtn) facebookBtn.onclick=()=>window.open(FACEBOOK_POST_URL,'_blank');


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



