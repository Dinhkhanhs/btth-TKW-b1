const SHOW_IMG_NAME=false; // true: hiện tên file ảnh trên mỗi bánh (bấm để sao chép). Đặt false khi đã xong ảnh.
// Minh họa bánh bằng SVG: [kem, cốt bánh, topping]
const PAL=[["#f6a9bd","#f3d19c","#c8416b"],["#7b4a36","#5a3426","#f8cdd6"],["#fff1dc","#e8b46f","#c8416b"],["#e9d3a6","#fff5df","#4e2e24"],["#e9b96b","#c98a45","#fbe5a9"],["#b5d79a","#e7efd5","#3f7a4a"]];
function cake(i,k){
 const [a,b,c]=PAL[i%6],t=k||0;
 let s='<svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><ellipse cx="100" cy="152" rx="78" ry="10" fill="rgba(60,30,20,.15)"/>';
 if(t==1){ // cupcake
  s+=`<path d="M52 95h96l-14 54H66z" fill="${b}"/><path d="M60 95q-14-8-4-26 6-14 22-14 6-18 22-18t22 18q16 0 22 14 10 18-4 26z" fill="${a}"/><circle cx="100" cy="38" r="9" fill="${c}"/>`;
 }else if(t==2){ // tart / macaron
  s+=`<ellipse cx="100" cy="112" rx="72" ry="22" fill="${b}"/><ellipse cx="100" cy="102" rx="62" ry="17" fill="${a}"/><circle cx="82" cy="98" r="9" fill="${c}"/><circle cx="108" cy="94" r="9" fill="${c}"/><circle cx="124" cy="104" r="8" fill="${c}"/>`;
 }else{ // bánh kem
  s+=`<rect x="36" y="82" width="128" height="62" rx="12" fill="${b}"/><path d="M36 98q10 20 22 0t22 0 22 0 22 0 22 0 14 0V82H36z" fill="${a}"/><rect x="36" y="64" width="128" height="26" rx="13" fill="${a}"/><rect x="97" y="34" width="6" height="24" rx="3" fill="${c}"/><ellipse cx="100" cy="30" rx="5" ry="8" fill="#fbc531"/><circle cx="62" cy="62" r="7" fill="${c}"/><circle cx="138" cy="62" r="7" fill="${c}"/>`;
 }
 return s+'</svg>';
}

// ===== Sản phẩm từ data.js =====
const ALL=[],vnd=n=>(n*1000).toLocaleString('vi-VN')+'đ';
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
C.forEach(c=>c[3].forEach(g=>g[4].forEach(r=>ALL.push({n:r[0],pr:r[1],c:r[2],t:r[3],tag:r[4],f:r[5],cat:c[1],sub:g[1],base:g[2],keep:g[3],s:slug(r[0])}))));

// Ảnh thật: tìm images/<tên-không-dấu>.jpg|png|webp|jpeg. Không có ảnh thì giữ hình minh họa.
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/đ/g,'d');
const EXT=['jpg','png','webp','jpeg'];
function nextImg(im){const i=+im.dataset.i+1;if(i<EXT.length){im.dataset.i=i;im.src='images/'+im.dataset.s+'.'+EXT[i]}else im.remove()}
const photo=p=>`<img src="images/${p.s}.jpg" data-s="${p.s}" data-i="0" alt="${p.n}" loading="lazy" onerror="nextImg(this)" onload="this.parentNode.querySelector('svg').style.visibility='hidden'">`;

const fname=p=>SHOW_IMG_NAME?`<button class="fname" data-copy="${p.s}" title="Bấm để sao chép tên ảnh">📷 ${p.s}</button>`:'';
const card=(p,i)=>`<article class="card" data-n="${norm(p.n+' '+p.sub+' '+p.cat+' '+p.f)}"><button class="pic" data-open="${i}" aria-label="Xem thành phần ${p.n}">${cake(p.c,p.t)}${photo(p)}${p.tag?`<span class="tag">${p.tag}</span>`:''}<span class="more">Xem thành phần</span></button><div class="body"><span class="csub">${p.sub}</span><h3><button class="lnk" data-open="${i}">${p.n}</button></h3><div class="price">${vnd(p.pr)}</div>${fname(p)}<button class="btn" data-add="${i}">Thêm vào giỏ</button></div></article>`;

document.getElementById('catalog').innerHTML=C.map(c=>`<section class="cat" id="${c[0]}"><div class="wrap"><div class="head"><div><h2>${c[1]}</h2><p>${c[2]}</p></div></div>`+c[3].map(g=>`<div class="sub" id="${g[0]}"><h3>${g[1]}</h3><div class="grid">${ALL.map((p,i)=>p.sub===g[1]?card(p,i):'').join('')}</div></div>`).join('')+'</div></section>').join('');

// Nổi bật: mỗi danh mục 1 món có nhãn, thêm 1 món cho đủ 8
const fi=[];ALL.forEach((p,i)=>{if(p.tag&&!fi.some(j=>ALL[j].cat===p.cat))fi.push(i)});
ALL.some((p,i)=>p.tag&&!fi.includes(i)&&fi.push(i));
document.getElementById('grid').innerHTML=fi.map(i=>card(ALL[i],i)).join('');

// ===== Popup chi tiết =====
const dlg=document.getElementById('modal');
function openP(i){const p=ALL[i];
 dlg.innerHTML=`<button class="x" aria-label="Đóng" onclick="dlg.close()">✕</button><div class="m-pic">${cake(p.c,p.t)}${photo(p)}</div><div class="m-body"><span class="csub">${p.cat} · ${p.sub}</span><h2>${p.n}</h2><div class="price">${vnd(p.pr)}</div><p>${p.n} làm từ ${p.f}, hoàn thiện thủ công và nướng mới trong ngày.</p><h3>Thành phần nguyên liệu</h3><ul class="chips">${[...p.f.split(', '),...p.base.split(', ')].map(x=>`<li>${x}</li>`).join('')}</ul><p class="keep"><b>Bảo quản:</b> ${p.keep}</p><p class="keep">Báo trước với tiệm nếu bạn dị ứng thực phẩm.</p>${SHOW_IMG_NAME?`<p class="keep">Tên file ảnh: <b>${p.s}</b></p>`:''}<button class="btn" data-add="${i}">Thêm vào giỏ</button></div>`;
 dlg.showModal()}
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});

// ===== Giỏ hàng =====
let cart=0,tt;const toast=document.getElementById('toast');
const say=m=>{toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2000)};
document.addEventListener('click',e=>{
 const cp=e.target.closest('[data-copy]');if(cp){if(navigator.clipboard)navigator.clipboard.writeText(cp.dataset.copy);say('Đã sao chép tên ảnh: '+cp.dataset.copy);return}
 const o=e.target.closest('[data-open]');if(o){openP(+o.dataset.open);return}
 const b=e.target.closest('[data-add]');if(!b)return;
 if(dlg.open)dlg.close();
 cart++;document.getElementById('count').textContent=cart;
 say('Đã thêm “'+ALL[b.dataset.add].n+'” vào giỏ')});

// ===== Tìm kiếm (gõ có dấu hay không dấu đều được) =====
const q=document.getElementById('q'),info=document.getElementById('empty');
function search(){const raw=q.value.trim(),w=norm(raw).split(/\s+/).filter(Boolean);let n=0;
 document.querySelectorAll('.card').forEach(c=>{const m=w.every(x=>c.dataset.n.includes(x));c.hidden=!m;if(m)n++});
 document.querySelectorAll('.sub').forEach(x=>x.hidden=!x.querySelector('.card:not([hidden])'));
 document.querySelectorAll('section.cat').forEach(x=>x.hidden=!x.querySelector('.card:not([hidden])'));
 document.getElementById('san-pham').hidden=w.length>0;
 info.hidden=!w.length;
 info.textContent=n?`Tìm thấy ${n} bánh cho “${raw}”.`:`Không tìm thấy bánh nào cho “${raw}”. Thử từ khóa như “tiramisu” hoặc “cupcake”.`;
 if(w.length)info.scrollIntoView({block:'start',behavior:'smooth'})}
q.addEventListener('input',search);
document.querySelector('.search').addEventListener('submit',e=>{e.preventDefault();search()});
document.querySelector('.search button').addEventListener('click',e=>{e.preventDefault();search()});

// ===== Bìa đầu trang (ảnh bìa: images/bia.jpg, không có thì hiện hình minh họa) =====
document.querySelectorAll('[data-cake]').forEach(e=>e.insertAdjacentHTML('afterbegin',cake(+e.dataset.cake,0)+photo({s:e.dataset.img,n:'Tiệm Bánh Bơ Sữa'})));
document.getElementById('cover-fname').innerHTML=fname({s:'bia'});

// Menu mobile
const nav=document.getElementById('nav'),bg=document.getElementById('burger');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
document.querySelectorAll('.has-sub>a').forEach(a=>a.addEventListener('click',e=>{
 if(innerWidth<=860){const li=a.parentElement;if(li.classList.contains('open')){nav.classList.remove('open');return}e.preventDefault();document.querySelectorAll('.has-sub.open').forEach(x=>x.classList.remove('open'));li.classList.add('open')}}));
nav.addEventListener('click',e=>{if(e.target.closest('.drop a')||e.target.closest('.nav>li:last-child a')){nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}});
