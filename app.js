const state = {
  query:'', minAge:0, minScore:0, deity:'all', sort:'heritage', includeUnknown:true, quick:'all', selected:null
};

const els = {
  list:document.getElementById('templeList'), search:document.getElementById('search'), ageRange:document.getElementById('ageRange'),
  historyRange:document.getElementById('historyRange'), ageValue:document.getElementById('ageValue'), historyValue:document.getElementById('historyValue'),
  deitySelect:document.getElementById('deitySelect'), sortSelect:document.getElementById('sortSelect'), includeUnknown:document.getElementById('includeUnknown'),
  resultCount:document.getElementById('resultCount'), resetButton:document.getElementById('resetButton'), totalPlaces:document.getElementById('totalPlaces'),
  datedPlaces:document.getElementById('datedPlaces'), ancientPlaces:document.getElementById('ancientPlaces'), mapStatus:document.getElementById('mapStatus'),
  detailPanel:document.getElementById('detailPanel'), sidebar:document.getElementById('sidebar')
};

function ageOf(t){ return t.dateYear ? Math.max(0, CURRENT_YEAR - t.dateYear) : null; }
function scoreColor(score){ return score >= 90 ? '#f4b74d' : score >= 75 ? '#f37b42' : '#7ea8ff'; }
function ageLabel(t){ const a=ageOf(t); return a === null ? 'Age unknown' : `~${a.toLocaleString()} yrs`; }
function safe(s){ return String(s ?? '').replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

const map = L.map('map',{zoomControl:true, minZoom:7}).setView([19.91,75.30],9.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom:19, attribution:'&copy; OpenStreetMap contributors'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markers = new Map();
let userMarker = null;

function markerIcon(t){
  const color=scoreColor(t.score);
  return L.divIcon({
    className:'', iconSize:[31,31], iconAnchor:[15,29], popupAnchor:[0,-25],
    html:`<div class="temple-pin" style="--pin:${color}"><div class="temple-pin-core"></div></div>`
  });
}

function buildMarkers(){
  temples.forEach(t=>{
    const marker=L.marker([t.lat,t.lng],{icon:markerIcon(t),title:t.name,riseOnHover:true});
    marker.bindPopup(`
      <div class="popup-kicker">${safe(t.tradition)} · ${safe(t.type)}</div>
      <div class="popup-title">${safe(t.name)}</div>
      <div class="popup-meta">${safe(t.area)}<br>${safe(ageLabel(t))} · historical value ${t.score}/100</div>
      <a class="popup-button" href="#${safe(t.id)}">Explore details →</a>
    `,{className:'temple-popup',offset:[0,0]});
    marker.on('click',()=>selectTemple(t.id,true));
    markers.set(t.id,marker);
  });
}
buildMarkers();

function populateSelectors(){
  const values=[...new Set(temples.map(t=>t.deity))].sort((a,b)=>a.localeCompare(b));
  values.forEach(v=>{
    const o=document.createElement('option');o.value=v;o.textContent=v;els.deitySelect.appendChild(o);
  });
}
populateSelectors();

function applyQuickFilter(name){
  state.quick=name;
  document.querySelectorAll('[data-quick]').forEach(btn=>btn.classList.toggle('active',btn.dataset.quick===name));
  if(name==='all'){
    state.minAge=0; state.minScore=0;
  } else if(name==='ancient'){
    state.minAge=500; state.minScore=0;
  } else if(name==='top'){
    state.minAge=0; state.minScore=85;
  } else if(name==='dated'){
    state.minAge=0; state.minScore=0; state.includeUnknown=false;
  }
  els.ageRange.value=state.minAge; els.historyRange.value=state.minScore; els.includeUnknown.checked=state.includeUnknown;
  syncLabels();render();
}

document.querySelectorAll('[data-quick]').forEach(btn=>btn.addEventListener('click',()=>applyQuickFilter(btn.dataset.quick)));

function reset(){
  Object.assign(state,{query:'',minAge:0,minScore:0,deity:'all',sort:'heritage',includeUnknown:true,quick:'all'});
  els.search.value='';els.ageRange.value='0';els.historyRange.value='0';els.deitySelect.value='all';els.sortSelect.value='heritage';els.includeUnknown.checked=true;
  document.querySelectorAll('[data-quick]').forEach(btn=>btn.classList.toggle('active',btn.dataset.quick==='all'));
  syncLabels();render();fitVisible();
}

function filteredTemples(){
  const q=state.query.toLowerCase().trim();
  let data=temples.filter(t=>{
    const a=ageOf(t);
    const matchesQuery=!q || [t.name,t.deity,t.tradition,t.area,t.taluka,t.era,t.architecture,t.type].join(' ').toLowerCase().includes(q);
    const matchesAge=a===null ? state.includeUnknown && state.minAge===0 : a>=state.minAge;
    const matchesScore=t.score>=state.minScore;
    const matchesDeity=state.deity==='all' || t.deity===state.deity;
    return matchesQuery && matchesAge && matchesScore && matchesDeity;
  });
  if(state.quick==='dated') data=data.filter(t=>t.dateYear!==null);
  data.sort((a,b)=>{
    if(state.sort==='oldest') return (ageOf(b)??-1)-(ageOf(a)??-1) || b.score-a.score;
    if(state.sort==='name') return a.name.localeCompare(b.name);
    return b.score-a.score || (ageOf(b)??-1)-(ageOf(a)??-1);
  });
  return data;
}

function render(){
  const data=filteredTemples();
  markerLayer.clearLayers();
  data.forEach(t=>markerLayer.addLayer(markers.get(t.id)));
  els.resultCount.textContent=data.length;
  els.mapStatus.textContent = data.length===temples.length ? 'Showing all mapped sacred places' : `${data.length} matching place${data.length===1?'':'s'}`;
  els.list.innerHTML='';
  if(!data.length){
    els.list.innerHTML='<div class="empty-state"><strong>No mapped places match these filters.</strong><br>Reduce the minimum age or historical-value threshold, or include unknown dates.</div>';
    return;
  }
  const fragment=document.createDocumentFragment();
  data.forEach(t=>{
    const card=document.createElement('article');
    card.className='temple-card'+(state.selected===t.id?' active':'');
    card.style.setProperty('--score-color',scoreColor(t.score));
    card.dataset.id=t.id;
    card.innerHTML=`
      <div class="card-top">
        <div class="card-copy"><h3>${safe(t.name)}</h3><p>${safe(t.area)} · ${safe(t.deity)}</p></div>
        <div class="score-pill"><strong>${t.score}</strong><span>value</span></div>
      </div>
      <div class="card-bottom">
        <div class="mini-tags"><span class="mini-tag">${safe(t.tradition)}</span><span class="mini-tag">${safe(t.confidence)} evidence</span></div>
        <span class="age-chip">${safe(ageLabel(t))}</span>
      </div>`;
    card.addEventListener('click',()=>selectTemple(t.id,true));
    fragment.appendChild(card);
  });
  els.list.appendChild(fragment);
}

function syncLabels(){
  els.ageValue.textContent=Number(state.minAge).toLocaleString();
  els.historyValue.textContent=state.minScore;
}

function selectTemple(id,fly=false){
  const t=temples.find(x=>x.id===id); if(!t)return;
  state.selected=id;
  document.querySelectorAll('.temple-card').forEach(c=>c.classList.toggle('active',c.dataset.id===id));
  markers.forEach((m,key)=>{
    const el=m.getElement(); if(el)el.classList.toggle('selected',key===id);
  });
  if(fly){ map.flyTo([t.lat,t.lng],Math.max(map.getZoom(),14),{duration:.8}); markers.get(id).openPopup(); }
  openDetail(t);
  if(window.innerWidth<=920) els.sidebar.classList.remove('mobile-visible');
  if(location.hash!==`#${id}`) history.replaceState(null,'',`#${id}`);
}

function openDetail(t){
  document.getElementById('detailKicker').textContent=`${t.tradition} · ${t.type}`;
  document.getElementById('detailName').textContent=t.name;
  document.getElementById('detailArea').textContent=`${t.area} · ${t.taluka}`;
  document.getElementById('detailScore').textContent=`${t.score}/100`;
  document.getElementById('detailAge').textContent=ageOf(t)===null?'Unknown':`~${ageOf(t).toLocaleString()}y`;
  document.getElementById('detailConfidence').textContent=t.confidence;
  document.getElementById('detailSummary').textContent=t.summary;
  document.getElementById('detailTags').innerHTML=[t.deity,t.tradition,t.type,t.era].map(x=>`<span class="detail-tag">${safe(x)}</span>`).join('');
  document.getElementById('factGrid').innerHTML=`
    <div class="fact"><span>Date / age basis</span><strong>${safe(t.dateLabel)}</strong></div>
    <div class="fact"><span>Architecture</span><strong>${safe(t.architecture)}</strong></div>
    <div class="fact"><span>Chronology note</span><strong>${safe(t.ageBasis)}</strong></div>
    <div class="fact"><span>Research note</span><strong>${safe(t.notes)}</strong></div>`;
  const sources=document.getElementById('sourceLinks');
  sources.innerHTML=t.sources?.length ? t.sources.map(([label,url])=>`<a class="source-link" target="_blank" rel="noopener" href="${url}"><span>${safe(label)}</span><span>↗</span></a>`).join('') : '<div class="source-empty">No source link has been attached yet. This entry should be treated as a mapped place rather than a historically dated monument.</div>';
  document.getElementById('directionsLink').href=`https://www.google.com/maps/search/?api=1&query=${t.lat},${t.lng}`;
  document.getElementById('shareButton').onclick=async()=>{
    const url=`${location.origin}${location.pathname}#${t.id}`;
    try{await navigator.clipboard.writeText(url);document.getElementById('shareButton').textContent='Copied ✓';setTimeout(()=>document.getElementById('shareButton').textContent='Copy place link',1300)}catch{prompt('Copy this link:',url)}
  };
  els.detailPanel.classList.add('open');els.detailPanel.setAttribute('aria-hidden','false');
}

function closeDetail(){
  els.detailPanel.classList.remove('open');els.detailPanel.setAttribute('aria-hidden','true');
  state.selected=null;
  document.querySelectorAll('.temple-card').forEach(c=>c.classList.remove('active'));
  markers.forEach(m=>{const el=m.getElement();if(el)el.classList.remove('selected')});
  if(location.hash)history.replaceState(null,'',location.pathname+location.search);
}

function fitVisible(){
  const data=filteredTemples(); if(!data.length)return;
  const bounds=L.latLngBounds(data.map(t=>[t.lat,t.lng]));
  map.fitBounds(bounds.pad(.12),{maxZoom:12,animate:true});
}

els.search.addEventListener('input',e=>{state.query=e.target.value;state.quick='all';document.querySelectorAll('[data-quick]').forEach(b=>b.classList.toggle('active',b.dataset.quick==='all'));render()});
els.ageRange.addEventListener('input',e=>{state.minAge=Number(e.target.value);state.quick='all';document.querySelectorAll('[data-quick]').forEach(b=>b.classList.toggle('active',b.dataset.quick==='all'));syncLabels();render()});
els.historyRange.addEventListener('input',e=>{state.minScore=Number(e.target.value);state.quick='all';document.querySelectorAll('[data-quick]').forEach(b=>b.classList.toggle('active',b.dataset.quick==='all'));syncLabels();render()});
els.deitySelect.addEventListener('change',e=>{state.deity=e.target.value;render()});
els.sortSelect.addEventListener('change',e=>{state.sort=e.target.value;render()});
els.includeUnknown.addEventListener('change',e=>{state.includeUnknown=e.target.checked;render()});
els.resetButton.addEventListener('click',reset);
document.getElementById('fitButton').addEventListener('click',fitVisible);
document.getElementById('detailClose').addEventListener('click',closeDetail);
document.getElementById('mobileOpen').addEventListener('click',()=>els.sidebar.classList.add('mobile-visible'));
document.getElementById('mobileClose').addEventListener('click',()=>els.sidebar.classList.remove('mobile-visible'));

document.getElementById('locateButton').addEventListener('click',()=>{
  if(!navigator.geolocation){alert('This browser does not provide geolocation.');return;}
  navigator.geolocation.getCurrentPosition(pos=>{
    const ll=[pos.coords.latitude,pos.coords.longitude];
    if(userMarker)map.removeLayer(userMarker);
    userMarker=L.circleMarker(ll,{radius:7,color:'#fff',weight:3,fillColor:'#72d6ad',fillOpacity:1}).addTo(map).bindPopup('Your current location');
    userMarker.openPopup();map.flyTo(ll,13,{duration:.8});
  },()=>alert('Location permission was not granted.'));
});

document.addEventListener('keydown',e=>{
  if(e.key==='/' && document.activeElement!==els.search){e.preventDefault();els.search.focus();}
  if(e.key==='Escape'){closeDetail();els.sidebar.classList.remove('mobile-visible');}
});

const methodDialog=document.getElementById('methodDialog');
document.getElementById('methodButton').addEventListener('click',()=>methodDialog.showModal());
document.getElementById('methodClose').addEventListener('click',()=>methodDialog.close());
methodDialog.addEventListener('click',e=>{if(e.target===methodDialog)methodDialog.close()});

els.totalPlaces.textContent=temples.length;
els.datedPlaces.textContent=temples.filter(t=>t.dateYear).length;
els.ancientPlaces.textContent=temples.filter(t=>(ageOf(t)??0)>=500).length;
syncLabels();render();
setTimeout(()=>fitVisible(),150);

if(location.hash){
  const id=decodeURIComponent(location.hash.slice(1));
  if(temples.some(t=>t.id===id))setTimeout(()=>selectTemple(id,true),280);
}
