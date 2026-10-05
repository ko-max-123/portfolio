(function(){
  const body=document.body;
  const all=window.PROJECTS||[];
  let currentFilter='ALL';

  function theme(){return body.dataset.theme||'lab'}
  function available(p){return theme()==='lab'?p.showLab!==false:p.showBase!==false}
  function applyTheme(next, initial){
    body.dataset.theme=next;
    localStorage.setItem('portfolio-theme',next);
    document.querySelectorAll('[data-mode-label]').forEach(el=>el.textContent=next==='lab'?'LAB MODE':'BASE MODE');
    document.querySelectorAll('[data-mode-sub]').forEach(el=>el.textContent=next==='lab'?'IDEAS / PROCESS':'WORK / CAPABILITY');
    currentFilter='ALL';
    renderFeatured(); renderProjects(); renderFilters();
    if(!initial){body.classList.remove('mode-flash');void body.offsetWidth;body.classList.add('mode-flash');}
  }

  applyTheme(localStorage.getItem('portfolio-theme')||'lab',true);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.addEventListener('click',()=>applyTheme(theme()==='lab'?'base':'lab',false)));

  function tick(){const d=new Date();document.querySelectorAll('[data-clock]').forEach(el=>el.textContent=d.toLocaleTimeString('ja-JP',{hour12:false}));}
  tick(); setInterval(tick,1000);

  document.querySelectorAll('[data-menu-btn]').forEach(btn=>btn.addEventListener('click',()=>{
    const nav=document.querySelector('[data-nav]'); if(!nav)return; const open=nav.classList.toggle('open'); btn.setAttribute('aria-expanded',String(open));
  }));

  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
  function arr(v){return Array.isArray(v)?v:[]}
  function noLinks(p){return !p.live&&!p.code}

  function labCard(p,i){
    const d=p.lab||{};
    return `<article class="project-card lab-card" style="--rot:${[-1.4,.8,-.6,1.3,-.9,.5][i%6]}deg">
      <div class="project-top"><span class="project-id">${esc(p.id)}</span><span class="status-dot">${noLinks(p)?'CASE NOTE':'OPEN BUILD'}</span></div>
      <span class="context-label">${esc(d.label)}</span>
      <h3>${esc(p.title)}</h3>
      ${d.question?`<blockquote>${esc(d.question)}</blockquote>`:''}
      <p>${esc(d.summary)}</p>
      <ul class="micro-list">${arr(d.points).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <div class="card-actions">${p.live?`<a class="live" target="_blank" rel="noopener" href="${esc(p.live)}">TOUCH IT ↗</a>`:''}${p.code?`<a target="_blank" rel="noopener" href="${esc(p.code)}">SOURCE ↗</a>`:''}${noLinks(p)?'<span class="private-label">NON-PUBLIC CASE</span>':''}</div>
    </article>`;
  }

  function baseCard(p,i){
    const d=p.base||{};
    return `<article class="project-card base-card" data-index="${String(i+1).padStart(2,'0')}">
      <div class="project-top"><span class="project-id">${esc(p.id)}</span><span class="status-dot">${noLinks(p)?'PRIVATE CASE':'PUBLIC CASE'}</span></div>
      <span class="context-label">${esc(d.label)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(d.summary)}</p>
      <div class="evidence"><span>EVIDENCE</span>${esc(d.evidence)}</div>
      <div class="tags">${arr(d.skills).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="card-actions">${p.live?`<a class="live" target="_blank" rel="noopener" href="${esc(p.live)}">LIVE ↗</a>`:''}${p.code?`<a target="_blank" rel="noopener" href="${esc(p.code)}">CODE ↗</a>`:''}${noLinks(p)?'<span class="private-label">CUSTOMER DATA / SOURCE NOT PUBLISHED</span>':''}</div>
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

  function renderFilters(){
    const fs=document.querySelector('[data-filters]'); if(!fs)return;
    const cats=theme()==='lab'
      ?['ALL','TRAVEL','CAMP','EXPERIMENT','UTILITY','RESEARCH','WEB','TOOLS','PLAY','EDUCATION','MAINTAINABILITY']
      :['ALL','QA','AUTOMATION','AI','PROCESS','WEB','PWA','PROTOTYPE','RESEARCH','TOOLS'];
    if(!cats.includes(currentFilter))currentFilter='ALL';
    fs.innerHTML=cats.map(c=>`<button class="filter ${c===currentFilter?'active':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');
  }
  const fs=document.querySelector('[data-filters]');
  if(fs)fs.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;currentFilter=b.dataset.filter;renderFilters();renderProjects();});

  const sh=document.querySelector('[data-shuffle]');
  if(sh)sh.addEventListener('click',()=>renderList([...all].filter(matches).sort(()=>Math.random()-.5),'[data-projects]'));
  document.querySelectorAll('[data-random]').forEach(btn=>btn.addEventListener('click',()=>{const live=all.filter(p=>available(p)&&p.live);const p=live[Math.floor(Math.random()*live.length)];if(p)window.open(p.live,'_blank','noopener')}));

  renderFeatured(); renderProjects(); renderFilters();
})();
