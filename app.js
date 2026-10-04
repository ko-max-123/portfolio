(function(){
  const projects = window.PROJECTS || [];
  const wall = document.getElementById('projectWall');
  const filters = document.getElementById('filters');
  let active = 'ALL';
  let order = projects.slice();

  const rotations = [-1.8,1.2,-.7,1.7,-1.1,.8];
  const accents = ['lime','yellow','blue','pink','orange'];

  function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }

  function render(){
    if(!wall) return;
    const list = active==='ALL' ? order : order.filter(p=>p.cat===active);
    wall.innerHTML = list.map((p,i)=>{
      const live = p.live ? `<a class="project-link live" href="${p.live}" target="_blank" rel="noopener">OPEN LIVE ↗</a>` : '';
      const repo = p.repo ? `<a class="project-link" href="${p.repo}" target="_blank" rel="noopener">CODE ↗</a>` : '';
      const tags = p.tags.map(t=>`<span>${escapeHtml(t)}</span>`).join('');
      return `<article class="project-card ${accents[i%accents.length]}" style="--rot:${rotations[i%rotations.length]}deg" data-id="${p.id}">
        <div class="card-top"><b class="project-mark">${escapeHtml(p.mark)}</b><span class="project-no">#${String(i+1).padStart(2,'0')}</span></div>
        <div class="card-body"><small>${escapeHtml(p.cat)}</small><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.short)}</p></div>
        <div class="tag-row">${tags}</div>
        <div class="card-links">${live}${repo}</div>
      </article>`;
    }).join('');
  }

  function renderFilters(){
    if(!filters) return;
    const cats = ['ALL',...new Set(projects.map(p=>p.cat))];
    filters.innerHTML = cats.map(c=>`<button type="button" class="filter ${c===active?'active':''}" data-cat="${c}">${c}</button>`).join('');
    filters.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
      active=btn.dataset.cat; renderFilters(); render();
    }));
  }

  document.getElementById('shuffle')?.addEventListener('click',()=>{
    order = order.slice().sort(()=>Math.random()-.5); render();
  });

  document.getElementById('randomJump')?.addEventListener('click',()=>{
    const candidates = projects.filter(p=>p.live);
    const p = candidates[Math.floor(Math.random()*candidates.length)];
    if(p) window.open(p.live,'_blank','noopener');
  });

  function updateClock(){
    const el=document.getElementById('clock'); if(!el) return;
    el.textContent=new Intl.DateTimeFormat('ja-JP',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date());
  }
  updateClock(); setInterval(updateClock,1000);
  renderFilters(); render();
})();
