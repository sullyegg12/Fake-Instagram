/* ============================= ICONS ============================= */
function ic(name, size, strokeWidth){
    size = size || 24;
    const sw = strokeWidth || 1.7;
    const base = `xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"`;
    const icons = {
        heart:`<svg ${base}><path d="M12 20.5s-7.6-4.6-10-9.1C.6 7.9 2 4 6 4c2.2 0 3.7 1.2 4.3 2.3C10.9 5.2 12.4 4 14.6 4c4 0 5.4 3.9 4 7.4-2.4 4.5-10 9.1-10 9.1z"/></svg>`,
        comment:`<svg ${base}><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.3 0-2.5-.3-3.6-.8L4 21l1.8-4.9A8.38 8.38 0 1 1 21 11.5z"/></svg>`,
        plus:`<svg ${base}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
        plusSquare:`<svg ${base}><rect x="3" y="3" width="18" height="18" rx="5"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
        home:`<svg ${base}><path d="M4 10.5 12 3.5l8 7"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1v-4.5h2V20a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9.5"/></svg>`,
        user:`<svg ${base}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7.5 8-7.5s8 3.1 8 7.5"/></svg>`,
        dots:`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>`,
        x:`<svg ${base}><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
        trash:`<svg ${base}><path d="M4 7h16"/><path d="M9 7V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7"/><path d="M6 7l.9 12.6A2 2 0 0 0 8.9 21h6.2a2 2 0 0 0 2-1.4L18 7"/></svg>`,
        chevronLeft:`<svg ${base}><polyline points="15 5 8 12 15 19"/></svg>`,
        chevronRight:`<svg ${base}><polyline points="9 5 16 12 9 19"/></svg>`,
        images:`<svg ${base}><rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/></svg>`,
        upload:`<svg ${base}><path d="M12 4v11"/><polyline points="7.5 8.5 12 4 16.5 8.5"/><path d="M5 20h14"/></svg>`,
        download:`<svg ${base}><path d="M12 4v11"/><polyline points="7.5 11 12 15.5 16.5 11"/><path d="M5 20h14"/></svg>`,
        grid:`<svg ${base}><rect x="3" y="3" width="7.5" height="7.5" rx="1.2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.2"/></svg>`,
        camera:`<svg ${base}><path d="M4 8.5a1.5 1.5 0 0 1 1.5-1.5h1.9l1-1.7a1 1 0 0 1 .9-.5h5.4a1 1 0 0 1 .9.5l1 1.7h1.9A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
        send:`<svg ${base}><line x1="21" y1="3" x2="10.5" y2="13.5"/><path d="M21 3 14.5 21c-.15.4-.7.4-.9 0L10.5 13.5 3 10.4c-.4-.15-.4-.7 0-.9L21 3Z"/></svg>`,
        bookmark:`<svg ${base}><path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4-6.5 4V4.5a1 1 0 0 1 1-1Z"/></svg>`,
        dotsHoriz:`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>`
    };
    return icons[name] || '';
}
function avaCircle(account, size){
    size = size||32;
    if(account && account.avatar){
        return `<img class="ava" src="${account.avatar}" style="width:${size}px;height:${size}px;">`;
    }
    const label = account ? (account.displayName||account.username||'?') : '?';
    const initial = label.trim().charAt(0).toUpperCase();
    return `<span class="ava" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.4)}px;">${initial}</span>`;
}

/* ============================= STATE ============================= */
const STORAGE_KEY = 'privagram_state_v1';
function uid(p){ return p+'_'+Math.random().toString(36).slice(2,9); }
function nowTs(){ return Date.now(); }

function blankAccount(id, username, displayName){
    return {
        id, username, displayName, bio:'', avatar:'',
        followers:0, followingBase:0, followingIds:[], posts:[]
    };
}

function defaultState(){
    const s = {
        mainId: 'main',
        currentViewAccountId: 'main',
        view: 'feed',
        accounts: { main: blankAccount('main','your_username','Your Name') }
    };
    s.accounts.main.bio = "Welcome to my page";
    return s;
}

let state = defaultState();
let storageAvailable = true;
try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
        const parsed = JSON.parse(raw);
        if(parsed && parsed.accounts && parsed.mainId) state = parsed;
    }
}catch(e){
    storageAvailable = false;
}
function saveState(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch(e){ storageAvailable = false; }
}

/* ============================= HELPERS ============================= */
function acc(id){ return state.accounts[id]; }
function mainAcc(){ return state.accounts[state.mainId]; }
function fmtNumFull(n){ return (Number(n)||0).toLocaleString(); }
function fmtNum(n){
    n = Math.round(Number(n)||0);
    const abs = Math.abs(n);
    if(abs < 10000) return n.toLocaleString();
    const units = [ {v:1e9,s:'B'}, {v:1e6,s:'M'}, {v:1e3,s:'k'} ];
    let i = units.findIndex(u=>abs>=u.v);
    let val = n/units[i].v;
    val = Math.round(val*10)/10;
    if(Math.abs(val)>=1000 && i>0){ i--; val = Math.round((n/units[i].v)*10)/10; }
    const str = Number.isInteger(val) ? val.toString() : val.toFixed(1);
    return str+units[i].s;
}
function escapeHtml(s){
    return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function timeAgo(ts){
    const s = Math.floor((Date.now()-ts)/1000);
    if(s<60) return 'Posted just now';
    const m = Math.floor(s/60); if(m<60) return `Posted ${m} minute${m!==1?'s':''} ago`;
    const h = Math.floor(m/60); if(h<24) return `Posted ${h} hour${h!==1?'s':''} ago`;
    const d = Math.floor(h/24); if(d<30) return `Posted ${d} day${d!==1?'s':''} ago`;
    const mo = Math.floor(d/30); if(mo<12) return `Posted ${mo} month${mo!==1?'s':''} ago`;
    const y = Math.floor(mo/12); return `Posted ${y} year${y!==1?'s':''} ago`;
}
function commentTotal(post){ return (post.comments?post.comments.length:0) + (Number(post.extraComments)||0); }
function showToast(msg){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._tid);
    showToast._tid = setTimeout(()=>t.classList.remove('show'), 1800);
}
function readFileAsDataURL(file){
    return new Promise((resolve,reject)=>{
        const r = new FileReader();
        r.onload = ()=>resolve(r.result);
        r.onerror = reject;
        r.readAsDataURL(file);
    });
}

/* ============================= CONFIRM DIALOG ============================= */
function confirmDialog(message, confirmLabel, onConfirm){
    const html = `
    <div class="modal-header"><h2>Please confirm</h2><button class="modal-close" onclick="closeModal()">${ic('x',18)}</button></div>
    <div class="modal-body">
      <p style="font-size:14px;margin:0 0 20px;line-height:1.5;">${escapeHtml(message)}</p>
      <div style="display:flex;gap:10px;">
        <button class="btn outline" id="confirmNoBtn">Cancel</button>
        <button class="btn danger" id="confirmYesBtn">${escapeHtml(confirmLabel||'Delete')}</button>
      </div>
    </div>`;
    openModal(html);
    document.getElementById('confirmNoBtn').onclick = ()=> closeModal();
    document.getElementById('confirmYesBtn').onclick = ()=>{ closeModal(); onConfirm(); };
}

/* ============================= RENDER: HEADER / NAV ICONS (static) ============================= */
document.getElementById('btnFeedIconTop').innerHTML = ic('home',22);
document.getElementById('btnNewPostTop').innerHTML = ic('plusSquare',22);
document.getElementById('navFeed').innerHTML = ic('home',24);
document.getElementById('navNew').innerHTML = ic('plusSquare',24);

function renderTopAvatar(){
    const a = mainAcc();
    document.getElementById('topAvatarWrap').innerHTML = avaCircle(a,26);
    const navSlot = document.getElementById('navProfileAvaWrap');
    navSlot.innerHTML = ic('user',24);
    navSlot.classList.toggle('active', state.view==='profile' && state.currentViewAccountId===state.mainId);
}

/* ============================= RENDER: ROOT ============================= */
function render(){
    saveState();
    renderTopAvatar();
    const app = document.getElementById('app');
    if(state.view === 'feed'){
        app.innerHTML = renderFeedHTML();
    } else if(state.view === 'postpage'){
        app.innerHTML = renderPostPageHTML(state.postPageAccountId, state.postPagePostId);
    } else {
        app.innerHTML = renderProfileHTML(state.currentViewAccountId);
    }
    document.getElementById('navFeed').classList.toggle('active', state.view==='feed');
    document.getElementById('navProfile').classList.toggle('active', state.view==='profile' || state.view==='postpage');
}

/* ============================= FEED ============================= */
function renderFeedHTML(){
    const main = mainAcc();
    const authorIds = [main.id, ...main.followingIds];
    let posts = [];
    authorIds.forEach(id=>{
        const a = acc(id);
        if(!a) return;
        a.posts.forEach(p=> posts.push({post:p, account:a}));
    });
    posts.sort((x,y)=> y.post.timestamp - x.post.timestamp);

    if(posts.length===0){
        return `<div class="empty-state">
      <div class="es-icon">${ic('camera',40,1.3)}</div>
      <h3>Your feed is empty</h3>
      <p>Create a post, or add accounts you follow to see their posts here.</p>
      <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;">
        <button class="btn primary" style="flex:none;padding:8px 16px;" onclick="openNewPostModal('${main.id}')">Create post</button>
        <button class="btn outline" style="flex:none;padding:8px 16px;" onclick="openFollowingModal('${main.id}')">Add accounts</button>
      </div>
    </div>`;
    }

    return `<div style="padding-top:14px;">` + posts.map(({post,account})=> renderPostCard(post,account)).join('') + `</div>`;
}

function renderPostCard(post, account, restricted){
    const total = commentTotal(post);
    const goProfileAttr = restricted ? '' : `onclick="goProfile('${account.id}')"`;
    return `
  <div class="post-card">
    <div class="post-head">
      <a ${goProfileAttr} style="${restricted?'cursor:default;':''}">${avaCircle(account,32)}</a>
      <div class="who" ${goProfileAttr} style="${restricted?'cursor:default;':''}">
        <b>${escapeHtml(account.username)}</b>
      </div>
      ${restricted?'':`<button class="more" onclick="openPostActionSheet('${account.id}','${post.id}')" aria-label="Post options">${ic('dotsHoriz',20)}</button>`}
    </div>
    ${renderPostMedia(post, 0, account.id, post.id)}
    <div class="post-actions">
      <button title="Likes" aria-label="Likes">${ic('heart',24)}<span class="count">${fmtNum(post.likes||0)}</span></button>
      <button title="Comments" aria-label="Comments" onclick="openPostDetail('${account.id}','${post.id}')">${ic('comment',24)}<span class="count">${fmtNum(total)}</span></button>
      <button title="Shares" aria-label="Shares">${ic('send',23)}<span class="count">${fmtNum(post.shares||0)}</span></button>
      <button title="Save" aria-label="Save" style="margin-left:auto;">${ic('bookmark',23)}</button>
    </div>
    <div class="post-stats-line" title="${fmtNumFull(post.likes||0)} likes, ${fmtNumFull(total)} comments, ${fmtNumFull(post.shares||0)} shares, ${fmtNumFull(post.views||0)} views" onclick="openPostDetail('${account.id}','${post.id}')">
      <b>${fmtNum(post.likes||0)}</b> likes &nbsp;&middot;&nbsp; <b>${fmtNum(total)}</b> comments &nbsp;&middot;&nbsp; <b>${fmtNum(post.shares||0)}</b> shares &nbsp;&middot;&nbsp; <b>${fmtNum(post.views||0)}</b> views
    </div>
    ${post.caption ? `<div class="post-caption"><b>${escapeHtml(account.username)}</b>${escapeHtml(post.caption)}</div>` : ''}
    <div class="post-time">${timeAgo(post.timestamp)}</div>
  </div>`;
}

function renderPostMedia(post, carouselIdx, accountId, postId){
    const imgs = post.images||[];
    const idx = carouselIdx||0;
    if(imgs.length===0){
        return `<div class="post-media"><span class="noimg">No image</span></div>`;
    }
    const dots = imgs.length>1 ? `<div class="dots">${imgs.map((_,i)=>
        `<button class="${i===idx?'on':''}" onclick="event.stopPropagation();openPostDetail('${accountId}','${postId}',${i})"></button>`
    ).join('')}</div>` : '';
    const count = imgs.length>1 ? `<div class="img-count">${idx+1}/${imgs.length}</div>` : '';
    return `<div class="post-media" data-idx="${idx}" data-count="${imgs.length}">
      <img src="${imgs[idx]}">
      ${count}
      ${dots}
    </div>`;
}

function goProfile(accountId){
    state.currentViewAccountId = accountId;
    state.view = 'profile';
    render();
}

/* ============================= PAGE ========================*/
function openPostPage(accountId, postId){
    state.view = 'postpage';
    state.postPageAccountId = accountId;
    state.postPagePostId = postId;
    render();
}
function backFromPostPage(){
    state.view = 'profile';
    render();
}
function renderPostPageHTML(accountId, postId){
    const a = acc(accountId);
    const post = a && a.posts.find(p=>p.id===postId);
    if(!post){
        return `<div class="empty-state"><p>Post not found.</p><button class="btn" onclick="backFromPostPage()" style="margin-top:10px;">Go back</button></div>`;
    }
    return `
    <div class="postpage-topbar">
      <button class="back-btn" onclick="backFromPostPage()" aria-label="Back">${ic('chevronLeft',22)}</button>
      <b>Post</b>
    </div>
    ${renderPostCard(post, a, true)}`;
}

/* ============================= PROFILE ============================= */
function renderProfileHTML(accountId){
    const a = acc(accountId);
    if(!a){ state.currentViewAccountId = state.mainId; return renderProfileHTML(state.mainId); }
    const totalLikes = a.posts.reduce((s,p)=> s + (Number(p.likes)||0), 0);
    const isMain = accountId === state.mainId;

    return `
  <div class="profile-top">
    <div class="profile-avatar-lg">${avaCircle(a,84)}</div>
    <div class="profile-info">
      <div class="profile-stats">
        <div class="stat"><b title="${fmtNumFull(a.posts.length)}">${fmtNum(a.posts.length)}</b><span>posts</span></div>
        <div class="stat"><b title="${fmtNumFull(a.followers)}">${fmtNum(a.followers)}</b><span>followers</span></div>
        <button class="stat" onclick="openFollowingModal('${a.id}')"><b title="${fmtNumFull((a.followingBase||0)+a.followingIds.length)}">${fmtNum((a.followingBase||0)+a.followingIds.length)}</b><span>following</span></button>
      </div>
    </div>
  </div>
  <div class="profile-meta">
    <div class="uname">@${escapeHtml(a.username)}</div>
    <div class="disp">${escapeHtml(a.displayName)}</div>
    ${a.bio ? `<div class="bio">${escapeHtml(a.bio)}</div>` : ''}
    <div class="hint" title="${fmtNumFull(totalLikes)}">Total likes across posts: ${fmtNum(totalLikes)}</div>
  </div>
  <div class="profile-btns">
    <button class="btn" onclick="openEditProfileModal('${a.id}')">Edit profile</button>
    <button class="btn" onclick="openNewPostModal('${a.id}')">${ic('plus',15)} New post</button>
    ${!isMain ? `<button class="btn danger" onclick="confirmDeleteAccount('${a.id}')">Delete</button>` : ''}
  </div>
  <div class="tabbar">
    <button class="active" aria-label="Posts">${ic('grid',18)}</button>
  </div>
  ${a.posts.length===0 ? `
    <div class="empty-state">
      <div class="es-icon">${ic('camera',36,1.3)}</div>
      <h3>No posts yet</h3>
      <p>Posts you create for @${escapeHtml(a.username)} will show up here.</p>
    </div>` :
        `<div class="grid">
      ${a.posts.slice().sort((x,y)=>y.timestamp-x.timestamp).map(p=>renderGridItem(a,p)).join('')}
    </div>`
    }
  `;
}

function renderGridItem(account, post){
    const img = (post.images && post.images[0]) ? post.images[0] : null;
    return `<button class="grid-item" onclick="openPostDetail('${account.id}','${post.id}')">
    ${img ? `<img src="${img}">` : `<div class="no-caption">${escapeHtml((post.caption||'No image').slice(0,60))}</div>`}
    ${post.images && post.images.length>1 ? `<span class="stack-icon">${ic('images',16)}</span>` : ''}
  </button>`;
}

/* ============================= NAV WIRING ============================= */
document.getElementById('navFeed').onclick = ()=>{ state.view='feed'; render(); };
document.getElementById('btnFeedIconTop').onclick = ()=>{ state.view='feed'; render(); };
document.getElementById('navProfile').onclick = ()=>{ state.currentViewAccountId = state.mainId; state.view='profile'; render(); };
document.getElementById('navNew').onclick = ()=> openNewPostModal(state.view==='profile'?state.currentViewAccountId:state.mainId);
document.getElementById('btnNewPostTop').onclick = ()=> openNewPostModal(state.view==='profile'?state.currentViewAccountId:state.mainId);

/* ============================= ACCOUNT SWITCHER DROPDOWN ============================= */
document.getElementById('btnAvatarMenu').onclick = (e)=>{
    e.stopPropagation();
    toggleAccountDropdown();
};
function toggleAccountDropdown(){
    const existing = document.querySelector('.dropdown');
    if(existing){ existing.remove(); return; }
    const list = Object.values(state.accounts);
    const html = `<div class="dropdown" id="acctDropdown">
    ${list.map(a=>`
      <div class="dropdown-item">
        <span class="names" onclick="goProfile('${a.id}');closeDropdown();" style="display:flex;align-items:center;gap:10px;flex:1;">
          ${avaCircle(a,32)}
          <span style="display:flex;flex-direction:column;min-width:0;">
            <b>${escapeHtml(a.username)}</b>
            <span>${escapeHtml(a.displayName)}${a.id===state.mainId?' \u00b7 main':''}</span>
          </span>
        </span>
      </div>`).join('')}
    <button class="dropdown-plain-btn" onclick="openFollowingModal(state.mainId);closeDropdown();">${ic('plus',18)} Create fake account</button>
    <button class="dropdown-plain-btn" onclick="exportData();closeDropdown();">${ic('download',18)} Export data (save to file)</button>
    <button class="dropdown-plain-btn" onclick="document.getElementById('importFileInput').click();closeDropdown();">${ic('upload',18)} Import data</button>
  </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
}
function closeDropdown(){
    const d = document.getElementById('acctDropdown');
    if(d) d.remove();
}
document.addEventListener('click', (e)=>{
    const d = document.getElementById('acctDropdown');
    if(d && !d.contains(e.target) && e.target.id!=='btnAvatarMenu'){ d.remove(); }
});

/* hidden import input */
const importInput = document.createElement('input');
importInput.type='file'; importInput.accept='application/json'; importInput.id='importFileInput'; importInput.style.display='none';
document.body.appendChild(importInput);
importInput.onchange = async (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    try{
        const text = await file.text();
        const parsed = JSON.parse(text);
        if(!parsed.accounts || !parsed.mainId) throw new Error('bad file');
        state = parsed;
        render();
        showToast('Data imported');
    }catch(err){
        showToast('Could not import that file');
    }
    importInput.value='';
};
function exportData(){
    const blob = new Blob([JSON.stringify(state,null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'privagram_data.json';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    showToast('Data exported');
}

/* ============================= MODAL HELPERS ============================= */
function openModal(html, wide){
    document.getElementById('modalRoot').innerHTML = `
    <div class="overlay" id="genericOverlay">
      <div class="modal ${wide?'wide':''}">${html}</div>
    </div>`;
    document.getElementById('genericOverlay').addEventListener('mousedown', (e)=>{
        if(e.target.id==='genericOverlay') closeModal();
    });
}
function closeModal(){
    document.getElementById('modalRoot').innerHTML = '';
}
function openBottomSheet(html, extraClass){
    document.getElementById('modalRoot').innerHTML = `
    <div class="overlay sheet-overlay" id="genericOverlay">
      <div class="sheet-panel ${extraClass||''}">${html}</div>
    </div>`;
    document.getElementById('genericOverlay').addEventListener('mousedown', (e)=>{
        if(e.target.id==='genericOverlay') closeModal();
    });
}

/* ============================= EDIT PROFILE ============================= */
function openEditProfileModal(accountId){
    const a = acc(accountId);
    const html = `
    <div class="modal-header"><h2>Edit profile</h2><button class="modal-close" onclick="closeModal()">${ic('x',18)}</button></div>
    <div class="modal-body">
      <div class="avatar-edit">
        <div id="epAvatarPreview">${avaCircle(a,56)}</div>
        <label class="linklike">Change profile photo
          <input type="file" accept="image/*" id="epAvatarInput">
        </label>
      </div>
      <div class="field-row">
        <div class="field">
          <label>Username</label>
          <input type="text" id="epUsername" value="${escapeHtml(a.username)}">
        </div>
        <div class="field">
          <label>Display name</label>
          <input type="text" id="epDisplayName" value="${escapeHtml(a.displayName)}">
        </div>
      </div>
      <div class="field">
        <label>Bio</label>
        <textarea id="epBio">${escapeHtml(a.bio)}</textarea>
      </div>
      <div class="field">
        <label>Followers count</label>
        <input type="number" id="epFollowers" value="${a.followers}" min="0">
        <div class="hint">Set this to whatever follower count you want shown on the profile.</div>
      </div>
      <div class="field">
        <label>Following count (extra)</label>
        <input type="number" id="epFollowingBase" value="${a.followingBase||0}" min="0">
        <div class="hint">Added on top of however many fake accounts you actually follow below, so the total can be anything you like.</div>
      </div>
      <button class="btn primary" style="width:100%;" onclick="saveEditProfile('${accountId}')">Save</button>
    </div>`;
    openModal(html);
    let pendingAvatar = a.avatar;
    document.getElementById('epAvatarInput').onchange = async (e)=>{
        const file = e.target.files[0];
        if(!file) return;
        pendingAvatar = await readFileAsDataURL(file);
        document.getElementById('epAvatarPreview').innerHTML = `<img src="${pendingAvatar}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;">`;
    };
    window._pendingAvatarGetter = ()=>pendingAvatar;
}
function saveEditProfile(accountId){
    const a = acc(accountId);
    a.username = document.getElementById('epUsername').value.trim() || a.username;
    a.displayName = document.getElementById('epDisplayName').value.trim() || a.displayName;
    a.bio = document.getElementById('epBio').value;
    a.followers = Math.max(0, parseInt(document.getElementById('epFollowers').value)||0);
    a.followingBase = Math.max(0, parseInt(document.getElementById('epFollowingBase').value)||0);
    a.avatar = window._pendingAvatarGetter ? window._pendingAvatarGetter() : a.avatar;
    closeModal();
    render();
    showToast('Profile updated');
}

/* ============================= FOLLOWING MODAL ============================= */
function openFollowingModal(accountId){
    renderFollowingModal(accountId);
}
function renderFollowingModal(accountId){
    const a = acc(accountId);
    const followed = a.followingIds.map(id=>acc(id)).filter(Boolean);
    const notFollowed = Object.values(state.accounts).filter(x=> x.id!==accountId && !a.followingIds.includes(x.id));
    const html = `
    <div class="modal-header"><h2>Following</h2><button class="modal-close" onclick="closeModal()">${ic('x',18)}</button></div>
    <div class="modal-body">
      <button class="btn primary" style="width:100%;margin-bottom:14px;" onclick="openCreateAccountModal('${accountId}')">${ic('plus',15)} Create new fake account</button>
      ${a.followingBase>0?`<div class="hint" style="margin-bottom:14px;">+ ${a.followingBase} more counted in your following total but not listed here (set in Edit profile).</div>`:''}
      ${followed.length? followed.map(f=>`
        <div class="follow-list-item">
          <span onclick="goProfile('${f.id}');closeModal();" style="cursor:pointer;">${avaCircle(f,40)}</span>
          <div class="names" onclick="goProfile('${f.id}');closeModal();">
            <b>${escapeHtml(f.username)}</b>
            <span>${escapeHtml(f.displayName)}</span>
          </div>
          <button class="following" onclick="unfollow('${accountId}','${f.id}')">Following</button>
        </div>
      `).join('') : `<div class="hint">Not following anyone yet.</div>`}
      ${notFollowed.length? `
        <div class="section-title" style="padding:0;margin:18px 0 8px;">Other accounts you made</div>
        ${notFollowed.map(f=>`
          <div class="follow-list-item">
            <span onclick="goProfile('${f.id}');closeModal();" style="cursor:pointer;">${avaCircle(f,40)}</span>
            <div class="names" onclick="goProfile('${f.id}');closeModal();">
              <b>${escapeHtml(f.username)}</b>
              <span>${escapeHtml(f.displayName)}</span>
            </div>
            <button onclick="followAcc('${accountId}','${f.id}')">Follow</button>
          </div>
        `).join('')}
      ` : ''}
    </div>`;
    openModal(html);
}
function followAcc(accountId, targetId){
    const a = acc(accountId);
    if(!a.followingIds.includes(targetId)) a.followingIds.push(targetId);
    renderFollowingModal(accountId);
    render();
}
function unfollow(accountId, targetId){
    const a = acc(accountId);
    a.followingIds = a.followingIds.filter(id=>id!==targetId);
    renderFollowingModal(accountId);
    render();
}

/* ============================= CREATE FAKE ACCOUNT ============================= */
function openCreateAccountModal(followerAccountId){
    const html = `
    <div class="modal-header"><h2>Create fake account</h2><button class="modal-close" onclick="closeModal()">${ic('x',18)}</button></div>
    <div class="modal-body">
      <div class="avatar-edit">
        <div id="caAvatarPreview">${avaCircle(null,56)}</div>
        <label class="linklike">Add profile photo
          <input type="file" accept="image/*" id="caAvatarInput">
        </label>
      </div>
      <div class="field-row">
        <div class="field">
          <label>Username</label>
          <input type="text" id="caUsername" placeholder="jane_doe">
        </div>
        <div class="field">
          <label>Display name</label>
          <input type="text" id="caDisplayName" placeholder="Jane Doe">
        </div>
      </div>
      <div class="field">
        <label>Bio</label>
        <textarea id="caBio" placeholder="A little about this account..."></textarea>
      </div>
      <div class="field">
        <label>Followers count</label>
        <input type="number" id="caFollowers" value="0" min="0">
      </div>
      <button class="btn primary" style="width:100%;" onclick="saveNewAccount('${followerAccountId}')">Create account</button>
    </div>`;
    openModal(html);
    let pendingAvatar = '';
    document.getElementById('caAvatarInput').onchange = async (e)=>{
        const file = e.target.files[0];
        if(!file) return;
        pendingAvatar = await readFileAsDataURL(file);
        document.getElementById('caAvatarPreview').innerHTML = `<img src="${pendingAvatar}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;">`;
    };
    window._pendingAvatarGetter = ()=>pendingAvatar;
}
function saveNewAccount(followerAccountId){
    const username = document.getElementById('caUsername').value.trim() || ('user_'+Math.floor(Math.random()*9999));
    const displayName = document.getElementById('caDisplayName').value.trim() || username;
    const bio = document.getElementById('caBio').value;
    const followers = Math.max(0, parseInt(document.getElementById('caFollowers').value)||0);
    const avatar = window._pendingAvatarGetter ? window._pendingAvatarGetter() : '';
    const id = uid('acc');
    const newAcc = blankAccount(id, username, displayName);
    newAcc.bio = bio; newAcc.followers = followers; newAcc.avatar = avatar;
    state.accounts[id] = newAcc;
    if(followerAccountId){
        const follower = acc(followerAccountId);
        if(follower && !follower.followingIds.includes(id)) follower.followingIds.push(id);
    }
    renderFollowingModal(followerAccountId);
    render();
    showToast('Fake account created');
}

function confirmDeleteAccount(accountId){
    if(accountId===state.mainId){ showToast("You can't delete your main profile"); return; }
    confirmDialog('Delete this account and all its posts? This cannot be undone.', 'Delete account', ()=>{
        delete state.accounts[accountId];
        Object.values(state.accounts).forEach(a=>{
            a.followingIds = a.followingIds.filter(id=>id!==accountId);
        });
        state.currentViewAccountId = state.mainId;
        render();
        showToast('Account deleted');
    });
}

/* ============================= NEW / EDIT POST ============================= */
function openNewPostModal(accountId){
    openPostForm(accountId, null);
}
function openPostActionSheet(accountId, postId){
    const a = acc(accountId);
    const post = a.posts.find(p=>p.id===postId);
    const html = `
    <div class="sheet">
      <button class="sheet-btn danger" onclick="closeModal();confirmDeletePost('${accountId}','${postId}')">Delete post</button>
      <button class="sheet-btn" onclick="closeModal();openEditStatsModal('${accountId}','${postId}')">Edit likes / comments / shares / favorites</button>
      <button class="sheet-btn" onclick="closeModal();openPostForm('${accountId}','${postId}')">Edit post (photos/caption)</button>
      <button class="sheet-btn" onclick="closeModal()">Cancel</button>
    </div>`;
    openModal(html); // or a dedicated bottom-sheet opener, see comments popup section below
}

function openEditStatsModal(accountId, postId){
    const post = acc(accountId).posts.find(p=>p.id===postId);
    const html = `
    <div class="modal-header"><h2>Edit stats</h2><button class="modal-close" onclick="closeModal()">${ic('x',18)}</button></div>
    <div class="modal-body">
      <div class="field"><label>Likes</label><input type="number" id="esLikes" min="0" value="${post.likes||0}"></div>
      <div class="field"><label>Extra comments</label><input type="number" id="esExtraComments" min="0" value="${post.extraComments||0}"></div>
      <div class="field"><label>Shares</label><input type="number" id="esShares" min="0" value="${post.shares||0}"></div>
      <div class="field"><label>Favorites</label><input type="number" id="esFavorites" min="0" value="${post.favorites||0}"></div>
      <div class="field"><label>Views</label><input type="number" id="esViews" min="0" value="${post.views||0}"></div>
      <button class="btn primary" style="width:100%;" onclick="saveEditStats('${accountId}','${postId}')">Save</button>
    </div>`;
    openModal(html);
}
function saveEditStats(accountId, postId){
    const post = acc(accountId).posts.find(p=>p.id===postId);
    post.likes = Math.max(0, parseInt(document.getElementById('esLikes').value)||0);
    post.extraComments = Math.max(0, parseInt(document.getElementById('esExtraComments').value)||0);
    post.shares = Math.max(0, parseInt(document.getElementById('esShares').value)||0);
    post.favorites = Math.max(0, parseInt(document.getElementById('esFavorites').value)||0);
    post.views = Math.max(0, parseInt(document.getElementById('esViews').value)||0);
    closeModal();
    render();
    showToast('Stats updated');
}
function attachSwipe(el, onLeft, onRight){
    let startX = null;
    el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
    el.addEventListener('touchend', e => {
        if(startX===null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if(Math.abs(dx) > 40){ dx < 0 ? onLeft() : onRight(); }
        startX = null;
    }, {passive:true});
}
function openPostForm(accountId, postId){
    const a = acc(accountId);
    const post = postId ? a.posts.find(p=>p.id===postId) : null;
    const images = post ? post.images.slice() : [];
    const html = `
    <div class="modal-header"><h2>${post?'Edit post':'New post'}</h2><button class="modal-close" onclick="closeModal()">${ic('x',18)}</button></div>
    <div class="modal-body">
      <div class="hint" style="margin-bottom:10px;">Posting as @${escapeHtml(a.username)}</div>
      <div class="field">
        <label>Images (optional, multiple allowed)</label>
        <div class="img-upload-row" id="pfImgRow"></div>
        <input type="file" accept="image/*" multiple id="pfImgInput" style="display:none;">
        <button class="btn outline" style="width:auto;padding:6px 12px;" onclick="document.getElementById('pfImgInput').click()">${ic('plus',15)} Add images</button>
      </div>
      <div class="field">
        <label>Caption</label>
        <textarea id="pfCaption" placeholder="Write a caption...">${post?escapeHtml(post.caption):''}</textarea>
      </div>
      <div class="field-row" style="flex-wrap:wrap;">
        <div class="field" style="min-width:110px;">
          <label>Likes</label>
          <input type="number" id="pfLikes" min="0" value="${post?post.likes:0}">
        </div>
        <div class="field" style="min-width:110px;">
          <label>Shares</label>
          <input type="number" id="pfShares" min="0" value="${post?(post.shares||0):0}">
        </div>
        <div class="field" style="min-width:110px;">
          <label>Extra comments</label>
          <input type="number" id="pfExtraComments" min="0" value="${post?(post.extraComments||0):0}">
        </div>
      </div>
      <div class="hint" style="margin-bottom:14px;">Extra comment count is added on top of any real comments you write below, so the shown comment total can be anything you like.</div>
      <button class="btn primary" style="width:100%;" onclick="savePost('${accountId}','${postId||''}')">${post?'Save changes':'Share'}</button>
      ${post?`<button class="btn danger" style="width:100%;margin-top:8px;" onclick="confirmDeletePost('${accountId}','${postId}')">Delete post</button>`:''}
    </div>`;
    openModal(html, false);
    window._pfImages = images;
    renderPfImageRow();
    document.getElementById('pfImgInput').onchange = async (e)=>{
        const files = Array.from(e.target.files);
        for(const f of files){
            const url = await readFileAsDataURL(f);
            window._pfImages.push(url);
        }
        renderPfImageRow();
        e.target.value='';
    };
}
function renderPfImageRow(){
    const row = document.getElementById('pfImgRow');
    row.innerHTML = window._pfImages.map((src,i)=>`
    <div class="img-thumb">
      <img src="${src}">
      <button class="rm" onclick="removePfImage(${i})">${ic('x',12)}</button>
    </div>
  `).join('');
}
function removePfImage(i){
    window._pfImages.splice(i,1);
    renderPfImageRow();
}
function savePost(accountId, postId){
    const a = acc(accountId);
    const caption = document.getElementById('pfCaption').value;
    const likes = Math.max(0, parseInt(document.getElementById('pfLikes').value)||0);
    const shares = Math.max(0, parseInt(document.getElementById('pfShares').value)||0);
    const extraComments = Math.max(0, parseInt(document.getElementById('pfExtraComments').value)||0);
    const images = window._pfImages.slice();
    if(postId){
        const post = a.posts.find(p=>p.id===postId);
        post.caption = caption; post.likes = likes; post.shares = shares; post.extraComments = extraComments; post.images = images;
    } else {
        a.posts.push({
            id: uid('post'), images, caption, likes, shares, extraComments,
            comments: [], timestamp: nowTs()
        });
    }
    closeModal();
    state.currentViewAccountId = accountId;
    state.view = 'profile';
    render();
    showToast(postId?'Post updated':'Post shared');
}
function confirmDeletePost(accountId, postId){
    confirmDialog('Delete this post? This cannot be undone.', 'Delete post', ()=>{
        const a = acc(accountId);
        a.posts = a.posts.filter(p=>p.id!==postId);
        render();
        showToast('Post deleted');
    });
}
function openPostMenu(accountId, postId){
    openPostForm(accountId, postId);
}

/* ============================= POST DETAIL (view/comments) ============================= */
function openPostDetail(accountId, postId, carouselIdx){
    const a = acc(accountId);
    const post = a.posts.find(p=>p.id===postId);
    if(!post) return;
    const idx = carouselIdx||0;
    const imgs = post.images||[];
    const total = commentTotal(post);

    const mediaHtml = imgs.length ? `
    <div class="pd-media" id="pdMediaEl">
      <img src="${imgs[idx]}">
      ${imgs.length>1?`
        ${idx>0?`<button class="arrow left" onclick="openPostDetail('${accountId}','${postId}',${idx-1})">${ic('chevronLeft',18)}</button>`:''}
        ${idx<imgs.length-1?`<button class="arrow right" onclick="openPostDetail('${accountId}','${postId}',${idx+1})">${ic('chevronRight',18)}</button>`:''}
        <div class="img-count">${idx+1}/${imgs.length}</div>
      `:''}
    </div>` : `<div class="pd-media"><span class="noimg">No image</span></div>`;

    const commentsHtml = (post.comments||[]).map((c,i)=>`
      <div class="pd-comment">
        <span class="txt"><b>${escapeHtml(c.author)}</b>${escapeHtml(c.text)}</span>
        <button class="del" onclick="deleteComment('${accountId}','${postId}',${i})" aria-label="Delete comment">${ic('x',13)}</button>
        <button class="pd-comment-like" title="Like" aria-label="Like comment">${ic('heart',15)}</button>
      </div>
    `).join('');

    const html = `
    <div class="postdetail">
      ${mediaHtml}
      ${imgs.length>1?`<div class="dots">${imgs.map((_,i)=>
        `<button class="${i===idx?'on':''}" onclick="openPostDetail('${accountId}','${postId}',${i})"></button>`
    ).join('')}</div>`:''}
      <div class="pd-side">
        <div class="pd-header">
          ${avaCircle(a,32)}
          <b style="font-size:13px;cursor:pointer;" onclick="closeModal();goProfile('${accountId}')">${escapeHtml(a.username)}</b>
          <button class="modal-close" style="margin-left:auto;" onclick="openPostActionSheet('${accountId}','${postId}')" aria-label="Post options">${ic('dotsHoriz',20)}</button>
          <button class="modal-close" onclick="closeModal()" aria-label="Close">${ic('x',18)}</button>
        </div>
        <div class="pd-footer">
           <div class="actions">
            <button title="Likes" aria-label="Likes">${ic('heart',24)}<span class="count">${fmtNum(post.likes||0)}</span></button>
            <button title="Comment" aria-label="Comment" onclick="document.getElementById('pdCommentText').focus()">${ic('comment',24)}<span class="count">${fmtNum(total)}</span></button>
            <button title="Share" aria-label="Share">${ic('send',23)}<span class="count">${fmtNum(post.shares||0)}</span></button>
            <button title="Save" aria-label="Save" style="margin-left:auto;">${ic('bookmark',23)}</button>
          </div>
          <div class="post-stats-line" style="padding:0 0 6px;cursor:default;" title="${fmtNumFull(post.likes||0)} likes, ${fmtNumFull(total)} comments, ${fmtNumFull(post.shares||0)} shares, ${fmtNumFull(post.views||0)} views">
            <b>${fmtNum(post.likes||0)}</b> likes &nbsp;&middot;&nbsp; <b>${fmtNum(total)}</b> comments &nbsp;&middot;&nbsp; <b>${fmtNum(post.shares||0)}</b> shares &nbsp;&middot;&nbsp; <b>${fmtNum(post.views||0)}</b> views
          </div>
          <div class="post-time" style="padding:0 0 8px;">${timeAgo(post.timestamp)}</div>
          <div class="pd-comments" id="pdCommentsList">
            ${commentsHtml}
            ${post.extraComments>0?`<div class="hint">+ ${post.extraComments} more comments not shown individually</div>`:''}
            ${total===0 ? `<div class="hint">No comments yet.</div>`:''}
          </div>
          <div class="addcomment-row">
            <input type="text" id="pdCommentAuthor" placeholder="Author name" style="max-width:110px;">
            <input type="text" id="pdCommentText" placeholder="Add a comment...">
            <button onclick="addComment('${accountId}','${postId}')">Post</button>
          </div>
        </div>
      </div>
    </div>`;
    openBottomSheet(html, 'sheet-panel--tall');
    if(imgs.length>1){
        const mediaEl = document.getElementById('pdMediaEl');
        attachSwipe(mediaEl,
            ()=>{ if(idx<imgs.length-1) openPostDetail(accountId, postId, idx+1); },
            ()=>{ if(idx>0) openPostDetail(accountId, postId, idx-1); }
        );
    }
}
function updateLikes(accountId, postId){
    const post = acc(accountId).posts.find(p=>p.id===postId);
    post.likes = Math.max(0, parseInt(document.getElementById('pdLikesInput').value)||0);
    openPostDetail(accountId, postId);
    render();
}
function updateExtraComments(accountId, postId){
    const post = acc(accountId).posts.find(p=>p.id===postId);
    post.extraComments = Math.max(0, parseInt(document.getElementById('pdExtraInput').value)||0);
    openPostDetail(accountId, postId);
    render();
}
function addComment(accountId, postId){
    const post = acc(accountId).posts.find(p=>p.id===postId);
    const author = document.getElementById('pdCommentAuthor').value.trim() || acc(accountId).username;
    const text = document.getElementById('pdCommentText').value.trim();
    if(!text) return;
    post.comments = post.comments || [];
    post.comments.push({author, text});
    openPostDetail(accountId, postId);
    render();
}
function deleteComment(accountId, postId, idx){
    const post = acc(accountId).posts.find(p=>p.id===postId);
    post.comments.splice(idx,1);
    openPostDetail(accountId, postId);
    render();
}

/* ============================= INIT ============================= */
render();
if(!storageAvailable){
    showToast('Autosave unavailable here - use Export/Import to keep your data');
}
