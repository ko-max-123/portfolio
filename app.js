(function(){
  // 公開用のデータは npm run build で生成します。元データは content/ にあります。
  const body=document.body;
  const all=window.PROJECTS||[];
  const modes=window.PORTFOLIO_CONFIG.modes;
  let currentFilter='ALL';

  // 表示モードの設定は content/site.mjs に集約しています。
  function theme(){return body.dataset.theme||'lab'}
  function available(p){return theme()==='lab'?p.showLab!==false:p.showBase!==false}
  function applyTheme(next, initial){
    if(!Object.hasOwn(modes,next))next='lab';
    const mode=modes[next];
    body.dataset.theme=next;
    localStorage.setItem('portfolio-theme',next);
    document.querySelectorAll('[data-mode-label]').forEach(el=>el.textContent=mode.label);
    document.querySelectorAll('[data-mode-sub]').forEach(el=>el.textContent=mode.sub);
    const fav=document.querySelector('[data-dynamic-favicon]');
    if(fav) fav.href=mode.favicon;
    const favPng=document.querySelector('[data-dynamic-favicon-png]');
    if(favPng) favPng.href=mode.faviconPng;
    const themeColor=document.querySelector('[data-theme-color]');
    if(themeColor) themeColor.content=mode.themeColor;
    currentFilter='ALL';
    renderFeatured(); renderProjects(); renderFilters();
    if(!initial){body.classList.remove('mode-flash');void body.offsetWidth;body.classList.add('mode-flash');}
  }

  applyTheme(localStorage.getItem('portfolio-theme')||'lab',true);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.addEventListener('click',()=>applyTheme(theme()==='lab'?'base':'lab',false)));

  // ヘッダーの時計とスマホメニュー。data-* 属性を通して共通ヘッダーと接続します。
  function tick(){const d=new Date();document.querySelectorAll('[data-clock]').forEach(el=>el.textContent=d.toLocaleTimeString('ja-JP',{hour12:false}));}
  tick(); setInterval(tick,1000);

  document.querySelectorAll('[data-menu-btn]').forEach(btn=>btn.addEventListener('click',()=>{
    const nav=document.querySelector('[data-nav]'); if(!nav)return; const open=nav.classList.toggle('open'); btn.setAttribute('aria-expanded',String(open));
  }));

  // 入力した文章・URLをカードのHTMLへ差し込む前にエスケープします。
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
  function arr(v){return Array.isArray(v)?v:[]}
  function noLinks(p){return !p.live&&!p.code}

  // 両モードで共通のリンク部品。文言だけを呼び出し元で指定します。
  function cardActions(p,liveLabel,privateLabel){
    return `<div class="card-actions">${p.live?`<a class="live" target="_blank" rel="noopener" href="${esc(p.live)}">${liveLabel} ↗</a>`:''}${p.code?`<a target="_blank" rel="noopener" href="${esc(p.code)}">ソースを見る ↗</a>`:''}${noLinks(p)?`<span class="private-label">${privateLabel}</span>`:''}</div>`;
  }

  // カードの外観は既存のHTML・クラスを維持。制作実績は content/projects.mjs で追加します。
  function labCard(p,i){
    const d=p.lab||{};
    return `<article class="project-card lab-card" style="--rot:${[-1.4,.8,-.6,1.3,-.9,.5][i%6]}deg">
      <div class="project-top"><span class="project-id">${esc(p.id)}</span><span class="status-dot">${noLinks(p)?'CASE NOTE':'OPEN BUILD'}</span></div>
      <span class="context-label">${esc(d.label)}</span>
      <h3>${esc(p.title)}</h3>
      ${d.question?`<blockquote>${esc(d.question)}</blockquote>`:''}
      <p>${esc(d.summary)}</p>
      <ul class="micro-list">${arr(d.points).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      ${cardActions(p,'試してみる','詳細非公開')}
    </article>`;
  }

  function baseCard(p,i){
    const d=p.base||{};
    return `<article class="project-card base-card" data-index="${String(i+1).padStart(2,'0')}">
      <div class="project-top"><span class="project-id">${esc(p.id)}</span><span class="status-dot">${noLinks(p)?'PRIVATE CASE':'PUBLIC CASE'}</span></div>
      <span class="context-label">${esc(d.label)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(d.summary)}</p>
      <div class="evidence"><span>工夫した点</span>${esc(d.evidence)}</div>
      <div class="tags">${arr(d.skills).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
      ${cardActions(p,'公開サイト','業務事例（詳細非公開）')}
    </article>`;
  }

  function card(p,i){return theme()==='lab'?labCard(p,i):baseCard(p,i)}
  function matches(p){
    if(!available(p))return false;
    if(currentFilter==='ALL')return true;
    const cats=theme()==='lab'?p.labCats:p.baseCats;
    return arr(cats).includes(currentFilter);
  }
  function renderList(list,target){const el=document.querySelector(target);if(el)el.innerHTML=list.map(card).join('')}
  function renderFeatured(){
    const list=all.filter(p=>available(p)&&(theme()==='lab'?p.featuredLab:p.featuredBase)).slice(0,6);
    renderList(list,'[data-featured]');
  }
  function renderProjects(){renderList(all.filter(matches),'[data-projects]')}

  // 分類の順番は content/site.mjs の modes.*.filters で管理します。
  function renderFilters(){
    const fs=document.querySelector('[data-filters]'); if(!fs)return;
    const cats=modes[theme()].filters;
    if(!cats.includes(currentFilter))currentFilter='ALL';
    fs.innerHTML=cats.map(c=>`<button class="filter ${c===currentFilter?'active':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');
  }
  const fs=document.querySelector('[data-filters]');
  if(fs)fs.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;currentFilter=b.dataset.filter;renderFilters();renderProjects();});

  // 並び替え・ランダム表示は、現在のモードと分類に表示される実績だけを対象にします。
  const sh=document.querySelector('[data-shuffle]');
  if(sh)sh.addEventListener('click',()=>renderList([...all].filter(matches).sort(()=>Math.random()-.5),'[data-projects]'));
  document.querySelectorAll('[data-random]').forEach(btn=>btn.addEventListener('click',()=>{const live=all.filter(p=>available(p)&&p.live);const p=live[Math.floor(Math.random()*live.length)];if(p)window.open(p.live,'_blank','noopener')}));

  // 初期表示は applyTheme() が担当します。ここで重ねて生成する必要はありません。
})();
