const FACEBOOK_POST_URL = "https://www.facebook.com/";

const questions = [
  { q:"你登上偉大航道前，第一件事會做什麼？", a:[
    ["luffy","先喊出夢想，氣勢不能輸"],["zoro","先檢查武器與訓練狀態"],["nami","先看地圖、天氣和物資"],["sanji","先準備一頓能讓大家振作的料理"],["usopp","先確認逃生路線，這叫謹慎"],["chopper","先檢查大家有沒有暈船或受傷"]]},
  { q:"夥伴遇到危機時，你最可能？", a:[
    ["luffy","直接衝過去，邊跑邊喊他的名字"],["zoro","冷靜出手，事情交給我"],["nami","先判斷局勢，找出最有效的解法"],["sanji","優雅登場，順便說一句帥話"],["usopp","嘴上說完蛋了，但手已經開始想招"],["chopper","先救人，再把對方罵到知道錯"]]},
  { q:"你的冒險風格比較像？", a:[
    ["luffy","看到有趣的島就上岸"],["zoro","目標明確，不浪費時間"],["nami","先規劃路線，少走冤枉路"],["sanji","每一站都要吃得好、活得帥"],["usopp","帶著故事和道具，把冒險變傳說"],["chopper","希望每個人都平安，也都能變強"]]},
  { q:"如果你是草帽海賊團成員，最想負責？", a:[
    ["luffy","船長，因為我要成為最自由的人"],["zoro","戰鬥主力，擋在大家前面"],["nami","航海士，沒有我你們會迷路"],["sanji","廚師，餵飽大家也是戰力"],["usopp","狙擊手兼氣氛擔當"],["chopper","船醫，夥伴的健康我來守護"]]},
  { q:"面對強敵，你的第一反應是？", a:[
    ["luffy","好像很好玩，開打吧"],["zoro","看起來值得一戰"],["nami","先分析弱點，不要硬衝"],["sanji","不能讓重要的人受傷"],["usopp","我們是不是可以先談談，或假裝不在"],["chopper","大家退後，我先看誰需要治療"]]},
  { q:"朋友最常怎麼形容你？", a:[
    ["luffy","熱血到有點不可思議"],["zoro","安靜但很可靠"],["nami","聰明、現實，懂得掌控狀況"],["sanji","很會照顧人，也很有品味"],["usopp","很會講，腦洞也很多"],["chopper","很暖，被誇會害羞"]]},
  { q:"你最受不了哪種狀況？", a:[
    ["luffy","夥伴被欺負"],["zoro","自己不夠強"],["nami","計畫失控又沒人處理"],["sanji","浪費食物或不尊重人"],["usopp","大家叫我第一個衝"],["chopper","重要的人受傷卻逞強"]]},
  { q:"抽到喬巴帽周邊商品時，你會？", a:[
    ["luffy","戴上去大喊出航"],["zoro","看起來不錯，默默收好"],["nami","先拍照，再提醒大家留言參加"],["sanji","戴得很帥，拍一張最有氛圍的"],["usopp","說這是我偉大船員的證明"],["chopper","嘴上說才沒有開心，其實超開心"]]}
];

const results = {
  luffy:{icon:"🍖",title:"魯夫型",subtitle:"夢想比海還大，肚子也差不多。",keywords:["熱血","自由","直覺","夥伴優先"],description:"你是船上最像太陽的人。遇到困難不會先想退路，而是先問：可以開打了嗎？你相信夢想，也相信夥伴，只要是想守護的人，就算前方是偉大航道也照樣衝。",position:"你適合站在船頭，喊出大家不敢說出口的夢想。有你在，冒險就不只是目的地，而是一場讓人想跟上的旅程。",products:[['主推盒組','75647 橡膠果實','你的夢想不只是說說而已，是從吃下那顆果實的瞬間開始改變航線。'],['延伸推薦','75642 決戰斯摩格上校','想把冒險推進到熱血對決，就從羅格鎮開始。']]},
  zoro:{icon:"⚔️",title:"索隆型",subtitle:"路可以走錯，信念不能偏航。",keywords:["專注","可靠","冷靜","修練派"],description:"你不太愛說漂亮話，但答應的事一定做到。你習慣默默變強，也常常成為團隊最穩的後盾。缺點是偶爾會走錯路，不過沒關係，氣勢有到就好。",position:"你適合成為團隊裡最穩的戰力。話不用多，站出來的那一刻，大家就知道可以放心了。",products:[['主推盒組','75644 多利 vs. 布洛基－小花園的巨人','硬派對決與巨大戰場，最適合專注戰鬥與修練的你。'],['延伸推薦','75646 卡普的海軍戰艦','想把戰鬥格局拉到海上，就登上更大的戰場。']]},
  nami:{icon:"🧭",title:"娜美型",subtitle:"偉大航道也要先看預算跟地圖。",keywords:["聰明","務實","觀察力強","掌控全局"],description:"你不是衝第一個的人，但你永遠知道大家該往哪裡走。你精準判斷風向，也懂得把混亂整理成計畫。沒有你，這艘船大概三天就會迷路兼破產。",position:"你適合掌握航線與節奏。當大家熱血過頭時，你就是那個把冒險拉回正軌的人。",products:[['主推盒組','75646 卡普的海軍戰艦','大船、航線與全局判斷，最適合懂得掌握方向的你。'],['延伸推薦','75645 磁鼓城之戰','想挑戰更高難度的戰場，就把策略帶進雪山。']]},
  sanji:{icon:"🔥",title:"香吉士型",subtitle:"帥氣不是人設，是基本禮貌。",keywords:["浪漫","講究","體貼","帥氣救場"],description:"你是團隊裡最會照顧氣氛的人。外表可能瀟灑，內心其實很柔軟。你相信品味，也相信重要的人值得被好好對待。必要時，踢出去的不只是敵人，還有壞心情。",position:"你適合成為團隊裡的氣氛守護者。有你在，冒險不只熱血，還要有品味。",products:[['主推盒組','75642 決戰斯摩格上校','帥氣救場與正面對決，最適合講究登場時機的你。'],['延伸推薦','75645 磁鼓城之戰','想讓守護夥伴的氣勢升級，就前進磁鼓城。']]},
  usopp:{icon:"🎯",title:"騙人布型",subtitle:"怕歸怕，關鍵時刻還是超可靠。",keywords:["想像力","臨場反應","嘴砲力","關鍵救援"],description:"你可能會先緊張、先吐槽、先說事情不妙，但最後還是會站出來。你的腦袋永遠有奇招，嘴上說不要，身體卻很誠實地幫大家解危。",position:"你適合在大家以為沒辦法的時候，突然拿出一個超乎預期的解法。你的厲害，常常要到最後一刻才會被看見。",products:[['主推盒組','75644 多利 vs. 布洛基－小花園的巨人','巨人戰場加上奇招變化，最適合腦洞很多的你。'],['延伸推薦','75646 卡普的海軍戰艦','想把想像力搬到大船上，就從這艘戰艦開始。']]},
  chopper:{icon:"💙",title:"喬巴型",subtitle:"嘴上說才不開心，帽子已經開心到飛起來。",keywords:["療癒","善良","認真","守護夥伴"],description:"你是大家的補血站，也是船上最想保護別人的人。你在意夥伴的狀態，會默默記住每個人的需要。被稱讚時可能會嘴硬，但心裡早就開花。",position:"你適合成為大家最安心的存在。冒險路上有你在，就算受傷、跌倒或迷惘，也會有人願意好好接住。",products:[['主推盒組','75643 多尼多尼喬巴','最適合療癒又認真的你，把喬巴的可愛與守護力一起收藏。'],['延伸推薦','75641 Dr. 西爾爾克的藏身處','想收藏喬巴故事的起點，就走進那座雪山裡的溫暖藏身處。']]}
};

let current=0, answers=[], order=[];
const $ = sel => document.querySelector(sel);
const screens = {home:$('#screen-home'),rules:$('#screen-rules'),quiz:$('#screen-quiz'),result:$('#screen-result')};
function show(name){Object.values(screens).forEach(s=>s.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0);if(name==='quiz')renderQuestion();}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function startQuiz(){current=0;answers=[];order=questions.map(q=>shuffle(q.a));show('quiz')}
function renderQuestion(){const q=questions[current];$('#question-count').textContent=`第 ${current+1} 題 / 共 8 題`;$('#question-kicker').textContent=`Question ${String(current+1).padStart(2,'0')}`;$('#question-title').textContent=q.q;$('#progress-fill').style.width=`${((current+1)/questions.length)*100}%`;$('#error-text').textContent='';const ans=$('#answers');ans.innerHTML='';order[current].forEach((item,i)=>{const b=document.createElement('button');b.className='answer-btn'+(answers[current]===item[0]?' selected':'');b.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${item[1]}</span>`;b.onclick=()=>{answers[current]=item[0];renderQuestion()};ans.appendChild(b)});$('#back-btn').style.visibility=current===0?'hidden':'visible';$('#next-btn').textContent=current===questions.length-1?'查看我的船員人格':'下一題'}
function computeResult(){const count={luffy:0,zoro:0,nami:0,sanji:0,usopp:0,chopper:0};answers.forEach(a=>count[a]++);let max=Math.max(...Object.values(count));let tied=Object.keys(count).filter(k=>count[k]===max);return tied.length===1?tied[0]:answers[answers.length-1]}
function renderResult(){const key=computeResult();const r=results[key];$('#result-avatar').textContent=r.icon;$('#result-title').textContent=r.title;$('#result-subtitle').textContent=r.subtitle;$('#result-description').textContent=r.description;$('#result-position').textContent=r.position;$('#result-keywords').innerHTML=r.keywords.map(k=>`<span>${k}</span>`).join('');$('#product-grid').innerHTML=r.products.map((p,i)=>`<div class="product-card ${i===0?'primary':''}"><div class="product-label">${p[0]}</div><h4>${p[1]}</h4><p>${p[2]}</p></div>`).join('');show('result')}
document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>{const to=btn.dataset.go;if(to==='quiz')startQuiz();else show(to)}));
$('#next-btn').onclick=()=>{if(!answers[current]){$('#error-text').textContent='請先選擇一個答案，再繼續出航！';return} if(current<questions.length-1){current++;renderQuestion()}else renderResult()};
$('#back-btn').onclick=()=>{if(current>0){current--;renderQuestion()}};
$('#facebook-btn').onclick=()=>window.open(FACEBOOK_POST_URL,'_blank');
$('#download-btn').onclick=downloadResult;

function wrapText(ctx,text,x,y,maxWidth,lineHeight){const words=[...text];let line='';for(const ch of words){const test=line+ch;if(ctx.measureText(test).width>maxWidth && line){ctx.fillText(line,x,y);line=ch;y+=lineHeight}else line=test}if(line)ctx.fillText(line,x,y);return y+lineHeight}
function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function downloadResult(){const key=computeResult();const r=results[key];const c=$('#download-canvas');const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);const grad=ctx.createLinearGradient(0,0,0,1920);grad.addColorStop(0,'#0b5f91');grad.addColorStop(.52,'#79cadd');grad.addColorStop(.53,'#dfe8cd');grad.addColorStop(1,'#f4dda0');ctx.fillStyle=grad;ctx.fillRect(0,0,1080,1920);ctx.fillStyle='#fff7e6';roundRect(ctx,88,88,904,1744,46);ctx.fill();ctx.strokeStyle='#c2a66f';ctx.lineWidth=6;ctx.stroke();const img=new Image();img.onload=()=>{ctx.drawImage(img,132,134,112,112);drawText()};img.onerror=drawText;img.src='./lego-logo.jpg';function drawText(){ctx.fillStyle='#e9272e';ctx.font='900 36px sans-serif';ctx.fillText('我的草帽船員人格是',132,310);ctx.textAlign='center';ctx.font='900 110px sans-serif';ctx.fillStyle='#092447';ctx.fillText(r.title,540,470);ctx.font='900 38px sans-serif';ctx.fillStyle='#126fba';let y=wrapText(ctx,r.subtitle,540,550,760,50);ctx.textAlign='left';ctx.font='700 32px sans-serif';ctx.fillStyle='#2e2e2e';y=wrapText(ctx,r.description,132,690,816,52);ctx.font='900 32px sans-serif';ctx.fillStyle='#092447';ctx.fillText(r.keywords.join(' ・ '),132,y+26);y+=92;ctx.fillStyle='#fffdf7';roundRect(ctx,132,y,816,270,26);ctx.fill();ctx.strokeStyle='#f1b5b5';ctx.lineWidth=4;ctx.stroke();ctx.fillStyle='#e9272e';ctx.font='900 30px sans-serif';ctx.fillText('小樂推薦你的冒險盒組',164,y+54);ctx.fillStyle='#092447';ctx.font='900 39px sans-serif';ctx.fillText(r.products[0][1],164,y+108);ctx.font='700 27px sans-serif';ctx.fillStyle='#36414f';wrapText(ctx,r.products[0][2],164,y+154,760,42);y+=316;ctx.fillStyle='#fff';roundRect(ctx,132,y,816,178,24);ctx.fill();ctx.strokeStyle='#e9d6b8';ctx.stroke();ctx.fillStyle='#e9272e';ctx.font='900 26px sans-serif';ctx.fillText('延伸推薦',164,y+48);ctx.fillStyle='#092447';ctx.font='900 32px sans-serif';ctx.fillText(r.products[1][1],164,y+94);ctx.font='700 24px sans-serif';ctx.fillStyle='#36414f';wrapText(ctx,r.products[1][2],164,y+132,760,36);ctx.fillStyle='#092447';roundRect(ctx,132,1634,816,132,28);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 31px sans-serif';wrapText(ctx,'完成樂高® 航海王人格測驗，截圖回貼臉書活動貼文，抽喬巴帽周邊商品',164,1682,760,42);ctx.textAlign='center';ctx.fillStyle='#667';ctx.font='900 28px sans-serif';ctx.fillText('樂高® 航海王人格測驗',540,1820);const a=document.createElement('a');a.download=`樂高航海王人格測驗_${r.title}.png`;a.href=c.toDataURL('image/png');a.click();alert('結果圖已下載，記得回到臉書活動貼文留言上傳！')}}
