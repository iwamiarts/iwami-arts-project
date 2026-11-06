'use strict';
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(menuToggle&&nav){
  const setMenu=(open)=>{menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);};
  menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape')setMenu(false)});
}
document.querySelectorAll('.year').forEach(el=>{el.textContent=new Date().getFullYear()});
for(const img of document.querySelectorAll('img[data-fallback]')){
  img.addEventListener('error',()=>{
    if(img.dataset.fallback&&img.src!==new URL(img.dataset.fallback,document.baseURI).href){
      img.src=img.dataset.fallback;img.alt+='（活動写真を読み込めなかったため、写真準備中の案内を表示しています）';
      const box=img.closest('.gallery-item');if(box){box.dataset.caption+='（写真が読み込めませんでした）';box.dataset.category='pending';}
    }
  });
}
const filterButtons=[...document.querySelectorAll('.filter-chip')];
const galleryItems=[...document.querySelectorAll('.gallery-item')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filterButtons.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
  galleryItems.forEach(item=>item.hidden=filter!=='all'&&item.dataset.category!==filter);
}));
const dialog=document.querySelector('.lightbox');
if(dialog){
 const largeImage=dialog.querySelector('figure img');const caption=dialog.querySelector('figcaption');let currentIndex=0;
 const visibleItems=()=>galleryItems.filter(x=>!x.hidden);
 const show=(index)=>{const visible=visibleItems();if(!visible.length)return;currentIndex=(index+visible.length)%visible.length;const item=visible[currentIndex];const img=item.querySelector('img');largeImage.src=img.currentSrc||img.src;largeImage.alt=img.alt;caption.textContent=item.dataset.caption||img.alt;};
 galleryItems.forEach(item=>item.addEventListener('click',()=>{show(visibleItems().indexOf(item));if(typeof dialog.showModal==='function')dialog.showModal();}));
 dialog.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
 dialog.querySelector('.lightbox-prev').addEventListener('click',()=>show(currentIndex-1));
 dialog.querySelector('.lightbox-next').addEventListener('click',()=>show(currentIndex+1));
 dialog.addEventListener('click',(e)=>{if(e.target===dialog)dialog.close();});
 document.addEventListener('keydown',(e)=>{if(!dialog.open)return;if(e.key==='ArrowLeft')show(currentIndex-1);if(e.key==='ArrowRight')show(currentIndex+1);});
}

// X timeline is loaded only after explicit visitor interaction.
const xLoadButton=document.querySelector('.x-load');
if(xLoadButton){
 xLoadButton.addEventListener('click',()=>{
  const host=document.querySelector('.x-timeline');
  const mount=document.querySelector('.x-timeline-mount');
  if(!host||!mount)return;
  if(!host.hidden){host.hidden=true;xLoadButton.setAttribute('aria-expanded','false');xLoadButton.innerHTML='Xの最新投稿を表示 <span>↓</span>';return;}
  host.hidden=false;xLoadButton.setAttribute('aria-expanded','true');xLoadButton.innerHTML='タイムラインを閉じる <span>↑</span>';
  if(mount.dataset.initialized)return;
  mount.dataset.initialized='true';
  const link=document.createElement('a');
  link.className='twitter-timeline';link.href='https://twitter.com/ARTS_IWAMI';
  link.setAttribute('data-height','410');link.setAttribute('data-chrome','noheader nofooter');
  link.textContent='イワミアーツプロジェクトの投稿をXで見る';
  mount.appendChild(link);
  const script=document.createElement('script');
  script.async=true;script.charset='utf-8';script.src='https://platform.twitter.com/widgets.js';
  document.body.appendChild(script);
 });
}


// お知らせは news-data.js の window.IAP_NEWS だけを編集すれば更新できます。
(function renderNews(){
  const raw = Array.isArray(window.IAP_NEWS) ? window.IAP_NEWS : [];
  const articles=raw.filter(item=>item && /^\d{4}-\d{2}-\d{2}$/.test(item.date||'') && item.id && item.title)
    .sort((a,b)=>b.date.localeCompare(a.date));
  const home=document.getElementById('home-news-list');
  const archive=document.getElementById('news-archive');
  const text=(v)=>String(v??'');
  const displayDate=(v)=>v.replaceAll('-','.');
  const safeLink=(url)=>{
    if(!url)return '';
    try{const u=new URL(url,document.baseURI);return ['http:','https:'].includes(u.protocol) ? u.href : '';}catch(e){return '';}
  };
  if(home){
    home.replaceChildren();
    articles.slice(0,4).forEach(item=>{
      const a=document.createElement('a'); a.href='news.html#'+encodeURIComponent(item.id);
      const date=document.createElement('time');date.dateTime=item.date;date.textContent=displayDate(item.date);
      const cat=document.createElement('span');cat.className='news-category';cat.textContent=text(item.category||'お知らせ');
      const title=document.createElement('strong');title.textContent=text(item.title);
      const mark=document.createElement('b');mark.textContent='↗';
      a.append(date,cat,title,mark);home.append(a);
    });
    if(!articles.length){const p=document.createElement('p');p.textContent='お知らせは準備中です。';home.append(p)}
  }
  if(archive){
    archive.replaceChildren();
    articles.forEach(item=>{
      const article=document.createElement('article');article.className='news-article';article.id=item.id;
      const meta=document.createElement('div');meta.className='news-article-meta';
      const date=document.createElement('time');date.dateTime=item.date;date.textContent=displayDate(item.date);
      const cat=document.createElement('span');cat.className='news-article-category';cat.textContent=text(item.category||'お知らせ');
      meta.append(date,cat);
      const h=document.createElement('h2');h.textContent=text(item.title);
      article.append(meta,h);
      text(item.body).split(/\n+/).filter(Boolean).forEach(part=>{const body=document.createElement('p');body.textContent=part;article.append(body)});
      const href=safeLink(item.link);
      if(href){const link=document.createElement('a');link.href=href;link.className='arrow-link';link.textContent=text(item.linkText||'詳しく見る')+' ↗';if(new URL(href,document.baseURI).origin!==location.origin){link.target='_blank';link.rel='noopener noreferrer'}article.append(link)}
      archive.append(article);
    });
    if(!articles.length){const p=document.createElement('p');p.textContent='お知らせは準備中です。';archive.append(p)}
    if(location.hash){const id=decodeURIComponent(location.hash.slice(1));const target=articles.find(x=>x.id===id)?document.getElementById(id):null;if(target)requestAnimationFrame(()=>target.scrollIntoView())}
  }
})();
